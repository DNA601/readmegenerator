// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!`${license}`) {
        license = '';
    } else {
        license = `![badge](https://img.shields.io/badge/licence-${license}-brightgreen)`
    }
    return license;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!`${license}`) {
        license = '';
    } else {
        const licenseTo = `${license}`.toLowerCase()
        license = `[https://choosealicense.com/licenses/${licenseTo}/](https://choosealicense.com/licenses/${licenseTo}/)`
    }
    return license;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let section = ''
    if (!`${license}`) {
        return section;
    } else {
        section = `## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}

      `
    }
    return section;
}

//![badge](https://img.shields.io/badge/licence-${data.license}-brightgreen)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseSection(data.license)}

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Owner](#owner)
* [Test](#Test)

## Description
 ${data.description}
 ## Installation
  ${data.install}
## Usage
${data.usage}
## Contributors
${data.con}
## Owner
${data.own}

## Test Instructions
${data.testIn}


`;
}
//## License
//${data.license}

module.exports = generateMarkdown;