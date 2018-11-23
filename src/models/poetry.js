/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗表
 * @Date: 2018-11-20 17:21:52
 * @LastEditTime: 2018-11-21 15:03:12
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

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
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

Poetry.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POETRY')).catch(err => console.log(err))

module.exports = Poetry
