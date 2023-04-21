// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        fs.writeFile('dist/README.md', generateMarkdown(answers), err => {
            if (err) return console.error(err);

            console.log('README.md generated!');

        });
        
        console.log(generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
