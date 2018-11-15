const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  guid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING,
  nickname: Sequelize.STRING
}, {
  timestamps: true,
  paranoid: true
})

User.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE USER')).catch(err => console.log(err))

module.exports = User