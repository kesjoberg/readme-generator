// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project. is the title of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for others to use your project.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Provide a short description to other users to let them know how they can contribute to your project.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Provide examples of how to run tests for your project or the tests you ran.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your E-mail address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'github',
  },
  {
    type: 'list',
    message: 'Please select an option for licensing your project',
    name: 'license',
    choices: ['MIT', 'Apache', 'Boost', 'None'],
  },
  
];

// TODO: Create a function to write README file
function writeToFile(readmeFile, data) {
  fs.writeFile('README-test.md', readmeFile, (err) => err ? console.error(err) : console.log('Success, go to the README-test.md file!') )
 
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(data => {
      console.log(data)
      const readmeFile = generateMarkdown(data)
      writeToFile(readmeFile, data) 
    })
   
}

// Function call to initialize app
init();
