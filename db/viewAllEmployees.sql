SELECT employee.id AS 'Employee ID', CONCAT(employee.first_name, ' ', employee.last_name) AS 'Employee Name', roles.title AS 'Job Title', department.department_name AS 'Department', roles.salary AS 'Salary', CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
FROM employee
LEFT JOIN roles
ON employee.role_id = roles.id 
LEFT JOIN department 
ON roles.department_id = department.id
LEFT JOIN employee manager on manager.id = employee.manager_id
ORDER BY roles.salary DESC;