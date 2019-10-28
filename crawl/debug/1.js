// 引入一个debug模块
let debug = require('debug')
let logger1 = debug('logger:1')
let logger2 = debug('logger:2')
logger1('打印日志1')
logger2('打印日志2')
console.log( process.env.DEBUG)
// 先判断当前的运行环境,查看环境变量中的DEBUG的值,看值是否跟自己的名字匹配
// 是则输出日志,否则不输出
// 设置环境变量 set DEBUG=logger 要到cmd下设置
// 获取环境变量的值 echo %DEBUG%  node中获取 process.env.DEBUG

// 设置的时候 默认只能是一个  可以用*来处理 set DEBUG=logger:*