let express = require('express')
let app = express()

app.get('/jsonp',(req,res)=>{
    // req.query 获取get请求 ? 后前的东西
    // res.end('返回的数据') 这个接口返回的数据
    console.log(req.method,req.query)
    let rs = req.query.cb
    res.end(`${rs}(123)`)
})
app.listen(3000,()=>{
    console.log('listen start')
})