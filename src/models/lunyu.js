/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 论语表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2018-11-27 10:05:03
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

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
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
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

LunYu.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE LUNYU')).catch(err => console.log(err))
