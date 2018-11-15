const router = require('koa-router')()

const user = require('./user')

router.use('/u', user.routes(), user.allowedMethods())

module.exports = router
