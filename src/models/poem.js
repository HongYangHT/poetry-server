/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 词表
 * @Date: 2018-11-20 17:48:42
 * @LastEditTime: 2018-11-20 18:05:21
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const Poem = sequelize.define('poem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  poems_author_id: {
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
  }
})

Poem.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POEM')).catch(err => console.log(err))

module.exports = Poem
