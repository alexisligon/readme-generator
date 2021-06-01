
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache' : 
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    break;

    case 'GNU' :
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
    break;

    case 'IBM' :
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    break;
    
    case 'ISC' :
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    break;

    case 'MIT' :
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    break;

    case 'Mozilla' :
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    break;

    case 'Perl' :
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    break;

    case 'no license' :
    return ''
    break;
  }
  // if (license.license === 'Apache') {
  //   [License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)[Apache](https://opensource.org/licenses/Apache-2.0)
  // } else if(license.license === '') {
    
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateREADME = (answers) =>
`# ${answers.title} 

${renderLicenseBadge(answers.license)}

${answers.description}

## Installation/Usage

* ${answers.usage}

* ${answers.installation}

## Contributors

* ${answers.contributions}

## Testing Instructions

* ${answers.Tests}

## Contact

* Github

    * ${answers.github}

* Email

    * ${answers.email}
`;
module.exports = {renderLicenseBadge, generateREADME};
