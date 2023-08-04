const inquirer = require('inquirer');
const fs = require('fs');

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

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
    switch (response.license) {
        case 'View All Departments':
            app.get('/api/view-departments', (req, res) => {
                const sql = `SELECT * FROM department`;
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: rows
                    });
                });
            });

            break;
    }


        // case 'MIT License':
//             var chosenLicenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//             projectLicense = 'MIT License';
//             break;
//         case 'Creative Commons Zero v1.0 Universal':
//             var chosenLicenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
//             projectLicense = 'Creative Commons Zero v1.0 Universal';
//             break;
//         case 'Mozilla Public License 2.0':
//             var chosenLicenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//             projectLicense = 'Mozilla Public License 2.0';
    })

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