// // 深拷贝
// function deepClone (obj){
//   if(typeof obj !== 'object' || obj === null) return obj;
//   if(obj instanceof Date) return new Date(obj);
//   if(obj instanceof RegExp) return new RegExp(obj);
//   let newObj = obj.constructor()
  
//   for(let k in obj){
//     newObj = deepClone(obj[k])
//   }
//   return newObj
// }

// // call
// Function.prototype.mycall = function(context,...args){
//   context = Object(context)?Object(context):window;
//   context.fn = this
//   let rs = eval(`context.fn(${args})`) 
//   delete context.fn
// }

// // mybind
// Function.prototype.mybind = function(context,...args){
//   context = Object(context)?Object(context):window;
//   let arg1 = [...args]
//   let that = this
//   function F(){}
//   F.prototype = this.prototype
//   function bFound(){
//     let ags2 = Array.prototype.slice.call(arguments)
//     return that.apply(this instanceof bFound?this:context,arg1.concat(args2))
//   }
//   bFound.prototype = new F()
//   return bFound
// }

// 数组打乱
// function Fn(arr){
//   let len = arr.length
//   for(let i=0;i<len;i++){
//     let index =  Math.round(Math.random()*(len-i)+i);
//     // let index = i + Math.floor(Math.random() * (len - i));
//     // console.log(index)
//     [arr[i] , arr[index]] = [arr[index] , arr[i]] 
//   }
//   return arr
// }
// console.log(Fn([1, 2, 3, 4, 5, 6]))

// Promise.prototype.finally = function(cb){
//   return new Promise((data)=>{
//     return Promise.resolve(cb()).then(()=>data)
//   },(err)=>{
//     return Promise.resolve(cb()).then(()=>{throw err})
//   })
// }

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

// let dispatch = app.middlewares.reduce((a,b)=>(...args)=>a(()=>b(...args)))
// dispatch(()=>{})


// let rs = [1, 2, 3].map(item => item * 2)

// Array.prototype.myMap = function(cb){
//    return this.reduce((a,b)=>{
//     a.push(cb(b))
//     return a
//    },[])
// }

// let rs1 = [1, 2, 3].myMap(item => item * 2)
// console.log(rs1)

// function _add(a,b,c,d,e){
//   return a+b+c+d+e
// }
// function fn(_add,...args){
//   return args.length<_add.length?(...innerArgs)=>fn(_add,...args,...innerArgs):_add(...args)
// }
 
// add = fn(_add)

// let arr = [
//   [1],
//   [2, 3],
//   [4, 5, 6, [7, 8, [9, 10, [11]]]],
//   12
// ];

// let ts = arr.flat(100)
// console.log(ts)

// let rs = arr.toString().split(',')
// console.log(rs)

// while(arr.every(item=>Array.isArray(item))){
//   console.log('----')
//   arr = [].concat(...arr)
// }


// let a = {
//   i:0,
//   toString(){
//     return ++this.i
//   }
// }
// let a = [1,2,3]
// a.toString = a.shift
// let rs = a == 1 && a == 2 && a == 3
// console.log(rs)


// let obj = { 
//   a: 1, 
//   b: { c: 2 }, 
//   d: [1, 2, 3], 
//   e: [{ f: [4, 5, 6] }] 
// };

// function parse(obj,str){
//   str = str.replace(/\[(\d+)\]/g,($0,$1)=>`.${$1}`)
//   str = str.split('.')
//   for(let key of str){
//     obj = obj[key]
//   }
//   return obj
// }


// let r1 = parse(obj, 'a');// = 1;
// let r2 = parse(obj, 'b.c');// = 2;
// let r3 = parse(obj, 'd[2]');// = 3;
// let r4 = parse(obj, 'e[0].f[0]');// = 4;

// console.log(r1,r2,r3,r4)

// 防抖
function fn(fn,await){
  let timeout;
  return function(){
    timeout = setTimeout(() => {
      fn()
    }, await);
  }
}

// 节流
function fn(Fn,await){
  let pre = null;
  return function(){
    let now = new now()
    if(now-pre > await){
      fn()
      pre = now
    }
  }
}