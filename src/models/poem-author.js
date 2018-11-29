/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 词表
 * @Date: 2018-11-20 17:48:42
 * @LastEditTime: 2018-11-29 15:57:00
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const Poem = require('./poem')
const moment = require('moment')

const PoemAuthor = sequelize.define('poem_authors', {
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

PoemAuthor.hasMany(Poem)
Poem.belongsTo(PoemAuthor)

PoemAuthor.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE POEM AUTHOR')).catch(err => console.log(err))

module.exports = PoemAuthor
