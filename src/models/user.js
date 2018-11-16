/*
 * @Description: model for user
 * @Author: sam.hongyang
 * @Date: 2018-11-14 16:06:50
 * @LastEditTime: 2018-11-16 17:55:37
 * @LastEditors: sam.hongyang
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  name: Sequelize.STRING,
  password: {
    type: Sequelize.UUID
  },
  nickname: Sequelize.STRING,
  avatar: Sequelize.STRING,
  gender: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

User.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE USER')).catch(err => console.log(err))

module.exports = User