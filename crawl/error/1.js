// function go(){
//   try{
//     // throw new Error('worng')
//     console.log(a)
//   }catch(e){
//     console.log('err',e)
//   }
// }
// go()
// setTimeout(()=>{
//   console.log('xxxxxxxxxx')
// },1000)

// 监听 uncaughtException 可以捕获哪些没有try catch的异步捕获之后则系统将不会在退出
process.on('uncaughtException',(err)=>{
  console.log('uncaughtException',err.stack)
})
function go(){
  try{
    setTimeout(()=>{
      console.log('xxxxxxxxxx',a)
    },1000)
  }catch(e){
    console.log('err',e)
  }
}
go()

setTimeout(()=>{
  console.log('okkkkkkkkkkk')
},3000)

