/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 入口文件
 * @Date: 2018-11-14 14:31:17
 * @LastEditTime: 2018-11-23 14:42:26
 */
const route = require('./src/route')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const helmet = require('koa-helmet')

const db = require('./src/db')
const app = new Koa()

app.use(helmet())
app.use(bodyParser())
app.use(logger())
app.use(route.routes())
   .use(route.allowedMethods())

app.listen(8099)

console.log('[poetry] starting in port 8099')
