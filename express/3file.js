let request = require('request')
let fs = require('fs')
let options = {
  url: 'http://localhost:4000/upload', //路径
  method: 'POST', //请求方式
  json: true, //希望返回的数据格式 是json格式
  headers: { //请求头
    "Content-Type": "multipart/form-data"
  },
  formData:{
    avatar:fs.createReadStream('./baidu.png')
  }
}
// 表单用form 类似body
request(options, function(err, response, body) {
  console.log('err', err)
  console.log('status', response.statusCode)
  console.log('success', body)
})