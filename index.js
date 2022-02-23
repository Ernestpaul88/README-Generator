// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/generateReadMe");
const generateMarkDown = require("./src/template");
var profileDataArgs = process.argv.slice(2, process.argv.length);
const [fileName] = profileDataArgs;

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((templateData) => {
      console.log(templateData);
      return generateMarkDown(templateData);
    })
    .then((pageMarkDown) => {
      return writeToFile(fileName, pageMarkDown);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
