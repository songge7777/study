
let Promise = require('./promise.js')
let p = new Promise((resolve,reject)=>{
  // setTimeout(()=>{
  //   reject('222')
  // },1000)
  // console.log('start')
  resolve('111')
})

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('11')
//   },10200)
// })

// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('22')
//   },2000)
// })

// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('33')
//   },3000)
// })

// Promise.all([p1,p2,p3]).then(data=>{
//   console.log('data',data)
// })

// Promise.race([p1,p2,p3]).then(data=>{
//   console.log('data',data)
// })

// 循环引用
let p1 =  p.then((data)=>{
  console.log('success',data)
  throw '123'
  // return '11as'
},(data)=>{
  console.log('err',data)
})
.then()
.then((data)=>{
  console.log(data)
},(err)=>{
  console.log(err)
})
.then((data)=>{
  console.log(data)
},(err)=>{
  console.log(err)
})
// .catch(err=>{
//   console.log('err',err)
// })
// .done((data)=>{
//   console.log('done',data)
// })
// p1.then(()=>{},(err)=>{
//   console.log('err',err)
// })

// finally
// let p1 =  p.then((data)=>{
//   console.log('success',data)
//   // throw '123'
//   return 1
// },(data)=>{
//   console.log('err',data)
// })
// finally 不管前面咋样 都会走到这儿
// .finally((data)=>{
//   console.log('finally',data)
// })
// .then(data=>{
//   console.log('datadone',data)
// },data=>{
//   console.log('errdone',data)
// })

