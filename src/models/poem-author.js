/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 词表
 * @Date: 2018-11-20 17:48:42
 * @LastEditTime: 2018-11-20 18:05:17
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const Poem = require('./poem')

const PoemAuthor = sequelize.define('poem-author', {
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
  }
})

PoemAuthor.hasMany(Poem)
Poem.belongsTo(PoemAuthor)

PoemAuthor.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POEM AUTHOR')).catch(err => console.log(err))

module.exports = PoemAuthor
