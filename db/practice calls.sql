-- View all departments
SELECT * FROM department;

-- view all roles
    -- left join roles (keeping all fields from that table minus the overlap) to department

-- view all employees
    -- join all three tables minus the id fields? to drop what they have in common? 

-- add a department NEXT PRIORITY (POST)
    -- user enters variable (department name), name is added to db
INSERT INTO department (department_name)
    VALUES (?) --see line 26 of mini project server.js

-- add a role
    -- prompted for name, salery, and department. User chooses a department, then convert it back to the numerical value? (may have to make this a static choice if I can't pull department_id back from the roles table in the database)
    INSERT INTO roles (title, salary, department_id)
    VALUES (?)

-- add an employee 
    --first name, last name, role, manager
    -- this involves all three tables as well
    -- roles(title) from the roles table has to be converted to roles(id), manager has to be converted from manager(id) into employee(id) which then needs to be employee(first_name) + employee(last_name)
    -- once role_id is numeric and manager_id is numeric, all four can be added to the employee table

-- update an employee role THIRD PRIORITY (PUT)
    -- user selects an employee from the list, inputs their new role
    -- convert the role title back to the role id, then update the employee table 