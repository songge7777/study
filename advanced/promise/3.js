// let fs = require('fs')
let fs = require('mz/fs') // nodeapi => promise
let path = require('path')
let Promise = require('./promise')
let util = require('util')

let readFile =  util.promisify(fs.readFile)

Promise.all([fs.readFile(path.join(__dirname,'./1.txt'),'utf8')]).then(data=>{
  console.log('data',data)
})


// cnpm i -S mz

let str = '/asd/2e/q1/11?2312312311'
let reg = /\?\w{1,10}$/
console.log(reg.test(str))