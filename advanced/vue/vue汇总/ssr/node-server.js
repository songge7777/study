let express = require('express');
let app = express();
let fs = require('fs')
let Vue = require('vue')
let path = require('path')
let VueServerRenderer = require('vue-server-renderer')


let serverBundle = fs.readFileSync(path.join(__dirname,'dist/server.js'),'utf8')
let template = fs.readFileSync(path.join(__dirname,'dist/index.ssr.html'),'utf8')
let render = VueServerRenderer.createBundleRenderer(serverBundle,{
  template
})


app.get('/',(req,res)=>{
  // 把渲染好的字符串仍给客户端
  // 只是返回一个字符串 并没有vue实际功能  只有显示html 没有按键的功能 
  // 需要把之前client打包好的 挂载上去  client打包是有这个功能的 
  // 但是服务器请求的时候 还需要把 client打包的js返回回去
  // 但是 client 回去找#app 目前server端的html模板是没有的  一般在app.vue 第一次div添加#app
  render.renderToString((err,html)=>{
        res.send(html)
      });
})
// 顺序要保证
app.use(express.static(path.join(__dirname,'dist')))

app.listen(3000)