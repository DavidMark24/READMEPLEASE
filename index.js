// Global Variables

const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

// Inquirer Questions

const questions = [
    {
    type: "input",
    name: "title",
    message:"What is the title of your project?"
    },
    {
    type: "input",
    name: "description" ,
    message: "Please provide your project's description"
    },
    {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions"
    },
    {
    type: "input",
    name: "usage",
     message: "Please provide the project usage"
    },
    {
    type: "list",
    name: "licence",
    message: "Please provide the project licence",
    choices:["Apache license 2.0', 'Creative Commons license family', 'MIT', 'Mozilla Public License 2.0"]
    },
    {
    type: "input",
    name: "contributing",
    message: "Please provide the contributing parties"
    },
    {
    type: "input",
    name: "test",
    message: "Please provide the project tests"
    },
    {
    type: "input",
    name: "username",
    message: "What is your github user name?"
    },
    {
    type: "input",
    name: "email",
    message: "What is your email?"
    },
];

// Function to initialize progam

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("Answers", answers);

        const markdown = generateMarkdown(answers);

        fs.writeFile('README.md', markdown, () => {console.log("Poof! README successful!)");});
    })
}

// Call function

init();









