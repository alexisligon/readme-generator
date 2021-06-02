// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateREADME } = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
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
        choices: ['Apache', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'no license']
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
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('./dist/README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'));
    });
}

// Function call to initialize app
init();

//website for badges
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#apache-20-license