/*
  1、写一个简易版的 看打包的结果
  webpack.config.js // npx webpack 即可打包
  let path = require('path');
  module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
      filename:'bundle.js',
      path:path.join(__dirname,'dist')
    }
  }
  2、看打包后的结果 删除没用的 
    1、他自己实现了一个require方法,默认会去引用我们的主文件,在函数执行的时候 
       会传入一个参数对象 key就是路径 value就是文件的内容
    2、在浏览器用查看删除后的代码 一样的跑
  3、配置link
    创建一个新的package.json
    执行npx webpack_sg 的时候 他会去执行./bin/webapck.js
    配置bin:{
      "webpack_sg":"./bin/webpack.js"
    }
    
    // 创建bin/webpack.js
    在首行配置node环境 => #! /usr/bin/env node
    
    创建 将当前的文件 配置到本地  npm link 就会把文件连接到全局安装的c盘里面(类似 npm i webpack_sg -g)

    使用 在项目中 npm link webpack_sg 即将全局的包影射到当前文件中(注意bin 写的key和文件名字最好一致)
 */

 /*
    path.join 是绝对路径参数必须要传递 __dirname 和要找的文件
    path.resolve 是相对路径 直接传递 当前文件下要找的文件

    path.join(process.cwd(),'webpack.config.js') == path.resolve('webpack.config.js')
 
 */