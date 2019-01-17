/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用户角色
 * @Date: 2019-01-10 15:33:22
 * @LastEditTime: 2019-01-11 11:36:33
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const Role = sequelize.define('roles', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  /**
   * 角色名称
   */
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  /**
     * 角色描述
     */
  roleDesc: {
    type: Sequelize.TEXT
  },
  /**
     * 角色编码
     * eg: 00000000
     * 前面两位 00 superAdmin 新建角色分配权限 添加用户
     * 中间两位 00 管理员 审核
     * 后面两位 00 产品负责人 新建团队 新建产品 修改
     */
  code: {
    type: Sequelize.STRING,
    unique: true
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

module.exports = Role
