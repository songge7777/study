/*
  // 文档 http://mockjs.com/examples.html
  // github使用 https://github.com/nuysoft/Mock/wiki/Getting-Started

  mockjs 语法
    @ip -> 随机输出一个ip；
    @id -> 随机输出长度18的字符，不接受参数；
    "array|1-10" -> 随机输出1-10长度的数组，也可以直接是固定长度；
    "object|2" -> 输出一个两个key值的对象，
    "@image()" 返回一个占位图url，支持size, background, foreground, format, text

    配合express搭建
    let express = require('express')
    let Mock = require('mockjs')
    let app = express()
    app.get('/user',function(req,res){
    let result = Mock.mock({
      code:0,
      message:'成功',
      "data|20":[{
          "name":"@cname",
          "userId":"@id",
          "createAt":"@datetime"
        }]
      })
      res.json(result)
    })
    app.listen(7000)

    前端页面
    <script>
        let xhr = new XMLHttpRequest;
        xhr.open('GET','http://localhost:7000/user.json',true)
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
          }
        }  
        xhr.send()
    </script>

  easy-mock  https://easy-mock.com/login
  Easy Mock就是一个在线创建mock的服务平台，帮你省去你 配置、安装、起服务、维护、多人协作Mock数据不互通等一系列繁琐的操作
  {
    "data|5": [{
      "id|1-1000": 1,
      "title": "@csentence",
      "url": "@url",
      "image": "@image(300x200)",
      "createAt": "@datetime"
    }],
    "code": 0
  }




*/