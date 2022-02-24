// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    return `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else if (license == "APLv3") {
    return `[License: ${license}](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license == "GPLv3") {
    return `[License: ${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license == "LGPLv3") {
    return `[License: ${license}](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } else if (license == "Mozilla") {
    return `[License: ${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license == "Apache") {
    return `[License: ${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license == "MIT") {
    return `[License: ${license}](https://choosealicense.com/licenses/mit/)`;
  } else if (license == "Boost") {
    return `[License: ${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else {
    return `${renderLicenseLink(license)}  
    ${renderLicenseBadge(license)}`;
  }
}

// create the contributing section or return empty string
const generateContributing = (contributing) => {
  if (!contributing) {
    return "";
  }
  return `## Contributing:
  ${contributing}`;
};

// create the testing section or return empty string
const generateTesting = (testing) => {
  if (!testing) {
    return "";
  }
  return `## Testing:
  ${testing}`;
};

const generateTableOfContents = (testing, contributing) => {
  if (testing && contributing) {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#Contributing)
    - [Testing](#testing)
    - [Questions](#questions)
    `;
  } else if (testing && !contributing) {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Testing](#testing)
    - [Questions](#questions)
    `;
  } else if (contributing && !testing) {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#Contributing)
    - [Questions](#questions)
    `;
  } else {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Questions](#questions)
    `;
  }
};

module.exports = (data) => {
  // destructure page data by section
  const { tests, contribution, license, ...main } = data;

  return `# ${main.title}
  
  ${renderLicenseBadge(license)}
  
  ## Description:
  ${main.description}
 
  ${generateTableOfContents(tests, contribution)}
  
  ## Installation:
  ${main.installation}
  
  ## Usage:
  ${main.usage}
  
  ## License:
  ${renderLicenseSection(license)}
  
  ${generateContributing(contribution)}
  
  ${generateTesting(tests)}
  
  ## Questions:
  - You can email me at ${main.email} if you have any questions.
  - Github: [${main.github}](https://github.com/${main.github})`;
};
