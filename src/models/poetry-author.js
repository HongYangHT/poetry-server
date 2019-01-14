/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗人表
 * @Date: 2018-11-20 17:24:10
 * @LastEditTime: 2019-01-11 11:36:46
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const PoetryAuthor = sequelize.define('poetry_authors', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  intro: {
    type: Sequelize.TEXT
  },
  dynasty: {
    type: Sequelize.CHAR(1)
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

module.exports = PoetryAuthor
