// Function to generate README 

function markdown(data) {
    const answerData = {
      title: `# ${data.title}\n`,
      description: `## Description\n${data.description}\n`,
      toc: "",
      installation: `## Installation\n${data.installation}\n`,
      usage: `## Usage\n${data.usage}\n`,
      guidelines: `## Contributing\n${data.contributing}\n`,
      test: `## Tests\n${data.test}\n`,
      license: `## License\n${data.license}\n`,
      questions: `## Questions\nClick [here](https://github.com/${data.username}) to visit my Github profile.\n` +
                 `Or you can email me at: ${data.email}`
    };

  
    answerData.toc = "## Table of Contents\n" + "* [Installation](#installation)\n" + "* [Usage](#usage)\n" +
                     "* [Contributing](#contributing)\n" + "* [Tests](#tests)\n" + "* [License](#license)\n" +
                     "* [Questions](#questions)\n"
  
    let ReadMe = "";
    for (key in answerData) {
      ReadMe += answerData[key];
    }
    return ReadMe;
  }
  
  // Exporting file to connect to index.js

  module.exports = markdown;