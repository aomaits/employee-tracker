const inquirer = require('inquirer');
const fs = require('fs');

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const start = true;

// Connect to employees database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database. (remove this log later!)`)
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
                    employeeTracker();
                });
                break;
        
            case 'View All Roles': 
                db.query(`SELECT 
                roles.title AS job_title, 
                roles.id AS role_id,  
                department.department_name AS department_name,
                roles.salary AS salary
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
                db.query(`SELECT employee.id, employee.first_name, employee.last_name, 
                roles.title, department.department_name, roles.salary, employee.manager_id
                FROM employee
                LEFT JOIN roles
                ON employee.role_id = roles.id 
                LEFT JOIN department
                ON department.id = roles.department_id`, (err, response) => {
                    if (err) {
                        console.log(err);
                    } 
                        console.table(response)
                        employeeTracker();
                });
                break;
                
            case 'Add A Department':
            case 'Add A Role':
            case 'Add An Employee':
            case 'Update An Employee Role':
                console.log("Other options selected")
            }
        })
}

console.log("did this happen at the end?")

employeeTracker();

//     const filename = `${response.title.toLowerCase()}.md`;
//     const projectTitle = response.title;
//     const descrMotiv = response.descriptionMotivation;
//     const descrSolvProb = response.descriptionSolvedProblem;
//     const descrLearned = response.descriptionLearned;
//     const projectInstallation = response.installation;
//     const projectUsage = response.usage;
//     const licenseBadge = chosenLicenseLink;
//     const licenseChosen = projectLicense;
//     const projectContributions = response.contributing;
//     const projectTests= response.tests;
//     const gitHubUser = response.githubUsername;
//     const userEmail = response.email;

//     convertToMarkdown(filename, projectTitle, descrMotiv, descrSolvProb, descrLearned, projectInstallation, projectUsage, licenseBadge, licenseChosen, projectContributions, projectTests, gitHubUser, userEmail)
//   });

// function convertToMarkdown(filename, projectTitle, descrMotiv, descrSolvProb, descrLearned, projectInstallation, projectUsage, licenseBadge, licenseChosen, projectContributions, projectTests, gitHubUser, userEmail) {
//     var markdownVersion = `# ${projectTitle}

// # ${licenseBadge}

// ## Description
// ${descrMotiv}
// ${descrSolvProb}
// ${descrLearned}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation
// ${projectInstallation}

// ## Usage
// ${projectUsage}

// ## License
// This project uses a ${licenseChosen} license. 

// ## Contributing
// ${projectContributions}

// ## Tests
// ${projectTests}

// ## Questions
// You can find my GitHub profile [here](https://github.com/${gitHubUser}). Please feel free to reach out to me by email at [${userEmail}](${userEmail}) with any additional questions!`;

//     writeToReadMe (filename, markdownVersion);
// };

// function writeToReadMe (filename, markdownVersion) {
//     fs.writeFile(filename, (markdownVersion), (err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// }

// function init() {
    
// }

// Function call to initialize app
// init();