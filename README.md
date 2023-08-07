# Employee Tracker

## Description
This back-end application allows a user to manipulate an employee database. This project was created to give the user more control over their employee database and the ability to interact with that data in a simple manner. 

## Installation
In order to utilize this application, the user will need to install all node packages. They will also need to input their mysql username and password on lines 14 and 15 of the server.js file. 

![Showing the empty strings on lines 14 and 15 of the server.js file that will accept the user's mysql username and password](./assets/blankMysqlConnection.jpg)


## Usage
To begin, the user will have to open the integrated terminal and use node to open the server.js file. 

![Opening the integrated terminal on a windows machine](./assets/openInTerminal.png)


The user will be greeted and the main menu will open. 

![A view of the Employee Tracker's main menu](./assets/employeeTrackerMenu.jpg)


The user will then receive a prompt for seven different options. When selecting a course of action that will affect the data in the database, further questions will be asked of the user. 

![The user receives a prompt to add a department name upon selecting the "Add A Department" option](./assets/addingDepartmentPrompts.jpg)


When the user has completed all questions, they will either see a table showing the results of their queries or will be notified that the changes they'd requested have been made. 

![The user is shown the roles table upon completion of that request](./assets/rolesTable.jpg)



A video demo of this application in action can be found [here](https://drive.google.com/file/d/1fWT9rRHT4PpGGIFg00dMnOx8QYEfQ89X/view).

## Credits 

The following NPM packages were used for this project: 
- inquirer v8.2.4
- mysql v3.5.2

## License
A [MIT license](https://github.com/aomaits/employee-tracker/blob/main/LICENSE) was used for this project. 