let merge = require('webpack-merge')
let base = require('./webpack.config')
let HtmlPluginWebpack = require('html-webpack-plugin')
let path = require('path')

module.exports = merge(base,{
  entry:{
    main:path.join(__dirname,'../src/client-entry.js')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  plugins:[
    new HtmlPluginWebpack({
      template:path.join(__dirname,'../index.html'),
      filename:'index.html'
    })
  ]
})