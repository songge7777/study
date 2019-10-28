let app = {};
app.middlewares = [];
app.use = function (cb){
  app.middlewares.push(cb)
}

app.use((next)=>{
  console.log(1)
  next()
  console.log(2)
})

app.use((next)=>{
  console.log(3)
  next()
  console.log(4)
})

// 第一种
function dispatch(index){
  if(index === app.middlewares.length) return ()=>{};
  let route = app.middlewares[index];//第一次的中间件
  route(()=>dispatch(index+1));                                                                                 
}
dispatch(0)

// 第二种
let fn = app.middlewares.reduceRight((a,b)=>{
  return ()=>b(a)
},()=>{})
let fn = app.middlewares.reduceRight((a,b)=>()=>b(a),()=>{})
fn()

// 第三种
let fn = app.middlewares.reduce((a,b)=>{
  return function(...args){
    return a(()=>b(...args))
  }
})
fn(()=>{})