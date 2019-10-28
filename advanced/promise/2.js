let fs = require('fs')
let path = require('path')
let Promise = require('./promise')
function read(url){
  let defer = Promise.defer()
  fs.readFile(url,'utf8',(err,data)=>{
    if(err) {
      defer.reject(err);
    }else{
      defer.resolve(data);
    }
  })
  return defer.promise
}

read(path.join(__dirname,'./1.txt')).then(data=>{
  console.log(data)  
},(err)=>{
  console.log(err)  
})
// npm install -g promises-aplus-tests 测试的包
// promises-aplus-tests promise.js