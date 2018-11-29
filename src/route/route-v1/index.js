/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 
 * @Date: 2018-11-14 16:13:41
 * @LastEditTime: 2018-11-29 17:32:53
 */
const router = require('koa-router')()

const user = require('./user')
const poetry = require('./poetry')
const poetryAuthor = require('./poetry-author')
const poem = require('./poem')
const poemAuthor = require('./poem-author')
const lunYu = require('./lunyu')
const shiJing = require('./shijing')

router.use('/u', user.routes(), user.allowedMethods())
router.use('/pty', poetry.routes(), poetry.allowedMethods())
router.use('/pty-author', poetryAuthor.routes(), poetryAuthor.allowedMethods())
router.use('/poem', poem.routes(), poem.allowedMethods())
router.use('/poem-author', poemAuthor.routes(), poemAuthor.allowedMethods())
router.use('/lun-yu', lunYu.routes(), lunYu.allowedMethods())
router.use('/shi-jing', shiJing.routes(), shiJing.allowedMethods())

module.exports = router
