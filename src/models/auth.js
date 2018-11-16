/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: model for user auth
 * @Date: 2018-11-16 16:55:21
 * @LastEditTime: 2018-11-16 17:55:44
 */

const Sequelize = require('sequelize')
const sequelize = require('../db')

const Auth = sequelize.define('auth', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  openId: {
    type: Sequelize.UUID
  }
})

Auth.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE USER')).catch(err => console.log(err))

module.exports = Auth
