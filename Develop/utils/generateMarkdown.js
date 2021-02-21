// function to generate markdown for README
var license = ''

function generateMarkdown(userResponses, userInfo) {

  let tableofContents = `## Table of Contents`;

  if (userResponses.projectDescription !== '') {
    tableofContents += `
  [Description](#projectDescription)`   };

  if (userResponses.installationInstructions !== '') {
    tableofContents += `
  [Installation](#installationInstructions)`  };

  if (userResponses.usageInformation !== '') {
    tableofContents = + `
  [Usage](#usageInformation)` }

  if (userResponses.licenseInformation = '') {
    tableofContents = + `
  [Licenses](#licenseInformation)`  };


  // License information to be used dependening on user choice
  if (userResponses.licenseInformation = 'MIT License') {
    license === `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (userResponses.licenseInformation = 'GNU GPL v3') {
    license === `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (userResponses.licenseInformation = 'Apache License 2.0') {
    license === `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };



};

module.exports = generateMarkdown;
