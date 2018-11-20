/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 论语表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2018-11-20 18:02:14
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')

const LunYu = sequelize.define('lunyu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  chapter: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
})

LunYu.sync({
  force: false
}).then(() => console.log('SUCCESS CREATE TABLE LUNYU')).catch(err => console.log(err))
