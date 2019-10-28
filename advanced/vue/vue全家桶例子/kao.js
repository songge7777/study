const koa = require('koa2');
const Router = require('koa-router');
const http = require('http')
const socketIo = require('socket.io')
const bodyparser = require('koa-bodyparser');

const app =new koa();
const server = http.createServer(app.callback())
const io = socketIo(server)
const router = new Router()
const cors = require('koa2-cors')
io.on('connection',(socket) => {
  console.log('connection 连接成功')
  socket.emit('send',{sg:'sg'})
})
//bodyparser post 接收参数 转换成对象   这个中间件要放前面
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))


app.use(cors({
  origin: function (ctx) {
          return "*"; // 允许来自所有域名请求
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))



app.use(require('koa-static')(__dirname+'/public'))
//koa-static 作用 静态目录
//开启node服务后  域名+ public+ index.html   可以直接访问public 下面的静态目录

app.use(async (ctx, next) => {
  console.log(`请求的URL${ctx.request.url}`)
  await next()
})
//路由配置
router.get('/',(x,next)=>{
  console.log('----gut')
  x.body = '123'
})

router.post('/123',(x,next)=>{
  console.log('---',x.query,x.request.body);
  x.body = '123';
})

app.use(router.routes(),router.allowedMethods())
server.listen(3002)