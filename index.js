// TODO: Include packages needed for this application


const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ['What is the project Title?', 'Describe the project'];

function addTitle() {
    inquirer.prompt([

            {
                type: 'input',
                message: 'What is the title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Describe the project',
                name: 'description',
            },

        ])
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