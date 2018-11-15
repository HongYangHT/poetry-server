const Sequelize = require('sequelize')
const config = require('../../config')

const sequelize = new Sequelize(config.DB_DATABASE_NAME, config.DB_DATABASE_USERNAME, config.DB_DATABASE_PASSWORD, {
  host: config.DB_DATABASE,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize

