/*
  BOM 浏览器对象模型,BOM提供了很多对象,用于访问浏览器功能,但与网页没有任何关系
  1、全局作用域
    核心是window 在网页中定义的任何一个对象遍历,都是以window作为其global对象
    在全局作用域定于了一个变量age和一个函数,他们会被自动归在window对象名下,可以通过window.变量&&window.函数 进行访问
    定义全局变量与window对象上直接定义属性区别
      全局变量不能通过delete操作符删除 直接在window对象上定义是可以删除
      用var语句添加window属性有一个特性 他的值为false 因此这样定义不可以通过delete操作符号删除
      var age = 1;
      window.color = 'red'
      delete window.age
      delete window.color
      console.log(window.age,window.color)

      Object.defineProperty(xx,value,{
        configurable:false,//表示对象的该属性是否可以被删除，以及其他特性是否可以被修改
        enumerable:false,//当定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举
        value:undefined,//默认值
        writable:false//是否可以被赋值(以上默认值都是false)
      })

      尝试未访问的变量会报错,但是通过查询window对象,可以知道某个为声明的变量是否存在,window下查不到会返回undefined
  2、窗口位置
      表示窗口相对屏幕左边和上边的位子,以下方法注意浏览器可视区域工具栏的像素高度
        screenLeft/screenTop(除了火狐都支持)
        screenX/screenY(火狐支持)
      兼容 var leftPos = (typeof window.screenLeft == 'number')?window.screenLeft:window.screenX

    moveTo和moveBy 可以挪动到一个新的位子
    moveTo接收新的位子xy 
    moveBy接收的是水平和垂直方向上移动的像素(暂时没有测试出来，只对最外层window对象使用)
    
    窗口大小
    window.innerWidth/innerHeight //表示页面视图区域(减去边框)
    window.outerWidth/outerHeight //返回浏览器窗口本身的尺寸

    document.body.clientHeight/clientWidth  
    document.documentElement.clientHeight/clientWidth 页面的视图区域(同innerWidth 即页面的高宽)

    打开新窗口
      第二个参数 判断打开的若是一个新的窗口 即会按照第三个参数默认打开,如不打开新窗口就删除第三个参数配置(width,height最小100)
      第二个参数 对应a标签的target 若页面有target值的页面打开 open 会在这个页面替换url加载 否则就按照后面的值重新打开 _self _parent _top _blank
    var newDom = window.open("http://www.baidu.com",'_parent',"height=400,width=400,top=100,left=100")
    newDom.resizeTo(500,500)// 调整大小
    newDom.moveTo(500,500)// 移动位置
    newDom.close()//关闭窗口
    newDom.opener//指向原来的window
    window.open 此方式在ie一些浏览器被屏蔽 在谷歌上非用户操作的 会拦截并且在窗口提示,是用户操作的可以
        检查window.open 是否被屏蔽
          var FLAG = false
          try{
            var d1 = window.open("https://www.baidu.com",'x',"height=400,width=400,top=200,left=120")
            if(d1 ==null){
              FLAG = true
            }
          }catch(err){
              FLAG = true
          }
          console.log('==>',FLAG)
  3、系统对话框
    alert()  紧 弹出内容 
    confirm() 弹出内容 有确定和取消 会有返回值
    prompt() 有输入框  确定后 会返回返回值
    window.print()  显示 打印对话框
  4、location
    let url='https://www.baidu.com:443/sss?a=1&b=2#contents'
    hash #contents(#包含)
    host www.baidu.com443(返回服务器名称和端口号,端口号如果有的话)
    hostname  www.baidu.com(返回服务器名称不带端口号)
    href https://www.baidu.com:443/sss?a=1&b=2#contents 返回完整的url
    pathname /sss (返回目录或者文件名)
    post 443
    protocol https: (返回协议)
    search ?a=1&b=2#contents(包含?)
    reload() 重新加载  (true)从服务器重新加载
    */
