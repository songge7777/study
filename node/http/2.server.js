let http = require('http');
http.createServer(function(req,res){
  console.log(req.method)
  console.log(req.url)
  console.log(req.headers)
  let arr = [];
  req.on('data',function(data){
    arr.push(data)
  })
  req.on('end',function(){
    console.log(Buffer.concat(arr).toString())
    res.statusCode = 200
    res.end('hello')// 他会先调用write写入 在调end返回
  })
}).listen(3000,'localhost',()=>{
  console.log('server 3000 start')
})