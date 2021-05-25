// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your web application',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter information for usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who are the project contributors?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Please enter instructions for testing',
        name: 'Tests'
    },
    {
        type: 'list',
        message: 'Which license will be used?',
        name: 'license',
        choices: ['first', 'second', 'third', 'fourth']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
]).then((answers) =>
{
    console.log('title: ', answers.title);
    console.log('description: ', answers.description);
    console.log('installation:', answers.installation);
    console.log('usage:', answers.usage);
    console.log('contributions:', answers.contributions);
    console.log('Tests:', answers.Tests);
    console.log('license:', answers.license);
    console.log('github:', answers.github);
    console.log('email:', answers.email);
}
)

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
