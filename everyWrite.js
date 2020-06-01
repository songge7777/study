// 冒泡
// function fn(arr) {
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (arr[i] < arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(fn([5, 2, 6, 3, 2, 6, 1]))

// 快速
// function fn(arr) {
//     let len = arr.length
//     if (len < 2) {
//         return arr
//     }
//     let midindex = arr.splice(Math.floor(Math.random() * len), 1)
//     let right = []
//     let left = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < midindex) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return fn(left).concat(midindex, fn(right))
// }

// console.log(fn([5, 2, 6, 3, 2, 6, 1]))

// 选择排序
// function fn(arr) {
//     let len = arr.length
//     let index = null
//     for (let i = 0; i < len; i++) {
//         index = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[index] > arr[j]) {
//                 index = j
//             }
//         }
//         [arr[index], arr[i]] = [arr[i], arr[index]]
//     }
//     return arr
// }
// console.log(fn([5, 2, 6, 3, 2, 6, 1]))

// 深拷贝 
// function clone(obj) {
//     if (typeof obj != null && obj != null) return obj
//     if (obj instanceof Date) return new Date(obj)
//     if (obj instanceof RegExp) return new RegExp(obj)
//     let newObj = new obj.constructor
//     for (let i in obj) {
//         newObj[i] = clone(obj(i))
//     }
//     return newObj
// }

// call
// Function.prototype.mycall = function(context, ...args) {
//     context = Object(context) ? context : window
//     context.fn = this

//     let rs = eval('context.fn(' + args + ')')
//     // let rs = eval(`context.fn(${args})`)
//     delete context.fn
// }

// function fn(a, b, c, d) {
//     console.log(a, b, c, d)
// }
// fn.mycall({}, 1, 2)

// apply
// Function.prototype.myapply = function(context, args) {
//     context = Object(context) ? context : window
//     context.fn = this

//     let rs = eval('context.fn(' + args + ')')
//     // let rs = eval(`context.fn(${args})`)
//     delete context.fn
// }

// function fn(a, b, c, d) {
//     console.log(a, b, c, d)
// }
// fn.myapply({}, [1, 2, 3])

// mybind
// Function.prototype.mybind = function(context, ...args) {
//     context = Object(context) ? context : window
//     let bindArgs = args
//     let that = this

//     function fn() {}
//     fn.prototype = this.prototype

//     function fBound() {
//         let fArgs = Array.prototype.slice.call(arguments)
//         return that.apply(this instanceof fBound ? this : context, bindArgs.concat(fArgs))
//     }
//     fBound.prototype = new fn()
//     return fBound
// }

// function fn(a, b, c, d) {
//     console.log(a, b, c, d)
// }
// let a = fn.mybind({}, 1, 2)
// a(3, 4)

// 数组数据打乱
// function fn(arr) {
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//         let midindex = i + Math.floor(Math.random() * (len - i));
//         [arr[i], arr[midindex]] = [arr[midindex], arr[i]]
//     }
//     return arr
// }
// console.log(fn([1, 2, 3, 4, 5, 6]))

// promise  catch reject finally all race
// Promise.prototype.catch = function(data) {
//     return this.then(null, data)
// }

// Promise.reject = function(data) {
//     return new Promise((resolve, reject) => reject(data))
// }

// Promise.prototype.finally = function(cb) {
//     return this.then(data => {
//         return Promise.resolve(cb()).then(() => data)
//     }, err => {
//         return Promise.resolve(cb()).then(() => { throw err })
//     })
// }

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject(123)
//   },1000)
// })
// p1.then().finally((data)=>{
//   console.log('xxxx',data)
// }).then(data=>{
//   console.log('resolve',data)
// },err=>{
//   console.log('err',err)
// })

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('seccuss')
//     }, 1000)
// })

// pro.then(data => {
//     console.log('data1', data)
//     return '12312312'
// }).finally((data) => {
//     console.log('1231')
// }).then(data => {
//     console.log('data2', data)
// })

// Promise.prototype.all = function(promises) {
//     return new Promise((resolve, reject) => {
//         let rs = null;
//         let index = 0;

//         function fn(arr) {
//             index++;
//             rs.push(arr)
//             if (index == promises.length) {
//                 resolve(rs)
//             }
//         }
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(data => {
//                 fn(data)
//             }, reject)
//         }
//     })
// }

// Promise.prototype.race = function(promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(data => {
//                 resolve(data)
//             })
//         }
//     })
// }

// koa 中间件

// let app = {}
// app.middlewares = []
// app.use = function(arr) {
//     app.middlewares.push(arr)
// }
// app.use((next) => {
//     console.log('1')
//     next()
//     console.log('2')
// })

// app.use((next) => {
//     console.log('3')
//     next()
//     console.log('4')
// })

// let dispatch = function(index) {
//     if (index === app.middlewares.length) return () => {}
//     let route = app.middlewares[index]
//     route(() => dispatch(++index))
// }
// dispatch(0)
// let rs = app.middlewares.reduce((a, b) => (...fn) => a(() => b(...fn)))
// let rs = app.middlewares.reduceRight((a, b) => (...fn) => b(() => a(...fn)))
// rs(() => {})

// map

// let rs = [1, 2, 3].map(item => item * 2)
// console.log(rs)  
// Array.prototype.mymap = function(fn) {
//     return this.reduce((a, b) => {
//         a.push(fn(b))
//         return a
//     }, [])
// }
// let rs = [1, 2, 3].mymap(item => item * 2)
// console.log(rs)

// 函数柯里化
// function currie(...args) {
//     let rs = [...args]

//     function fn(...args) {
//         rs.push(...args)
//         return fn
//     }
//     fn.toString = () => rs.reduce((a, b) => a + b)
//     return fn
// }
// let rs = currie(1)(2)(3)(4)
// console.log(rs + '')

// 数组 交集 并集 差集
// let arr1 = [1, 2, 3, 1, 4]
// let arr2 = [3, 4, 5, 6]

// 并集
// let set1 = new Set([...arr1, ...arr2])
// console.log(set1)

// 差集
// arr1 = new Set(arr1)
// arr2 = new Set(arr2)
// let rs = [...arr1].filter(item => !arr2.has(item))
// console.log(rs)

// 交集
// arr1 = new Set(arr1)
// arr2 = new Set(arr2)
// let rs = [...arr1].filter(item => arr2.has(item))
// console.log(rs)

// 发布订阅
// 订阅者 发布者 调度中心

// 订阅者把自己想订阅的事注册到调度中
// 发布订阅
// class Agent{
//   constructor(){
//     this._event = {}
//   }
//   publish(type,...args){
//     let listeners = this._event[type]
//     if(listeners){
//       console.log('=====>',...args)
//       listeners.forEach(listener=>listener(...args))
//     }
//   }
//   subscribe(type,fn){
//     let listeners = this._event[type]
//     if(listeners){
//       listeners.push(fn)
//     }else{
//       this._event[type] = [fn]
//     }
//   }
// }
// // 租客
// class Tenant{
//   constructor(name){
//     this.name = name
//   }
//   sub(agent,type){
//     agent.subscribe(type,(money,area)=>{
//       console.log(this.name,money,area)
//     })
//   }
// }
// // 房东
// class Landlord{
//   constructor(name){
//     this.name = name
//   }
//   lend(agent,money,area){
//     agent.publish('house',money,area)
//   }
// }

// let agent = new Agent()
// let t1 = new Tenant('张三')
// let t2 = new Tenant('李四')
// t1.sub(agent,'house')
// t2.sub(agent,'house')
// let l1 = new Landlord('房东')
// l1.lend(agent,40,600)

// 观察者模式
/**
 * 观察者 被观察者
 * 观察者提供维护被观察者一系列方法
 * 被观察者把自己注入观察者中
 * 被观察者提供更新接口
 * 观察者发生变化调被观察者跟新接口 更改数据
 */

// class Star{
//   constructor(name){
//     this.name = name
//     this.color = null
//     this.middlewares = []
//   }
//   setState(data){
//     this.color = data
//     this.notifyAllObervers()
//   }
//   getState(){
//     return this.color
//   }
//   attach(item){
//     this.middlewares.push(item)
//   }
//   notifyAllObervers(){
//     this.middlewares.forEach(item=>item.update())
//   }
// }

// class Fan{
//   constructor(name,star){
//     this.name = name
//     this.star = star
//     this.star.attach(this)
    
//   }
//   update(){
//     console.log(`${this.name}++++++++`,this.star.getState())
//   }
// }

// let star = new Star()
// let fan1 = new Fan("张三",star)
// let fan2 = new Fan("李四",star)
// star.setState('green')

//  webpack 执行过程 
// 1、配置 2、插件 3、run 4、make 5、seal 6、emitAssets
// 1、执行npx webpack 他会找node_modules .bin/webpack.cmd => webpack/bin/webpack.js => webpack-cli/bin/cli 入口文件就这 获取webpack配置 webpack(options) 得到compiler实例 通过compiler.run 开始编译

// 2、解析配置 解析shell 和webpack 配置选项 

// 3、初始化 注册nodeEnvironmentPlugin插件，执行所有webpack 配置插件, 使用webpackOptionApply初始化基础插件

// 4、run `compiler.run` 会执行内部的`this.compile`他是真正开始编译  他内部会初始化`Compilation`,`Compilation`负责了整个编译过程,内部的`this.compiler`执行conpiler对象，创建entries入口、chunks代码块、modules所有模型、assets所有的资源、模板(mainTemplate,chunkTemplate,hotUpdateChunkTempalte,moduelTemplate,runtimeTemplate)

// 5、make 事件触发 singleEntryPlugin 插件 执行compilation.addEntry,根据入口文件通过工厂方式创建代码块模块保存到`entries`内,触发module.build方法对源码进行loader处理 在进行ast语法解析，会将`require`替换成`__webpack_require__`,同时遇到`require`会创建 dependency 添加到依赖数组。module处理完成后 处理依赖模块

// 6、seal 对每个每个chunk 和 module进行处理,创建代码块资源，通过模板把chunk生成__webpack_require__()的格式  mainTemplate处理入口的module chunkTemplate处理异步加载 生成资源放在compilation.assets中

// 7、emitAssets 把assets输出到output的path中

// 主要的生命周期 插件
// 入口 webpackOptionApply entryOption
// run beforeRun beforeCompile compile thisCompilation compilation
// make buildModule successModule finishModules
// seal seal optimize reviveModule reviveChunk beforeChunk beforeHash afterHash afterChunk beforeModuleAssets chunkAssets
// emit emit afterEmit done afterSeal 

// jsonp
// function jsonp({url,params,cb}){
//     return new Promise((resolve,reject)=>{
//         window[cb] = function(data){
//             resolve(data)
//         }
//         params = {...params,cb}
//         let arr = []
//         for(let i in params){
//             arr.push(`${i}=${params[i]}`)
//         }
//         params = arr.join('&')
//         let dom = document.createElement('script')
//         dom.src = `${url}?${params}`
//         document.body.appendChild(dom)
//     })
// }
// jsonp({
//     url:'http://localhost:4000/123',
//     params:{age:1},
//     cb:'cb'
// }).then(data=>{
//     console.log(data)
// })

// let express = require('express')
// let app= express()
// app.get('/123',(req,res)=>{
//     let {cb} = req.query
//     console.log(cb)
//     res.end(`(${cb})('123')`)
// })
// app.listen('4000',function(){
//     console.log('start')
// })

// ajax
// let xhr = new XMLHttpRequest()
// xhr.open('get','http://localhost:4000/123',true)
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4&&xhr.status==200){
//         console.log(xhr.responseText)
//     }
// }
// xhr.send()

// 懒加载
// 分2步骤 分割代码,jsonp加载数据
// 分割代码，在ast解析的时候  遇到Import('xx')语法 会把他解析成__webpack_require__.e('chunkId').then(__webpack_require__.t.bind(module,dependencyChunkId,7)).then(data=>data.default)
// 其中 dependencyChunkId 对应分隔文件的 对象的key值
// jsonp 加载数据 
// __webpack_require__.e 方法就是实现了jsonp加载数据,创建script标签 加载数据分隔数据的js文件 获取数据,他对象数据添加到modules对象上,通过__webpack_require__.t 去解析数据到页面中

// hot 更新
// server 端
// 创建一个sever&&io,io用来监控客户端连接,将连接的所有client存放起来,同时监控hooks.done钩子,每次编译完成的时候,循环所有的client 
// 并且告诉他们 当前的编译的hash值和一个ok,内部要修改把compiler的输出文件系统改成了 MemoryFileSystem(内存)
// client 端
// module.hot.accept('moduleId',fn) 缓存数据
// 创建一个发布订阅 client 监控到 server发送过来的hash保存,当socket接收到ok事件事件,会发送`webpackHotUpdate`事件,第一次的时候 会保存当前的hash值,第二次的时候才会走hot的逻辑 
//  1、用更新前的上一次hash(hotCurrentHash)+'.hot-update.json'发送get请求,询问服务器到底这一次编译相对上一次编译改变了哪些chunk,哪些模块,返回的 h是当前的hot hash值 c是当前变化的chunkId(c是一个对象,key是 chunkId,value是true)
//  2、遍历c对象,jsonp请求变化的数据,url是 chunkId+用更新前的上一次hash(hotCurrentHash)+'.hot.update.js',返回的是 webpackHotUpdate('chunkId',{moduleId:value})
//  3、webpackHotUpdate 作用 遍历jsonp过来的的数据 1、通过__webpack_require__ 加载有变化的module 2、通过moduleId 获取到parentModule 在里面取到hot里之前缓存的函数执行，加载最新的数据 

// loader 
// 1、给 loaderContext 上下文定义4个变量,request当前所有的loader,remindingRequest剩下的loader,previousRequest之前的loader,data用来共享数据
// 2、异步处理 isSync 默认是true 当执行async 的时候 会改变 isSync会变成false, 异步执行返回函数的时候 会将isSync变成true
// 3、先处理 iteratePitchingLoaders 当其中一个pitch函数没有返回值的时候 直接执行下一个 若有返回值的时候 执行他并且传入 remindingRequest,previousRequest,data 为参数
// 4、pitch执行完成后处理 normal.raw 当为true的时候 就变成二进制,否则不处理
// 5、处理 iterateNormalLoaders 一次执行 当执行完最后一个就 退出去 执行回调函数



// react
// 虚拟dom createElement创建元素  React.createElement
  // 1、import React from './react' 我们写的jsx语法 通过babel编译,React.createElement将编译后的jsx语法创建组件,接收三个参数(第一个是组件或者标签,第二个是标签的配置对象id、style等,第三个是及其后面的都是children,可能是一个对象,也可能是一个数组)
  // 2、createElement 里面返回type和props,props里面存放了第二个标签的配置对象,和children
  // props.children 不传就是undefined
  // props.children 传递一个,那就是一个对象 react元素 数字 字符串
  // props.children 大于一个 那就是一个数组
  // 静态属性 isReactComponent 是用来用区别函数组件和类组件,在render 里面用到的
// render ReactDom.render
  // render里面会判断组件类型是 普通、函数、类组件
  // 当是普通组件的时候,通过组件类型 创建一个node节点,在循环props 将所有的参数设置到node上,若 render参数 element是string或者number就创createTextNode(element)返回,判断children是数组 就说明还有子组件,进行render循环,知道render第一个参数是字符串或者数字
  // function render(element,container){

// setState
// 1、this.setState修改数据变化,首先将setState传进来的数据存放到 pending 列表中
// 2、判断是否是批量更新,是的话,就将当前组件存放到 dirtyComponents(脏组件数组中)。
// 否的话,就将直接更新当前组件的 update(直接更新dom操作),遍历所有的 dirtyComponents(脏组件)执行他们的update方法(直接更新dom操作)
// 是的情况下一般是同步,把所有的组件存起来,否的一般是异步情况,因为同步走完了会更新批量为false

// express 
// 基本流程 get等 use listen  
// 1、首先是路由 每一层router 都用Layer创建，第一个参数是路径,第二个参数是处理函数 router.dispatch(每个router 存放着当前路由的所有处理) 将他们存放起来
// 2、每一层的router 每一次实例的router(layer.router)存放自己  用来去获取当前一层的处理函数和是否是use(use 这一层的router是undefined) 遍历所有的请求methods 只要是某一个请求方式 第一个是路径参数  后面的都是处理函数   获取他所有的处理函数 遍历每一个  都创建一个layer实例 第一个参数是 路径  第二个参数是遍历的单个函数 然后push到当前的stack中。当前类有一个dispatch方法 就是遍历执行所有的 stack 保存的函数
// 3、listen 在执行  创建 Http.createServer的时候  开始遍历(handle) 执行第一个router 里的所有stack存储的函数,执行完成后 调用next 在取第二个router 就这样依次执行
// 4、use 和 路由 其实差不多 区别就是 每一层实例的router保存的值不一样 做区别,use是undefined 路由则是每一层的处理函数 use和路由一样 同样是用 Layer创建的 当没有二级中间件的时候 path(路径)就是/,有二级中间件的时候 path就是第一个参数,创建好之后 同样放入到当前实例的stack中,在遍历的时候 就通过layer.router下面是否有值判断是中间件还是路由


// 子路由系統
// express.Router() 内部会返回一个router实例 他和express()返回的是一样的 前者是通过函数返回  后者是通过 原型链 构造，Object.setPrototypeOf(fn,{})主要是通过这个api,将对象挂载到函数的原型链上
// 返回的实例 同时具备use get等方法 二级路由 就是通过app.use('/xxx',子路由实例)
/**
 * A 函数new 和 直接执行 原型链都一样
 * function A(){
 *  function b(){
 *  }
 *  Object.setPrototypeOf(b,proto)
 *  return b 
 * }
 * let proto = Object.create(null)
 * proto.a= ()=>{}
*/

// 路径参数处理
// 1、他会通过下面的库 在匹配路径的时候 他会提取:后面的key值 在匹配传递过来的路径 进行一一对应 挂载到params对象上
// 2、匹配到路径 处理函数的时候  会拦截处理 遍历是否有 路径参数 对应的函数 会一个一个的遍历执行 同时他也是通过 中间件的形式一个个执行 这个时候 我们可以在req对象上挂载东西
/*
  path-to-regexp 这个库是通过路径 来提取正则
  let pathToRegexp = require('path-to-regexp')
  let path = '/user/:uid/:name';
  let keys = []

  function pathToRegexp(path, keys) {
    return path.replace(/\:([^\/]+)/g, ($1, $2, $3) => {
      console.log('===>',$1,$2,$3)
      keys.push({
        name: $2,
        optional:$3,// 偏移量
        replace: false
      })
      return '([^\/]+)'
    })
  }

  let rs = pathToRegexp(path, keys)
  let str = '/user/123/wew'
  let a = rs.exec(str)
  console.log(keys,a)
*/

// 模板引擎
// app.set('view engine',path.resolve(__dirname, 'views')) 用来设置 模板文件的位子
// app.set('view engine', 'html') 这个是用来设置模板文件的后缀格式
// app.engine('html', ejs) 这个 设置html 结尾的 就用ejs 模板进行渲染 ejs是一个函数

// 中间件 格式 use 传入一个函数 参数分别是req,res,next
/*
  app.use(function(req, res, next) {
    let { pathname } = url.parse(req.url)
    req.path = pathname
    next()
  })
*/

// static中间件 静态目录
/*
function static(){
  function(req, res, next) {
    let staticPath = path.join(p, req.url)
    let exists = fs.existsSync(staticPath)
    if (exists) {
      let html = fs.readFile(staticPath, (err, item) => {
        res.setHeader('Content-Type', 'text/html')
        // res.setHeader('Content-type', 'image/gif')
        res.end(item)
      })
    } else {
      next()
    }
  }
}
*/

// bodyParser 请求的参数解析
/*
function bodyParser() {
  return function(req, res, next) {
    let rs = []
    req.on('data', function(data) {
      rs += data
    })
    req.on('end', function(data) {
      try {
        req.body = JSON.parse(rs)
      } catch (e) {
        req.body = require('querystring').parse(rs)
      }
      next()
    })
  }
};
*/

// ejs 单个渲染原理
// let str = `hello <%=name%> world <%=age%>`;
// let options = { name: 'zdpx', age: 9 }

// function render(str, options) {
//   return str.replace(/<%=(\w+)%>?/g, ($0, $1, $2, $3) => {
//     return options[$1]
//   })
// }

// let rs = render(str, options)
// console.log(rs)

// ejs if渲染原理
// let options = { user: { name: 'zdpx', age: 9 }, total: 5 }
// let str = `
// <%if(user){%>
//   hello '<%=user.name%>'
// <%}else{%>
//   hi guest
// <%}%>
// <ul>
// <%for(let i=0;i<total;i++){%>
//   <li><%=i%></li>
// <%}%>
// </ul>
// `

// function render(str, options) {
//   let head = "let tpl = ``;\n with(obj){ \n tpl+=` "
//   str = str.replace(/<%=([\s\S]+?)%>/g, function() {
//     return "${" + arguments[1] + "}"
//   })
//   str = str.replace(/<%([\s\S]+?)%>/g, function() {
//     return "`;\n" + arguments[1] + "\n;tpl+=`";
//   })
//   let tail = "`} \n return tpl;"
//   let html = head + str + tail;
//   console.log('html=>', html)
//   let fn = new Function('obj', html)
//   return fn(options)
// }

// let rs = render(str, options)
// console.log(rs)



