function Promise(executor){
  let self = this;
  self.status = 'pending'
  self.rs = ''
  this.onResolvecb = []
  this.onRejectcb = []
  function resolve(value){
    if(self.status === 'pending'){
      self.status = 'resolved'
      self.rs = value
      self.onResolvecb.forEach(item=>{
        item()
      })
    }
  }
  function reject(reason){
    if(self.status === 'pending'){
      self.status = 'rejected'
      self.rs = reason
      self.onRejectcb.forEach(item=>{
        item()
      })
    }
  }
  executor(resolve,reject)
}

Promise.prototype.then = function(onFulfilled,onRejected){
  onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function (value) {
    return value
  };
  onRejected = typeof onRejected == 'function' ? onRejected : function (value) {
    throw value
  };
  let self = this;
  let promise2 = new Promise((resolve,reject)=>{
    if(self.status === 'resolved'){
      setTimeout(()=>{
        try{
          let x = onFulfilled(self.rs)
          resolve(x)
        }catch(err){
          reject(err)
        }
      })
    }
    if(self.status === 'rejected'){
      setTimeout(()=>{
          try{
            let x = onRejected(self.rs)
            resolve(x)
          }catch(err){
            reject(err)
          }
      })
    }
    if(self.status === 'pending'){
      self.onResolvecb.push(function(){
      setTimeout(()=>{
        try{
          let x = onFulfilled(self.rs)
            resolve(x)
        }catch(err){
          reject(err)
        }
      })
        
      })
      self.onRejectcb.push(function(){
      setTimeout(()=>{
        try{
          let x = onRejected(self.rs)
          resolve(x)
        }catch(err){
          reject(err)
        }
      })
        
      })
    }
  })
  return promise2
}

module.exports = Promise