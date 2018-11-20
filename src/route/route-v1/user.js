/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:15:13
 * @LastEditTime: 2018-11-20 17:11:10
 */
const user = require('koa-router')()
const UserController = require('../../controllers/user')

user.get('/user', async (ctx) => {
  let user = await UserController.addUser()
  let result = await UserController.getUsers()
  ctx.body = result
})

module.exports = user