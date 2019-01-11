/*
 * @Description: model for user
 * @Author: sam.hongyang
 * @Date: 2018-11-14 16:06:50
 * @LastEditTime: 2019-01-10 17:19:08
 * @LastEditors: sam.hongyang
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const User = sequelize.define('users', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.UUID
  },
  nickname: Sequelize.STRING,
  avatar: Sequelize.STRING,
  gender: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

module.exports = User
