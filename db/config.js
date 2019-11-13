require('dotenv').config()
const debug = require('debug')('db:setup')

module.exports = function (init = true) {
  return {
    database: process.env.DB_NAME || 'mern',
    username: process.env.DB_USER || 'joaqnjs',
    password: process.env.DB_PASS || 'pass1234',
    local: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: s => debug(s),
    setup: init
  }
}
