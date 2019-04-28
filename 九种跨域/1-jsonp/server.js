let express = require('express')
let app = express()
var bodyParser = require('body-parser');//解析,用req.body获取post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/jsonp',(req,res)=>{
    // req.query 获取get请求 ? 后前的东西
    // res.end('返回的数据') 这个接口返回的数据
    console.log(req.method,req.query)
    let rs = req.query.cb
    res.end(`${rs}(123)`)
})

app.post('/form',(req,res)=>{
  console.log(req.method,req.url,req.body)

  res.end(`(123)`)
})

app.get('/form',(req,res)=>{
  console.log(req.method,req.url,req.query,req.params)

  res.end(`(123)`)
})

app.listen(3000,()=>{
    console.log('listen start')
})