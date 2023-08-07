const inquirer = require('inquirer');
const fs = require('fs');

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const start = true;
const consoleTable = require('console.table');

// Connect to employees database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // TODO: Add your mysql username and password here! 
        user: '',
        password: '',
        database: 'employees_db'
    },
);

function employeeTracker () {
    inquirer
    .prompt([
    {
        type: 'list',
        message: 'Welcome to the Employee Manager. What would you like to do?',
        name: 'options',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
    }

    ])

    .then((response) => {   
        switch (response.options) {
            case 'View All Departments':
                // mysql commands to see the department table (which will list all departments)
                db.query(`SELECT * FROM department`, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    console.table(result);
                    // return the user to the home menu after the result has rendered
                    employeeTracker();
                });
                break;
        
            case 'View All Roles': 
                db.query(`SELECT 
                roles.title AS 'Job Title', 
                roles.id AS 'Role ID',
                department.department_name AS 'Department Name',
                roles.salary AS 'Salary'
                FROM roles
                INNER JOIN department
                ON roles.department_id = department.id
                ORDER BY roles.salary DESC;`, (err, response) => {
                    if (err) {
                        console.log(err);
                    } 
                        console.table(response)
                        employeeTracker();
                });
                break;

            case 'View All Employees':

                db.query(`SELECT employee.id AS 'Employee ID', CONCAT(employee.first_name, ' ', employee.last_name) AS 'Employee Name',
                roles.title AS 'Job Title', department.department_name AS 'Department', roles.salary AS 'Salary', 
                CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
                FROM employee
                LEFT JOIN roles
                ON employee.role_id = roles.id 
                LEFT JOIN department 
                ON roles.department_id = department.id
                LEFT JOIN employee manager on manager.id = employee.manager_id
                ORDER BY roles.salary DESC`, (err, response) => {
                    if (err) {
                        console.log(err);
                    } 
                        console.table(response)
                        employeeTracker();
                });
                break;

            case 'Add A Department':
                inquirer.prompt([
                        {
                            type: 'input',
                            name: 'newDept',
                            message: 'Enter the department name you would like to add:',
                        }
                ])
                .then(function (answers) {
                    // use a constant to hold onto the user's answer and add it to the sql query below
                    const newDept = answers.newDept;
                    db.promise().query(
                        `INSERT INTO department (department.department_name) VALUES ('${newDept}')`);
                    console.log(`'${newDept}' has been added to Departments.`)
                }) 
                .then(() => {
                    employeeTracker();
                })
                break;
                
            case 'Add A Role':
                db.query(`SELECT * FROM department`, function (err, results) {
                    // map over the two columns in the department table and pull out the values for each to provide choice in the third prompt below
                    const deptsArray = results.map(({ department_name, id }) => ({ 'name': department_name, 'value': id }))
                    
                    inquirer.prompt([
                    
                        {
                            type: 'input',
                            name: 'newRole',
                            message: 'Enter the name of the role that you would like to add:',
                        },
                        {
                            type: 'input',
                            name: 'newRoleSalary',
                            message: 'Enter the salary amount for the role that you would like to add:',
                            validate(input) {
                                if (isNaN(input)) {
                                    return 'You have not entered a number for the salary.'
                                }
                                return true;
                            },
                        },
                        {
                            type: 'list',
                            message: 'To which department does this role belong?',
                            name: 'departmentOptions',
                            choices: deptsArray,
                        }
                    ]).then(function (answers) {
                        // using variables here to insert the user's selections into the mysql call
                        db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.newRole, answers.newRoleSalary, answers.departmentOptions], (err, results) => {
                            console.log(`${answers.newRole} has been added to the roles table.`);
                            employeeTracker();
                        });
                    })
                })
                break;

            case 'Add An Employee':      
                db.query(`SELECT * FROM roles`, function (err, results) { 
                    // creates an array from the roles table
                    const roleArr = results.map(({ title, id }) => ({ 'name': title, 'value': id }))
                    if (err) throw err;
                
                    db.query(`SELECT * FROM employee`, function (err, results) {
                        // creates an array from the employee table
                        const managerArr = results.map(({ first_name, last_name, id }) => ({ 'name': first_name + " " + last_name, 'value': id }))
                        if (err) throw err;
                
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'firstName',
                                message: `Enter the employee's first name:`,
                            },
                            {
                                type: 'input',
                                name: 'lastName',
                                message: `Enter the employee's last name:`,
                            },
                            {
                                type: 'list',
                                name: 'newEmpRole',
                                message: `Select this employee's role:`,
                                choices: roleArr
                            },
                            {
                                type: 'list',
                                name: 'newEmpManager',
                                message: `Select the manager for this employee:`,
                                choices: managerArr
                            }
                        ])
                        .then(function (answers) {              
                            
                            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answers.firstName, answers.lastName, answers.newEmpRole, answers.newEmpManager], (err, results) => {
                                if (err) throw err;
                                console.log(`${answers.firstName} ${answers.lastName} has been added to Employees.`);
                                employeeTracker();
                            });
                        });
                    });
                });
                break;


            case 'Update An Employee Role':
                // concatenating within mysql for employee name legibility
                db.query(`SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS 'employee_name', employee.id FROM employee;`, function (err, results) {        
                    const empArr = results.map(({ employee_name, id }) => ({ 'name': employee_name, 'value': id }))
                    if (err) throw err;

                    db.query(`SELECT * FROM roles`, function (err, results) {        
                        const roleArr = results.map(({ title, id }) => ({ 'name': title, 'value': id }))
                        if (err) throw err;

                        inquirer.prompt([
                            {
                                type: 'list',
                                message: 'Which employee are you updating?',
                                name: 'roleUpdateEmployee',
                                choices: empArr,
                            },
                            {
                                type: 'list',
                                message: `What of the following is the new role of this employee?`,
                                name: 'roleList',
                                choices: roleArr,
                            }
                        ])
                        
                        .then(function (answers) {
                            
                            db.query(`UPDATE employee SET employee.role_id = ? WHERE employee.id = ?`, [answers.roleList, answers.roleUpdateEmployee], (err, results) => {
                                if (err) throw err;                          
                                console.log(`The role of employee # ${answers.roleUpdateEmployee} has been updated`)
                                employeeTracker();
                            })
                        });
                    })
                })
            break;
        }
    })
}

// initiates program once node server.js is opened in the terminal
employeeTracker();