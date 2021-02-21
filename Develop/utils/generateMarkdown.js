// function to generate markdown for README
var licenseUsed = ''

function generateMarkdown(responses, info) {

  let tableofContents = `## Table of Contents`;

  if (responses.projectDescription !== '') {
    tableofContents += `
  [Description](#projectDescription)`   };

  if (responses.installationInstructions !== '') {
    tableofContents += `
  [Installation](#installationInstructions)`  };

  if (responses.usageInformation !== '') {
    tableofContents = + `
  [Usage](#usageInformation)` };

  if (responses.contributionGuidelines !== '') {
    tableofContents += `
  [Contributions](#contributionGuidelines)`  };

  if (responses.licenseInformation = '') {
    tableofContents = + `
  [Licenses](#licenseInformation)`  };

  if (responses.testsUsed !== '') {
    tableofContents += `
  [Contributions](#testsUsed)`  };



  // License information to be used dependening on user choice
  if (responses.licenseInformation = 'MIT License') {
    license === `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (responses.licenseInformation = 'GNU GPL v3') {
    license === `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (responses.licenseInformation = 'Apache License 2.0') {
    license === `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };


  // markdown for the remainder of the readme

  let markDown =
    `# ${responses.projectTitle}
  

  ## Description

  *The purpose of the project and any roadblocks/experiences you'd like to share along the way:*

  ${responses.projectDescription}`

  markDown = + tableofContents;


  // License section is required
  markDown +=
    `
  
  ## License
  
  ${licenseUsed}
  `;

  // Installation
  if (responses.installationInstructions !== '') {

    markDown += `
  
  ## Installation
  
  *Steps needed to install and run the application:*
  
  ${responses.installationInstructions}`
  };

  // Usage
  if (responses.usageInformation !== '') {

    markDown += `
  
  ## Usage 
  
  *Instructions and potential use cases:*
  
  ${responses.usageInformation}`
  };

  // test
  if (responses.testsUsed !== '') {

    markDown += `
  
  ## Tests 
  
  *The following test/testing methods were used in development with this application:*
  
  ${responses.usageInformation}`
  };


  // Contributing
  if (responses.contributionGuidelines !== '') {
    `
  
  ## Contributions
  
  *If you would like to contribute to this project, please adhere to the following guidelines
  and best practices.*
  
  ${responses.contributionGuidelines}`
  };

  // Questions / About Developer section
  let moreQuestions =
    `
  ---
  
  ## Questions?
   
  For any questions, concerns, or public shamings, please contact me at the information below:
 
  GitHub: [@${info.login}](www.github.com/${info.login})
  
  
  Email: ${info.emailAddress}
  `;

  // Add developer section to markdown
  markDown += moreQuestions;

  // Return markdown
  return markDown;

};

module.exports = generateMarkdown;