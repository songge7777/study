const http = require('http')
const conf = require('./config/config')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const url = req.url;
    const filrPath = path.join(conf.root,url)
    fs.stat(filrPath,(err,stats)=>{
      if(err){
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end(`${filrPath} 不存在`)
        return;
      }
      if(stats.isFile()){
        res.statusCode === 200;
        res.setHeader('Content-Type','text/plain')
        // 通常不这么写 把所有的内容读取才写
        // fs.readFile(filrPath,(err,data)=>{
        //   res.end(data)
        // })
        fs.createReadStream(filrPath).pipe(res)
      }else if(stats.isDirectory()){
        fs.readdir(filrPath,(err,files)=>{
          res.statusCode == 200;
          res.setHeader('Content-Type','text/plain');
          res.end(files.join(','))
        })
      }
    })
});

server.listen(conf.port,conf.hostname,() => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.log(`监听成功 ${addr}`)
});







