let Koa = require('koa');

let app = new Koa()

//默认情况下请求到来 会执行第一个中间件

// 中间件函数有2个参数  ctx和next
// 洋葱模型 执行顺序 1 => 3 => 4 => 2
app.use((ctx,next)=>{
  console.log(1)
  next()
  console.log(2)
  // ctx.body = 'd'
})
app.use((ctx,next)=>{
  console.log(3)
  next()
  console.log(4)
})


app.listen(3000,()=>{
  console.log('start')
})