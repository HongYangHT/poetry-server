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
