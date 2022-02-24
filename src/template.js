// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = (data) => {
  return `# ${data.title}

  // TODO: May need to dynamically generate the table of contents
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#Contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Description:
  ${data.description}
  
  // TODO: sub section for prerequisite steps
  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  // TODO: Look into the licencse badge and stuff
  ## License:
  ${data.license}
  
  // TODO: dynamically generate this section
  ## Contributing:
  ${data.contribution}
  
  // TODO: dynamically generate this section
  ## Testing:
  ${data.tests}
  
  ## Questions:
  - You can email me at ${data.email} if you have any questions.
  - Github: [${data.github}](https://github.com/${data.github})`;
};
