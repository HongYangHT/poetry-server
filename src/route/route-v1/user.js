/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:15:13
 * @LastEditTime: 2018-11-21 16:52:04
 */
const user = require('koa-router')()
const UserController = require('../../controllers/user')
const FormatResponse = require('../../utils/format-response')

user.get('/user', async (ctx, next) => {
  try {
    let result = await UserController.getUsers(ctx, next)
    ctx.body = FormatResponse.success(result)
  } catch (error) {
    ctx.body = FormatResponse.error(error)
  } finally {
    next()
  }
})

module.exports = user