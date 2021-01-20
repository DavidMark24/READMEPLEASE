// Function to generate README 

function generateMarkdown(data) {
    const answerData = {
      title: `# ${data.title}\n`,
      description: `## Description\n${data.description}\n`,
      toc: "",
      installation: `## Installation\n${data.installation}\n`,
      usage: `## Usage\n${data.usage}\n`,
      guidelines: `## Contributing\n${data.contributing}\n`,
      test: `## Tests\n${data.test}\n`,
      license: `## License\n${data.license}\n`,
      questions: `## Questions\nClick [here](https://github.com/${data.githubInfo}) to visit my Github profile.\n` +
                 `Or you can email me at: ${data.email}`
    };

  }
  
  