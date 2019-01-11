/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 用于记录相关的关注和点赞
 * @Date: 2019-01-10 17:09:48
 * @LastEditTime: 2019-01-10 17:17:31
 */
const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const UserPoetry = sequelize.define('user_poetrys', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  username: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

const UserPoem = sequelize.define('user_poems', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  username: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

const UserLunyu = sequelize.define('user_lunyus', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  username: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})
const UserShijing = sequelize.define('user_shijings', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV1
  },
  username: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get () {
      return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  underscored: true,
  timestamps: true
})

exports.UserPoetry = UserPoetry
exports.UserPoem = UserPoem
exports.UserLunyu = UserLunyu
exports.UserShijing = UserShijing
