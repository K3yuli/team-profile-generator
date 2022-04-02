// // connect html to generate page
const generateHTML = require('./src/page-template')
// // include packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

// // connect to team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

// // create an array of questions for Manager input
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name:",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Manager name is required!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID:",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else { 
                    console.log('Manager ID is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email:",
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)                
                if(valid) {
                    return true;
                } else {
                    console.log('Manager email is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number:",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log('Manager office number is required!');
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { nameInput, idInput, emailInput, officeNumberInput } = managerInput;
        const manager = new Manager (nameInput, idInput, emailInput, officeNumberInput );

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    ****************************
    * Adding Employees to team *
    ****************************
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter name of Employee:",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Need to enter an Employee's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Employee's ID:",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("ID must be entered")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Employee's email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log("Enter email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Employee's github username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Github username name needed")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Intern's school needed")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData
        let employee;

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error
        if(err) {
            console.log(err);
            return;
            // profile created
        } else {
            console.log("Your team profile has been successfully created! Please checkout the index.html!")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHtML => {
    return writeFile(pageHtML);
})
.catch(err => {
    console.log(err);
});