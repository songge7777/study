let http = require('http')
// 第三方模块 里面有很多请求的方法
let methods = require('methods');
let url = require('url')
function application() {
  function app(req,res){
    let { pathname } = url.parse(req.url,true)
    let method = req.method.toLowerCase();
    for(var i=0;i<app.routes.length;i++){
      let router = app.routes[i]
      let routerPath = router.path
      let routerMethod = router.method
      let callback = router.callback
      if(router.params.length){
        if(routerPath.test(pathname)){
          let [,...args] = pathname.match(routerPath)
          req.params = router.params.reduce((memo,key,index)=>(memo[key]=args[index],memo),{});
          return callback(req,res)
        }
      }
      if((routerPath == pathname) || (routerPath == 'all') && (routerMethod==method)||(routerMethod == '*')){
        return callback(req,res)
      }
    } 
    return res.end(`cannot ${method} ${pathname}`)
  }
  app.routes = [];
  [...methods,'all'].forEach(method=>{
    app[method] = (path,callback)=>{
      let layer = {
        path,
        method,
        callback
      }
      layer.params = [];
      if(path.includes(':')){
        console.log('path',path)
        layer.path = new RegExp(path.replace(/:([^\/]*)/g,function(){
          console.log('arguments',arguments[1])
          layer.params.push(arguments[1])
          return `([^\/]*)`
        }))
      }
      app.routes.push(layer)
    }
  })
  app.listen = (...args)=>{
    let server = http.createServer(app)
    server.listen(...args)
  }
  return app
}
module.exports = application