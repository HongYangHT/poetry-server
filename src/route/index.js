
const V1 = require('./route-v1')
const V2 = require('./route-v2')
const Router = require('koa-router')

let router = new Router()

router.use('/api/v1', V1.routes(), V1.allowedMethods())
router.use('/api/v2', V2.routes(), V2.allowedMethods())

module.exports = router
