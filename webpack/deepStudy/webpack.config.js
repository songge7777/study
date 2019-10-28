let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry:{
    main:path.join(__dirname,'src','index.js')
  },
  output:{
    filename:'[name].js',
    path:path.join(__dirname,'dist1')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'src','1.html')
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      },
      {
        test:/\.jpeg$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:1*1024,
          }
        }]
      },
      
    ]
  }
}