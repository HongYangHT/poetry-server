/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 论语表
 * @Date: 2018-11-20 17:54:46
 * @LastEditTime: 2019-01-11 11:37:06
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
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

module.exports = LunYu
