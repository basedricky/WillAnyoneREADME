const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateMarkdown = require('.utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

console.log('Welcome to README Generator: 2021')




// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username.',
        default: 'basedricky',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please entter your e-mail address.',
        default: 'ricky@dragonflyut.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid e-mail address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project?',
        default: 'WillAnyoneReadMe',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a detailed description of your project.',
        default: 'Insert project Description here',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'If applicable, please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'What is the inteded usage information?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please provide any applicable contribution Guidelines.'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please prove any applicable test instructions/infromation.'
    },
    {
        type: 'list',
        name: 'licenseInformation',
        message: 'Please select any liceneses used for this project.',
        choices: ['MIT License', 'GNU GPL v3', 'Apache License 2.0'],





    },
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("GREAT SUCCESS! README.md has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Verifying user input.");

        // Pass response information into our markdown function
        console.log("Generating README file.....")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown to file
        await writeFileAsync('testREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
