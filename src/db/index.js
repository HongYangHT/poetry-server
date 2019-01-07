/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 数据库链接操作
 * @Date: 2018-11-14 17:15:32
 * @LastEditTime: 2019-01-07 16:00:53
 */

const Sequelize = require('sequelize')
const config = require('../../config')
const Op = Sequelize.Op
const {
  dbLogger,
  outLogger
} = require('../utils/logger')
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
}

const sequelize = new Sequelize(config.DB_DATABASE_NAME, config.DB_DATABASE_USERNAME, config.DB_DATABASE_PASSWORD, {
  operatorsAliases,
  host: config.DB_DATABASE,
  dialect: 'mysql',
  port: config.DB_DATABASE_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true, // 字段以下划线（_）来分割（默认是驼峰命名风格）
    timestamps: true, // 加入相关的事件戳，如createdAt、updatedAt
    // paranoid: true, // 偏执模式，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    freezeTableName: true // 自定义表名
  },
  logging: msg => {
    dbLogger.info(msg)
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })


module.exports = sequelize

