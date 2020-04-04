const { funnyCommit, funnyHelp, funnyVersion } = require('./funny')

const args = process.argv.slice(2);
const ERROR_MESSAGE = 'Wrong syntax, please use funny-commit -h or --help for more information.'
const funnyCommands = {
  '-v': funnyVersion,
  '--version': funnyVersion,
  '-h': funnyHelp,
  '--help': funnyHelp,
}

const start = () => {
  if (!args.length) {
    return funnyCommit()
  }

  const [command] = args

  if (args.length > 1 || !funnyCommands.hasOwnProperty(command)) {
    console.log(ERROR_MESSAGE)
    process.exit(1)
  }

  funnyCommands[command]()
}


module.exports = start;