let Koa = require('./koaJs/application');

let app = new  Koa()

// ctx上有req属性 req属性就是原生的req
// ctx 上有request属性 和 response 属性 是自己封装的
// koa原生 ctx.url 获取url路径  ctx.path 获取url路径部分 ?前面的
app.use((ctx)=>{
  console.log(ctx.req.url)
  console.log(ctx.request.url)
  console.log(ctx.url)// 做了一层拦截 当我在ctx上取值, 会去ctx.request上取
  
})
app.listen(3000,'localhost',()=>{
  console.log('server start 300')
})