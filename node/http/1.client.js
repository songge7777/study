let http = require('http')
let client = http.request({
  host:'localhost',
  method:'post',
  port:3000,
  path:'/user?a=1&b=2#hash',
  headers:{
    name:'zfpx',
    'Content-Type':'application/x-www-form-urlencoded'
  }
},function(res){
  res.on('data',function(data){
    console.log(data.toString())
  })
})
// 请求体
client.end('age=9')