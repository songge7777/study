
// express就是一个函数
let express = require('./express')

let app = express();//app 就是一个监听函数
// req,res是原生的
app.get('/post1',(req,res)=>{
  res.end('post')
})
app.get('/123',(req,res)=>{
  res.end(`home111`)
})
app.get('/user/:name/:id',function(req,res){
  res.end(JSON.stringify(req.params));
})
// app.all('*',(res,req)=>{
//   res.end('end')
// })
app.listen(3000);

