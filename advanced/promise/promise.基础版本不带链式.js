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
        item(self.rs)
      })
    }
  }
  function reject(reason){
    if(self.status === 'pending'){
      self.status = 'rejected'
      self.rs = reason
      self.onRejectcb.forEach(item=>{
        item(self.rs)
      })
    }
  }
  executor(resolve,reject)
}

Promise.prototype.then = function(onFulfilled,onRejected){
  let self = this;
  if(self.status === 'resolved'){
    onFulfilled(self.rs)
  }
  if(self.status === 'rejected'){
    onRejected(self.rs)
  }
  if(self.status === 'pending'){
    self.onResolvecb.push(onFulfilled)
    self.onRejectcb.push(onRejected)
  }
}

module.exports = Promise