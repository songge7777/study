let path = require('path')
let VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['vue-style-loader','css-loader']
      },
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env'],
              plugins:[]
            }
          }
        ]
      },
      {
        test:/.vue$/,
        use:['vue-loader']
      }
    ]
  },
  output:{
    filename:'[name].js',
    path:path.join(__dirname,'../dist')
  },
  plugins:[
    new VueLoaderPlugin(),
  ]
}