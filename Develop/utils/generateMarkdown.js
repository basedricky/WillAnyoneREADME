// function to generate markdown for README
var licenseUsed = ''

function generateMarkdown(responses) {

  let markDown = `
  
  # ${responses.projectTitle}
  

  ## Description

  *The purpose of the project and any roadblocks/experiences you'd like to share along the way:*

  ${responses.projectDescription}

  
  `
  markDown +=


    `## Table of Contents
 
  * [Description](#description)

  * [Licenses](#licenses)  

  * [Installation](#installation)  

  * [Usage](#usage)  

  * [Tests](#tests)
  
  * [Contributions](#contributions)`

  // License information to be used dependening on user choice
  if (responses.licenseInformation = 'MIT License') {
    licenseUsed = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (responses.licenseInformation = 'GNU GPL v3') {
    licenseUsed = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (responses.licenseInformation = 'Apache License 2.0') {
    licenseUsed == `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  markDown +=
    `
  
  ## License
  
  * ${licenseUsed}
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
  
  ${responses.testsUsed}`
  };


  // Contributing
  if (responses.contributionGuidelines !== '') {

    markDown += `
  
  ## Contributions
  
  *Please credit any contributors or cited sources here.*
  
  ${responses.contributionGuidelines}`
  };

  // Questions / About Developer section
  if (responses.githubUsername !== '') {

    markDown += `
   
  ## Questions?
   
  *For any questions, concerns, or public shamings, please contact me with the information below:*
 
  *GitHub: [@${responses.githubUsername}](www.github.com/${responses.githubUsername})*
    
  *Email: ${responses.emailAddress}*
  `;

    // Return markdown
    return markDown;

  };
};

module.exports = generateMarkdown;