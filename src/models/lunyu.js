/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 论语表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2018-11-21 11:57:06
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const LunYu = sequelize.define('lunyus', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  chapter: {
    type: Sequelize.STRING
  },
  content: {
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

LunYu.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE LUNYU')).catch(err => console.log(err))
