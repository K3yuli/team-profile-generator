// // connect html to generate page

// // include packages needed for application
// const inquirer = require('inquirer');
// // const fs = require('fs');

// // connect to team profiles
// // const Manager = require('./lib/Manager');
// // const Engineer = require('./lib/Engineer');
// // const Employee = require('./lib/Employee');
// // const Intern = require('./lib/Intern');

// // create an array of questions for Manager input
// const addManager = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "Enter manager's name.",
//             validate: nameInput => {
//                 if(nameInput) {
//                     return true;
//                 } else {
//                     console.log('Manager name is required!');
//                     return false;
//                 }
//             }

//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "Enter manager's ID.",
//             validate: idInput => {
//                 if(idInput) {
//                     return true;
//                 } else {
//                     console.log('Manager ID is required!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "Enter manager's email.",
//             validate: emailInput => {
//                 if(emailInput) {
//                     return true;
//                 } else {
//                     console.log('Manager email is required!');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "Enter manager's office number.",
//             validate: officeNumberInput => {
//                 if(officeNumberInput) {
//                     return true;
//                 } else {
//                     console.log('Manager office number is required!');
//                     return false;
//                 }
//             }
//         }

//     ])
// }