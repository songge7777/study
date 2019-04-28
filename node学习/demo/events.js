
// events 是node.js内建对象
const EventEmitter = require('events')

class dom extends EventEmitter {

}
const ce = new dom()
function fn1 (){
  console.log('fn1')
}
function fn2 (){
  console.log('fn2')
}
//on 绑定事件 可以绑定多个方法
ce.on('test',fn1)
ce.on('test',fn2)

// emit执行事件的所有方法
setInterval(()=>{
  ce.emit('test')
},500)

// removeListener 移除某个事件
//  ce.removeListener('test',fn1)

// removeAllListener 移除事件所有方法
//  ce.removeAllListener('test')
