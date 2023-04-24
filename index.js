// TODO: Include packages needed for this application
const inquirer = require('inquirer');// Required to use inquirer
const generateMarkdown = require('./utils/generateMarkdown'); // Required to use generateMarkdown function
const fs = require('fs');// Required to write to file system

// TODO: Create an array of questions for user input
const questions = [
    // -title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    //-description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project'
    },
    //-installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    //-usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    //-credits
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your Repo use?',
        choices: ['MIT', 'APACHE 2.0', 'GNU GPL v3', 'BSD 3', 'None']
    },
    //-badges
    {
        type: 'input',
        name: 'badges',
        message: 'If you want to include badges, enter their links here.'
    },
    //-features
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    //-contributing
    {
        type: 'input',
        name: 'contributing',
        message: `If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here:`
    },
    //-tests
    {
        type: 'input',
        name: 'tests',
        message: 'If tests can be run, please provide examples on how to run them.'        
    },
    //-questions
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        fs.writeFile('dist/README.md', generateMarkdown(answers), err => {
            if (err) return console.error(err);

            console.log('README.md generated!');

        });
        
        console.log(generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
