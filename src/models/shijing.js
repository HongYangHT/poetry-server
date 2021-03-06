/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗经表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2019-01-11 11:36:24
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const ShiJing = sequelize.define('shijings', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  section: {
    type: Sequelize.STRING
  },
  chapter: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
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

module.exports = ShiJing
