
function a(...args){
  console.log(this,args)
}

Function.prototype.myCall = function(context){
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i=1;i<arguments.length;i++){
    args.push(`arguments[${i}]`)
  }
  // 利用toString 的特性
  let r = eval('context.fn('+args+')')
  delete context.fn;  
  return r
}
Function.prototype.myApply = function(context,args){
  context = context ? Object(context) : window;
  context.fn = this;
  if(!args){
    return context.fn()
  }
  let r = eval('context.fn('+args+')')
  delete context.fn;  
  return r
}

//  1、bind 方法可以绑定this指向
//  2、bind 方法返回一个绑定后的函数(高级函数)
//  3、如果绑定的函数被new了 当前函数的this就是当前的实例
Function.prototype.myBind = function(context){
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments,1)
  function Fn(){} 
  function fBound(){
    let args = Array.prototype.slice.call(arguments);
    return that.apply(this instanceof fBound ? this: context,bindArgs.concat(args)) 
  }
  Fn.prototype = this.prototype;
  fBound.prototype = new Fn()
  return fBound
}

// a.call({},1,2,3)
// a.myCall('hello',1,2,3)
// a.call('hello',1,2,3)
// a.myApply('hello',[1,2,3])
a.apply('hello',[1,2,3])


let a =[1,2,3].slice(1)
console.log(a)