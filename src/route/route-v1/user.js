/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:15:13
 * @LastEditTime: 2018-11-22 17:54:26
 */
const user = require('koa-router')()
const UserController = require('../../controllers/user')
const FormatResponse = require('../../utils/format-response')
const MappingCode = require('../../utils/mapping-code')

user.get('/user', async (ctx, next) => {
  try {
    let result = await UserController.getUsers(ctx, next)
    ctx.body = FormatResponse.success(result, MappingCode.FETCH_SUCCESS)
  } catch (error) {
    ctx.body = FormatResponse.error(error)
  } finally {
    next()
  }
})

user.post('/signin', async (ctx, next) => {
  try {
    let result = await UserController.signIn(ctx, next)
    ctx.body = FormatResponse.success(result, MappingCode.SIGN_IN_SUCCESS)
  } catch (error) {
    ctx.body = FormatResponse.error(error)
  } finally {
    next()
  }
})

module.exports = user
