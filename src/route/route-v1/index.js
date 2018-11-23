/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:13:41
 * @LastEditTime: 2018-11-20 17:11:04
 */
const router = require('koa-router')()

const user = require('./user')

router.use('/u', user.routes(), user.allowedMethods())

module.exports = router
