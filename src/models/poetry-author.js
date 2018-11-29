/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗人表
 * @Date: 2018-11-20 17:24:10
 * @LastEditTime: 2018-11-27 15:36:30
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const Poetry = require('./poetry')
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
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
})

PoetryAuthor.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POETRY AUTHOR')).catch(err => console.log(err))

PoetryAuthor.hasMany(Poetry)
Poetry.belongsTo(PoetryAuthor)

module.exports = PoetryAuthor