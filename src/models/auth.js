/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: model for user auth
 * @Date: 2018-11-16 16:55:21
 * @LastEditTime: 2018-11-27 10:05:08
 */

const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const Auth = sequelize.define('auths', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  openId: {
    type: Sequelize.UUID
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
      get() {
        return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
      }
  }
})

Auth.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE USER')).catch(err => console.log(err))

module.exports = Auth
