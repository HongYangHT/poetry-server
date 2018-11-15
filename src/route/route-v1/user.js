const user = require('koa-router')()
const UserController = require('../../controllers/user')

user.get('/user', async (ctx) => {
  let user = await UserController.addUser()
  let result = await UserController.getUsers()
  ctx.body = result
})

module.exports = user