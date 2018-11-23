/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 诗经表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2018-11-21 11:56:37
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const ShiJing = sequelize.define('shijings', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  section: {
    type: Sequelize.STRING
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

ShiJing.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE SHIJING')).catch(err => console.log(err))
