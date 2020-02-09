// 冒泡
// function fn(arr) {
//   let len = arr.length 
//   for(let i=0;i<len;i++){
//     for(let j=0;j<len;j++){
//       if(arr[i]<arr[j]){
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//     }
//   }
//   return arr
// }

// 快速
// function fn(arr) {
//   let left=[]
//   let right=[]
//   let len =arr.length
//   if(len<2)return arr
//   let midIndex = arr.splice(Math.floor(Math.random()*(len)),1)
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>midIndex){
//       right.push(arr[i])
//     }else{
//       left.push(arr[i])
//     }
//   }
//   return fn(left).concat(midIndex,fn(right))
// }

// 选择排序 
// function fn(arr) {
//     let len = arr.length
//     let minIndex = '';
//     for(let i=0;i<len-1;i++){
//       minIndex = i;
//       for(let j=i;j<len;j++){
//         if(arr[j]>arr[minIndex]){
//           minIndex = j
//         }
//       }
//       [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
//     }
//     return arr
// }
// console.log(fn([5, 2, 6, 3, 2, 6, 1]))

// deepClone
// function deepClone(obj) {
//   if(typeof obj != 'object' && obj !=null) return obj
//   if(obj instanceof Date) return new DataCue(obj)
//   if(obj instanceof RegExp) return new RegExp(obj)
//   let newObj = obj.constructor
//   for(let i in obj){
//     newObj[i] = deepClone(obj[i])
//   }
//   return newObj
// }

// call
// Function.prototype.myCall = function (context,...args) {
//   context= Object(context)?context:window
//   context.fn = this
//   let rs = eval(`context.fn(${args})`)
//   delete context.fn
// }

// function fn(a,b) {
//   console.log(a,b)
// }
// fn.myCall({},1,2)

// // apply
// Function.prototype.myApply = function (context,args) {
//   context= Object(context)?context:window
//   context.fn = this
//   let rs = eval(`context.fn(${args})`)
//   delete context.fn
// }

// function fn(a,b) {
//   console.log(a,b)
// }
// fn.myApply({},[1,2])

// bind 
// Function.prototype.myBind = function (context,...args) {
//   context = Object(context)?context:window
//   let concatArgs = args
//   let that = this
//   function fn(){}
//   fn.prototype = this.prototype
//   function bFound(...arg) {
//     return that.apply(this instanceof bFound?this:context,concatArgs.concat(arg))
//   }
//   bFound.prototype = new fn()
//   return bFound
// }

// function fn(...params) {
//   console.log(params)
// }

// let rs = fn.myBind({},1)
// rs(1,2,3)

// 数组数据打乱
// function fn(arr){
//   let len = arr.length
//   for(let i=0;i<len;i++){
//     let midIndex =  i + Math.floor(Math.random()*(len-i));
//     [arr[midIndex],arr[i]] = [arr[i],arr[midIndex]]
//   }
//   return arr
// }
// console.log(fn([1, 2, 3, 4, 5, 6]))

// promise  catch reject finally all race
// Promise.prototype.catch = function(cb){
//   return  this.then(null,cb)
// }
// Promise.prototype.finally = function(cb){
//   return this.then(
//     (data)=>{
//       return Promise.resolve(cb()).then(()=>data)
//     },
//     err=>{
//       return Promise.resolve(cb()).then(()=>{throw err})
//     }
//   )
// }

// koa 中间件
// let app = {}
// app.middleware = []
// app.use = function(cb){
//   app.middleware.push(cb)
// }

// app.use(function(next){
//   console.log('1')
//   next()
//   console.log('22')
// })

// app.use(function(next){
//   console.log('3')
//   next()
//   console.log('44')
// })

// let dispatch = app.middleware.reduce((a,b)=>(...fn)=>a(()=>b(...fn)))
// let dispatch = app.middleware.reduceRight((a,b)=>(...fn)=>b(()=>a(...fn)))

// let dispatch = function(index){
//   if(index>=app.middleware.length) return ()=>{}
//   let route = app.middleware[index]
//   route(()=>dispatch(++index))
// }
// dispatch(0)

// map
// let arr =[1,2,3,4]
// let rs = arr.map(item=>item*2)
// Array.prototype.myMap = function(fn){
//   let thisArr = this
//   return thisArr.reduce((a,b)=>{
//     a.push(fn(b))
//     return a
//   },[])
// }
// let rs1 = arr.myMap(item=>item*2)
// console.log(rs)

// 函数柯里化
// function fn(...args){
//   let arg = [...args]
//   function bFound(...params){
//     arg.push(...params)
//     return bFound
//   } 
//   bFound.toString = ()=>arg.reduce((a,b)=>a+b)
//   return bFound
// }

// let a = fn(1)(2)(3)(4)
// console.log(a+"")

// 发布订阅
// class Agent{
//   constructor(name){
//     this.name = name
//     this.middleware={}
//   }
//   subscribe(type,fn){
//       let middleware = this.middleware[type]
//     if(middleware){
//       middleware.push(fn) 
//     }else{
//       this.middleware[type] = [fn]
//     }
//   }
//   dispatch(type,area,money){
//     let middleware = this.middleware[type]
//     console.log('middleware',middleware)
//     if(middleware){
//       middleware.forEach(item=>item(area,money))
//     }
//   }
// }

// class ke{
//   constructor(name,agent){
//     this.name = name
//     this.agent = agent
//   }
//   subscribe(type){
//     this.agent.subscribe(type,(area,money)=>{
//       console.log(this.name,area,money)
//     })
//   }
// }

// class Fang{
//   constructor(name,agent){
//     this.name = name
//     this.agent = agent
//   }
//   dispatch(type,area,money){
//     this.agent.dispatch(type,area,money)
//   }
// }

// let agent = new Agent('房子')
// let ke1 = new ke('ke1',agent)
// let ke2 = new ke('ke2',agent)
// ke1.subscribe('house')
// ke2.subscribe('house')
// let f1 = new Fang('房东1',agent)
// f1.dispatch('house','300','4500')

// 观察者模式
// class Fan{
//   constructor(name,star){
//     this.name = name
//     this.star = star
//     this.star.attach(this)
//   }
//   update(){
//     console.log(this.name,this.star.color)
//   }
// } 

// class Star{
//   constructor(name){
//     this.name = name
//     this.color = 'red'
//     this.middleware=[]
//   }
//   attach(type){
//     this.middleware.push(type)
//   }
//   setState(data){
//     this.color = data
//     this.notifyAllObervers()
//   }
//   notifyAllObervers(){
//     this.middleware.forEach(item=>item.update())
//   }
// }

// let star = new Star('xxx')
// let f1 = new Fan('张三',star)
// let f2 = new Fan('李四',star)
// star.setState('green')

// webpack 执行过程
// 1、配置  shell脚本和webpack配置
// 2、插件配置 执行 nodeEnvironmentPlugin webpack内的插件 内部基础插件
// 3、run 开始编译  会执行this.compile 初始化compilation 这个类初始 entries chunk modules assets 编译模板
// 4、make 事件触发 singleEntryPlugin 插件  执行compiler.addEntry 通过工厂模式创建代码块 保存到entries中 触发module.build 通过loader编译源码  ast语法解析 将 require 转换成 __webpack_require__, 遇到require会生成 dependency 加入到依赖项 module结束的时候 会循环执行依赖项
// 5、seal 对chunk module 进行解析 打包,创建代码块资源,通过模板将 chunk 生成 __webpack_require__() 需要的格式,模板有mainTemplate 处理module chunkTemplate 处理异步 
// 6、emit 将 assets里面的资源打包到 output.path 中

// webpack 插件
// 1,entryOption
// 2,beforeRun beforeCompile compile thisCompilation compilation
// 3,buildModule successModule finishModule
// 4,seal optimize reviveModule reviveChunk beforeChunk beforeHash afterHash afterChunk beforeModuleAssets chunkAssets
// 5,emit beforeEmit done afterSeal

// jsonp
/*
  function jsonp({url,params,cb}){
    return new Promise((resolve,reject)=>{
      window[cb] = function(data){
        resolve(data)
      }
      let data = []
      for(let i in params){
        data.push(`${i}=${params[i]}`)
      }
      params = data.join('&');
      let dom = document.createElement('script')
      dom.src = `${url?${params}}`
      document.body.appendChild(dom)
    })
  }
  jsonp({
    url:'xxx',
    params:{name:1,mage:'x'},
    cb:'cb'
  }).then(data=>{
    console.log(data)
  })

  let express = require('express')
  let app = express()
  app.get('/',(req,res,next)=>{
    let {cb} = req.query
    res.end(`${cb}(123)`)
  })
  app.listen('3000')
*/

// ajax
/*
  let xhr = new XMLHttpRequire();
  xhr.open('get','xxx','true')
  xhr.onreadystatechange = function(){
    xhr.readyState == 4 xhr.status ==200
    xhr.responseText
  }
*/
// 懒加载
// 分2步骤 1、代码分隔 2、jsonp加载数据 
// 1、ast解析的时候 遇到import('xx')的时候 会解析成__webpack_require__.e('chunkId').then(__webpack_require.t.bind(module,dependencyChunkId,7)).then(data=>data.default)
// __webpack_require__.e('chunkId').then(__webpack_require__.t.bind(module,'dependencyChunkId',7)).then(data=>data.default)
// 2、jsonp加载数据 webpack_require .e 获取jsonp数据 将得到的数据 挂载到modules上  __webpack_require__.t 加载数据

// hot 更新
// server 端
// 创建一个服务  还有一个io  当每次client进来的时候 会将他们保存起来  等待代码更新的时候  会给每个client发送一个ok事件和 hash值
// client 端
// module.hot.accept('xxx')
// 创建一个发布订阅的  当收到后端传递过来的事件的时候 保存传递过来的 hash  订阅事件会监控ok事件 会发送一个webpackHotUpdate事件,第一个的时候 会保存hash 第二次的时候会走hot更新
// 1、更新的时候 用hash+'hot.update.json'发送get请求 询问服务器到底这一次和上一次编译改变了哪些chunk和module 返回值是一个对象 h是hash值 c是当前变化的chunkId(c是一个对象 key是chunkId value 是布尔值)
// 2、编译c对象  通过jsonp请求数据 chunkId+'hot.update.js' 去请求数据 返回的是 webpackHotUpdate('chunkId',{moduleId:value})
// 3、webpackHotUpdate 作用 编译JSONP过来的数据 1、通过__webpack_require__加载有变化module 2、通过moduleId 获取parentModule在里面获取hot之前缓存的执行函数 加载最新的数据
