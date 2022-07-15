// TODO: Include packages needed for this application


const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is the project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'installation',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Contributor guidlines',
        name: 'con',
    },
    {
        type: 'input',
        message: 'Owner',
        name: 'own',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Test instruction',
        name: 'testIn',
    },
    {
        type: 'input',
        message: 'License',
        name: 'lic',
    },
];

function addTitle() {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data)
            const fileN = 'README.md'
            generateMarkdown(data)
            writeToFile(fileN, data)
        })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log('success')
    })
}

// TODO: Create a function to initialize app
function init() {
    addTitle()
}

// Function call to initialize app
init();