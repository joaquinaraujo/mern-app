const db = require('./')
const config = require('./config')()
const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

async function setup () {
  let flag = false

  process.argv.forEach(e => {
    if (e === '--yes') flag = true
  })

  if (flag === false) {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])

    if (!answer.setup) return console.log('Nothing happended :)')
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error('FATAL ERROR ===>', err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
