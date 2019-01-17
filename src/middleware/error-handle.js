/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: jwt 中间件处理错误
 * @Date: 2018-11-23 17:51:19
 * @LastEditTime: 2019-01-14 09:42:30
 */
const {
  errorLogger
} = require('../utils/logger')

const errorHandle = (ctx, next) => {
  return next().catch((err) => {
    errorLogger.error(err)
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        code: -1,
        message: err.originalError ? err.originalError.message : err.message,
        data: {}
      }
    } else {
      throw err
    }
  })
}

module.exports = errorHandle
