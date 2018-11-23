/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 入口文件
 * @Date: 2018-11-14 14:31:17
 * @LastEditTime: 2018-11-23 18:36:30
 */
const route = require('./src/route')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const helmet = require('koa-helmet')

const db = require('./src/db')
const errorHandle = require('./src/middleware/error-handle')
const jwt = require('koa-jwt')
const config = require('./config')

const app = new Koa()

app.use(errorHandle)
app.use(jwt({
   secret: config.JWT_SECRET
}).unless({
   path: [/\/api\/v1/, /\/login/, /\/signin/]
}))

app.use(helmet())
app.use(bodyParser())
app.use(logger())
app.use(route.routes())
   .use(route.allowedMethods())
   
app.listen(8099)

console.log('[poetry] starting in port 8099')
