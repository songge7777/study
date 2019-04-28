
// 当用户登录后 返回一个标识 cookie

let express = require('express')
let app = express()
let path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname)))
let bodyParser = require('body-parser')
app.use(bodyParser())

let cookieParser = require('cookie-parser')
app.use(cookieParser())//req.cookies['xxx']获取cookie
 
let userList = [
  {username:'zfpx1',password:'123'},
  {username:'zfpx2',password:'123'},
]



app.post('/api/login',(req,res)=>{
  let {username,password} = req.body
  let cook = req.headers.cookie
    console.log(req.body,cook)
    let cardId = Math.random()+Date.now()
    res.cookie("sessionId",cardId)
    res.json({code:0})
})

/*
      反射形 用户输入啥返回啥
     http://localhost:3000/welcome?type=<sricpt>alert(document.cookie)</sricpt>
     1、一般情况下会让cookie在前端不可获取  并不是解决xss的方案 只是降低受损的范围
     诱导用户自己点开(一次性)
     2、encodeURIComponent将用户输入的参数进行处理
     */
 app.get('/welcome',(req,res)=>{
  console.log(req.query)
  // res.send(`${req.query.type}`)
  
  res.send(`${encodeURIComponent(req.query.type)}`)
  
})

let comments = [
  {username:'zfpx1',content:'xxxxxxxx'},
  {username:'zfpx2',content:'yyyyyyyyy'}
]

app.get('/api/list',(req,res)=>{
  res.json({code:0,comments})
})

// xss 存储型 恶意的脚本存储到服务器，所有人访问都会攻击,比反射型和DOM-Based 范围更大


app.listen(3000)