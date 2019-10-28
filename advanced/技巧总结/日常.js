/**
 *  1、 gitbook.events.off('page.change')  
 *      gitbook 做的网站 如果要收费  在控制台输入这个就好了
 * 
 *  2、 vue性能优化数组，常见的坑
 *      https://juejin.im/post/5c0dec8be51d451dac076f76
 * 
 *  3、面试 ：
 *       https://mp.weixin.qq.com/s?__biz=MzAwNDcyNjI3OA==&mid=2650842177&idx=1&sn=8b9d9ec6068b9c9a7d0eb363275d6e96&chksm=80d38f28b7a4063e39149e67dbe715629b306d6a0f3a9c17a8498fd24365377681ccdf6eb395&scene=0#rd
 * 
 *  4、
      99服务器 在微信网页授权 进去的时候 大概7秒
      用商务的服务器 秒进

      4g网和无限网解析的播放地址可能会不一样

      遇到递归和回调 只考虑2层不要考虑第三层

      所有与 监视 和 作用于全局的事情  代码一定要放前面 （坑过N次）
    5、
      前端规范
      https://guide.aotu.io/?from=timeline

    6、前端导出文件 引入文件
      export const a = 1 ; 
        导出单个变量  一个js文件可以有很多, 引入的时候 要么就{a}  或者 import * as obj from '...', as.a===a
      
      export default function(){
        
      } ; 整个文件只能有一个export default, 引入的时候 就直接 import obj(写啥都可以) from '...'
    
    7、 
     ...s2 是一个数组 arguments是一个类数组
    let s = s1('123','asd','是啊')
    function s1(a1,...a2){
        console.log(a1,a2,arguments)
    }
    8、
      telnet不是内部或外部命令
        进入控制面板，在列表中找到【程序】
        进入程序列表，找到【程序与功能】，点击【打开或者关闭windows功能】
        在弹出的列表中，勾选【Telnet服务器】，【Telnet客户端】，点击确定
    9、
    let a =[
        {title:'111111'},
        {title:'222222'},
        {title:'333333'},
        {title:'444444'}
      ]
      修改 title 对应的值 
      一般用map  下面有对象的  用forEach也可以
      a.forEach(item=>{
        item.title = '123'
      })
      console.log(a)
    10、
      cnpm i http-server -g
      开启一个服务  http-server
    11、
      cmd gitbash中
      可以用crul 访问浏览器地址
    12、
      put  和 delete  , get和post没有
      后端 配置 localhost:7001/user 请求路径
      前端请求  localhost:7001/user/123 的时候 
      console.log(ctx.params) //{id:123} id默认的

      get 等提交的参数
      localhost:7001/user?id=123&a=111
      console.log(ctx.query) //{id:123,a:111} 

      post 等提交的参数
      ctx.request.body
    13、
      cnpm i serve -g
      打包的静态文件 用他启动
      serve ./xxx
    14、
      function A(){
        A.a = 'a'
      }
      这种用法
        function A(){
          A.a='123'
          function B(){
            console.log('B')
            function run(n){
              console.log('123',n)
            }
            B.run = run
          }
          return B
        }
        let b = A()
        b() //这里拿到的B函数 要执行下B下面才有run方法 否则会报错
        console.log(b.run(12))
    15、
      function times(done,total){
        let count = 0;
        return function(){
          if(++count == total){
            done()
          }
        }
      }
      function d(){
        console.log('done')
      }
      let f = times(d,3)
      f();f();f();f();
    16、
      http-server -c-1
      开启服务 -c-1 不要缓存 
    17、
      需求 字符串里面在套引号 用JSON.stringify()
      let = `ss ${JSON.stringify('123')}`
    18、
      跨域传cookie(前后端允许情况下) 有一个前提 要主机名字一样
      localhost:8080 localhost:7001 可以
      localhost:8080 127.0.0.1:7001 不可以
      域名不一样就携带不了cookie
  */ 