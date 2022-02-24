const inquirer = require("inquirer");
const { writeToFile } = require("./utils/generateReadMe");
const generateMarkDown = require("./src/template");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?(Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide the title of your project!.");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please provide a description!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide installation instructions!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "usage",
    message: "Provide usage information for the project. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage information!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmContribution",
    message:
      "Would you like to provide contribution guidelines for the project?",
    default: true,
  },
  {
    type: "input",
    name: "contribution",
    message: "Provide the guidelines for contributing to this project:",
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmTest",
    message:
      "Would you like to provide some test instructions for the project?",
    default: true,
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please provide the instuctions on how to run the tests for your application:",
    when: ({ confirmTest }) => {
      if (confirmTest) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application(Required)",
    choices: [
      "AGPLv3",
      "GPLv3",
      "LGPLv3",
      "Mozilla",
      "Apache",
      "MIT",
      "Boost",
      "None",
    ],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please pick a license");
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?(Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your Github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?(Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    },
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return generateMarkDown(answers);
    })
    .then((pageMarkDown) => {
      return writeToFile(pageMarkDown);
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
