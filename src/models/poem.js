/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 词表
 * @Date: 2018-11-20 17:48:42
 * @LastEditTime: 2019-01-11 11:36:53
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const Poem = sequelize.define('poems', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  poem_author_id: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  author: {
    type: Sequelize.STRING
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

module.exports = Poem
