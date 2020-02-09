// cookie 用来和服务器端传输数据 cookie存储大小 4k
// 设置 cookie 和 获取 cookie

let http = require('http');
let fs =  require('fs');
let path = require('path')
http.createServer((req,res)=>{
  if(req.url === '/index'){
    res.setHeader('Set-Cookie',['name=zf;max-age=4','age=10'])
    let rs = fs.readFileSync(path.join(__dirname,'index.html'))
    res.end(rs)
  }
  if(req.url === '/read'){
    let cookie = req.headers['cookie']
    res.end(cookie)
  }
  if(req.url === '/write/red'){
    let cookie = req.headers['cookie']
    res.end(cookie)
  }
  if(req.url == '/write'){
    // res.setHeader('Set-Cookie','name=zf')
    // domain path max-age expires httpOnly
    
    // domain path 可以限制cookie的作用域
    // domain 只在某个域名下使用 默认是 当前域名 通过他可以确认在哪个域名下用 .zhufeng.cn 一级二级下都满足 a.zhufeng.cn 只有该域名才有
    // path 在当前某个路径下可以读取cookie,  /write/rd 可以获取, 

    // 时间
    // max-age=10 相对时间 每次刷新的时候 增加10s(每次延迟时间,以秒为时间)
    // expires 绝对时间 new Date().... 
    // httpOnly= true 表示前端无法修改后端的设置的cookie(在浏览器中 http 这一行有一个对钩,只能处理浏览器js不能操作)
    res.setHeader('Set-Cookie',['name=zf','age=10'])
    return res.end('write ok')
  }
}).listen(3000);