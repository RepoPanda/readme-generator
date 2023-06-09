// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]`;
  } else if (license === 'GNU GPL v3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)]`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU GPL v3'){
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None'){
    return `## License`
  } else {
    return ``;
  }
}

function renderlicenseTOC(license) {
  if(license !== 'None'){
    return `- [License](#license)`
  } else {
    return ``;
  }
}
//------------------------------------------------------------------------
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

   ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderlicenseTOC(data.license)}
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)} 
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Badges

  ${data.badges}

  ## Features

  ${data.features}

  ## How to Contribute

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please contact me at ${data.email} or visit my GitHub page at [${data.github}]

  `;
}

module.exports = generateMarkdown;/// will call functions above^^^
