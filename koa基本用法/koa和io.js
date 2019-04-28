const koa = require('koa');
const Router = require('koa-router');
const http = require('http')
// server side
const socketIo = require('socket.io')

const app =new koa();
const server = http.createServer(app.callback())
const io = socketIo(server)
const router = new Router()

io.on('connection',(socket) => {
  console.log('connection 连接成功')
  socket.emit('send',{sg:'sg'})
})
//路由配置
router.get('/',(x,next)=>{
  x.body = '123'
})

app.use(router.routes(),router.allowedMethods())
server.listen(3002,'0.0.0.0')



/*
  client side

  socket.io-client

  const clientSocket = require("socket.io-client")(sk_host + ':' + sk_port, {
    query: {
      token: '00E04C644323', //_token
      version: version
    },
    autoConnect: true
  });

	clientSocket.on('connect', async (data) => {
		console.log('-----connect success----------',data)
		});
	clientSocket.on('error', async (data) => {
		console.log('-----connect error----------',data)
		});

*/