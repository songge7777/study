
/*

	1、koa-static和koa-route
		koa-static 中间键放前端  不然访问静态资源 有问题

	作用：创建虚拟目录 访问：本机地址/(public下面的文件名字即可)
	app.use(require('koa-static')(__dirname + '/public'))

  2、
    node get post 请求
    https://blog.csdn.net/m0_37263637/article/details/79559700


  3、koa 搭建
    //基本引入
    let koa = require('koa')
    let Router = require('koa-router')
    //跨域引入
    let cors = require('koa2-cors');
    
    初始化实例
    let router = new Router();

    let app = new koa()

    //跨域配置
    app.use(cors({
      origin: function (ctx) {
            if (ctx.url === '/test') {
                  return "*"; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; 
            //return 'http://localhost:8080'; / 这样就能只允许 http://localhost:8080 这个域名的请求了
  
    },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
          credentials: true,
          allowMethods: ['GET', 'POST', 'DELETE'],
          allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))

    //配置路由
    router.get('/123',(ctx,next)=>{
        ctx.body = '123'
    })
    //配置中间件
    app.use(router.routes(),router.allowedMethods())
    
    app.listen(9093)

  4、socket.io 联合koa配置
    //引入http模块
    const http = require('http');
    //http 创建一个服务  将app 对象包装起来,要传app.callback() 不然报错
    let server = http.createServer(app.callback())
    //app.listen 换成 server.listen(3001,'0.0.0.0')

    //创建io 将server作为参数传入
    const io = require('socket.io')(server)

    //io使用 此时的io对象是全局的 里面的socket 是局部的
    io.on('connection',socket=>{
      console.log('connection 连接成功')
      //局部
      socket.on('send',(data)=>{
        console.log('发送')	
      })
      
    })
    //广发事件  一般配合定时器  定期发送
    io.sockets.emit('msg', {
            value: '123'
        }
    
*/