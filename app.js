/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 入口文件
 * @Date: 2018-11-14 14:31:17
 * @LastEditTime: 2019-04-06 12:30:41
 */
const route = require('./src/route')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const staticServe = require('koa-static')
// const logger = require('koa-logger')
const helmet = require('koa-helmet')
let cors = require('@koa/cors')

const {
  httpLogger
} = require('./src/utils/logger')

require('./src/models')
const errorHandle = require('./src/middleware/error-handle')
const jwt = require('koa-jwt')
const config = require('./config')

const path = require('path')

const app = new Koa()

app.use(errorHandle)

app.use(staticServe(path.join(__dirname, 'api-doc/api')))

app.use(jwt({
  secret: config.JWT_SECRET
}).unless({
  path: [/\/api\/v1/, /\/login/, /\/signin/]
}))

app.use(helmet())
app.use(bodyParser())
app.use(cors())
// app.use(logger())
app.use(route.routes())
  .use(route.allowedMethods())

/**
 * 记录请求日志到文件中
 */
app.use(httpLogger())

app.listen(8099)

console.log('[poetry] starting in port 8099')
