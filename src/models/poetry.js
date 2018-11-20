/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗表
 * @Date: 2018-11-20 17:21:52
 * @LastEditTime: 2018-11-20 17:43:29
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const Poetry = sequelize.define('poetry', {
  id: {
    type: Sequelize.INTEGER
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
  }
})

Poetry.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POETRY')).catch(err => console.log(err))

module.exports = Poetry
