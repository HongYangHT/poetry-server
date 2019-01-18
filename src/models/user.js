/*
 * @Description: model for user
 * @Author: sam.hongyang
 * @Date: 2018-11-14 16:06:50
 * @LastEditTime: 2019-01-18 14:04:40
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
    type: Sequelize.STRING
  },
  nickname: Sequelize.STRING,
  avatar: Sequelize.STRING,
  gender: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

module.exports = User
