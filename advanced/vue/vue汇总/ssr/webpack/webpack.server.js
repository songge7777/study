let merge = require('webpack-merge')
let base = require('./webpack.config')
let path = require('path')
let HtmlPluginWebpack = require('html-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
module.exports = merge(base,{
  entry:{
    server:path.join(__dirname,'../src/server-entry.js')
  },
  target:"node",//打包出的结果给node用 ,可能会打包fs 一定要加  
  output:{
    libraryTarget:'commonjs2'
  },
  plugins:[
    new VueSSRServerPlugin(),
    new HtmlPluginWebpack({
      template:path.join(__dirname,'../index.ssr.html'),
      filename:'index.ssr.html',
      excludeChunks:['server']
    })
  ]
})