
// 开启服务 在微信里面开启即可通过
var koa =require('koa')
//加密用的
var sha1 = require('sha1')

var config = {
    wechat:{
        appId:'',
        appSecret:'',
        token:''
    }
}
// koa 中间件 必须是一个generator函数
app.use(function *(next){
    console.log('当前路径?后面输入的字',this.query)
    var token = config.wechat.token
    var signature = this.query.signature
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr
    var str = [token, timestamp, nonce].sort().join('')
    var sha = sha1(str)

    if(sha === signature){
        this.body = echostr + ''
    }else{
        this.body = 'wrong'
    }
})

app.listen(80)
console.log('listening:80')