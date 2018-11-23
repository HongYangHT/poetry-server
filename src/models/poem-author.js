/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 词表
 * @Date: 2018-11-20 17:48:42
 * @LastEditTime: 2018-11-21 11:57:02
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const Poem = require('./poem')

const PoemAuthor = sequelize.define('poem-authors', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  intro_l: {
    type: Sequelize.TEXT
  },
  intro_s: {
    type: Sequelize.TEXT
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

PoemAuthor.hasMany(Poem)
Poem.belongsTo(PoemAuthor)

PoemAuthor.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POEM AUTHOR')).catch(err => console.log(err))

module.exports = PoemAuthor
