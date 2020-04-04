const messages = require('./messages');
const { version } = require('../package.json');

const funnyHelp = () => {
  console.log(`
      funny-commit is the best way to get that original first commit in any project.

      Usage: funny-commit [command]

      Commands:
          funny-commit                    Print a funny commit to use.
          funny-commit -v | --version     Print funny-commit version.
          funny-commit -h | --help        Print funny-commit manual.
  `)
}

const funnyVersion = () => console.log(`v${version}`);

const funnyCommit = () => {
  const index = Math.floor(Math.random() * messages.length);
  const message = messages[index];
  console.log(message);
}

module.exports = {
    funnyHelp,
    funnyVersion,
    funnyCommit
}