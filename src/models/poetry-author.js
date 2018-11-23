/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗人表
 * @Date: 2018-11-20 17:24:10
 * @LastEditTime: 2018-11-21 11:56:52
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const Poetry = require('./poetry')

const PoetryAuthor = sequelize.define('poetry-authors', {
  id: {
    type: Sequelize.Integer,
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
    defaultValue: Sequelize.NOW
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

PoetryAuthor.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POETRY AUTHOR')).catch(err => console.log(err))

PoetryAuthor.hasMany(Poetry)
Poetry.belongsTo(PoetryAuthor)

module.exports = PoetryAuthor