/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗表
 * @Date: 2018-11-20 17:21:52
 * @LastEditTime: 2019-01-10 17:19:21
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const Poetry = sequelize.define('poetrys', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  poetry_author_id: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  yunlv_rule: {
    type: Sequelize.TEXT
  },
  author: {
    type: Sequelize.STRING
  },
  dynasty: {
    type: Sequelize.CHAR(1)
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

module.exports = Poetry
