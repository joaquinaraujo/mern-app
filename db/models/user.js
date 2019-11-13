const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        max: 5,
        min: 255
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        max: 5,
        min: 255
      }
    },
    deleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
