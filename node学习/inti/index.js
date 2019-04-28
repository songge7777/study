const http = require('http')
const conf = require('./config/config')
const path = require('path')

const server = http.createServer((req, res) => {
    const url = req.url;
    const filrPath = path.join(conf.root,url)
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end(` <style>  .div{  color: red;  } </style>  <div class="div">  123  </div> 
      <iframe src="https://www.baidu.com" width="500px" height="500px"></iframe> 
        <script>
       console.log("123")
       document.onkeypress = function(e){
        console.log(e.which)
      }
       </script>`)
});

server.listen(conf.port,conf.hostname,() => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.log(`监听成功 ${addr}`)
});







