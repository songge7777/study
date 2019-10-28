function Promise(executor) {
  let self = this;
  self.status = 'pending'
  self.rs = ''
  this.onResolvecb = []
  this.onRejectcb = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.rs = value
      self.onResolvecb.forEach(item => {
        item()
      })
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.rs = reason
      self.onRejectcb.forEach(item => {
        item()
      })
    }
  }
  try{ // 处理在new的时候 报错
    executor(resolve, reject)
  }catch(err){
    reject(err)
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用'));
  }
  let then, called;// called用来防止不规范的promise 表示当前有没有被调用 类似之前的pending
  // 判断x是一个引用类型  当前我们的promise是object  判断function是兼容别人写的promise
  if (x != null && ((typeof x == 'object' || typeof x == 'function'))) {
    try { // try 防止在取then的时候出异常  then里面 可能有getter
      then = x.then; // 这里也是防止getter 获取一次 进行处理
      if (typeof then == 'function') {
        then.call(x, function (y) { //y有可能还是一个promise 要进行递归  一直解析 直到结果是一个常量
          if (called)return; // 给别人的promise增加的逻辑 如果没调用过 就是 fasle 直接拦截掉
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, function (r) {
          if (called)return; // 如果没调用过 就是 fasle 直接拦截掉
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called)return; // 如果失败了 就不能在掉成功
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  // 判断是处理 值的穿透
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function (value) {
    return value
  };
  // throw 要在代码快里面
  onRejected = typeof onRejected == 'function' ? onRejected : function (value) {
    throw value
  };
  let promise2 = new Promise((resolve, reject) => {
    if (self.status === 'resolved') {
      setTimeout(() => { //这里的定时器 是为了拿到当前创建的promise2
        try {
          let x = onFulfilled(self.rs)
          // resolve(x)
          resolvePromise(promise2,x,resolve,reject)
        } catch (err) {
          reject(err)
        }
      })
    }
    if (self.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(self.rs)
          // resolve(x)
          resolvePromise(promise2,x,resolve,reject)
        } catch (err) {
          reject(err)
        }
      })
    }
    if (self.status === 'pending') {
      self.onResolvecb.push(function () {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.rs)
            resolvePromise(promise2,x,resolve,reject)
            // resolve(x)
          } catch (err) {
            reject(err)
          }
        })

      })
      self.onRejectcb.push(function () {
        setTimeout(() => {
          try {
            let x = onRejected(self.rs)
            resolvePromise(promise2,x,resolve,reject)
            // resolve(x)
          } catch (err) {
            reject(err)
          }
        })

      })
    }
  })
  return promise2
}
Promise.prototype.catch = function (err){
  return this.then(null,err)
};
// Promise.prototype.done = function(resolve,reject){
//   this.then(resolve,reject).catch((reson)=>{
//     serTimeout(()=>{
//       throw reson
//     },0)
//   })
// }
Promise.reject = function(data){
    return new Promise((resolve,reject)=>{
      reject(data)
    })
}
Promise.resolve = function(data){
  return new Promise((resolve,reject)=>{
    resolve(data)
  })
}
Promise.prototype.finally = function(cb){
  return this.then((data)=>{
    return Promise.resolve(cb()).then(()=>data)
  },(reason)=>{
    return Promise.resolce(cb()).then(()=>{
      throw data
    })
  })
}

Promise.all = function(promises){
  return new Promise((resolve,reject)=>{
    let rs = []
    let index=0;
    function processData(data){
      index++;
      rs.push(data)
      if(index==promises.length){
        resolve(rs)
      }
    }
    for(let i=0;i<promises.length;i++){
      promises[i].then(data=>{
        processData(data)
      },reject)
    }
  })
}
Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    promises.forEach(item=>{
      item.then(data=>{
        resolve(data)
      })
    })
  })
}
Promise.defer = function(){
  let dfd = {}
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
module.exports = Promise
