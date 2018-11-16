/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description: 入口文件
 * @Date: 2018-11-14 14:31:17
 * @LastEditTime: 2018-11-16 17:56:32
 */
const route = require('./src/route')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const db = require('./src/db')
const app = new Koa()

app.use(bodyParser())
app.use(route.routes())
   .use(route.allowedMethods())

app.listen(8099)

console.log('[poetry] starting in port 8099')
