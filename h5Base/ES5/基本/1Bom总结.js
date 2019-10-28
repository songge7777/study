
/*
  window(浏览器对象)
    location(即是window下的也是document下的 引用同一个对象))
      属性
      1、location.href
        'http://www.wrox.com'
        获取当前完整的 URL,若是给他赋值则是跳转地址
        location.toString()等同
        设置跳转
          location.href = '地址'
          window.location = '地址'
          location.assign('地址')他是一个方法
      2、location.hash
        '#contents'
        设置或返回 url井号及其后面字符串 (#,包括他) 
          设置的时候 自带#
      3、search
        '?q=123&w=33'
        设置或返回从问号 (?) 开始的 URL末尾
          设置的时候 自带? 通常用&作为连接符
      4、host
        'www.weox.com:80'
        设置或返回主机名和当前 URL 的端口号
      5、hostname
        'www.weox.com'
        设置或返回当前 URL 的主机名
      6、pathname
        '/sss/'
        设置或返回当前 URL 的路径部分
      7、port
        '80'
        设置或返回当前 URL 的端口号
      8、protocol
        'http:'
        设置或返回当前 URL 的协议
      每次修改location属性(hash除外),页面都会以新URL重新加载,可以通过后退按钮到前一个页面
      方法
      replace('跳转地址') 不能通过后退按钮到前一个页面
      reload() 重新加载当前文档,可能从缓存中,参数为true,从服务器上加载
    opener
      获取得到当前窗口是谁打开的并且返回这个窗口的window对象,跨域情况不可以拿到
    open()
      参数 
        1、要打开的新网页地址
        2、打开的方式_blank,_self
        3、打开新窗口的一些信息
    设置浏览器默认初始状态,默认打开的时候是被禁止的
      window.moveTo(a,b)
      window.resizeTo(a,b)
    但是再次打开可以使用
      //变量a为打开的新页面
      var a = window.open('www.....','窗口名称','height=400,width=400,top=10,left=10')
      //调整大小 会覆盖上面 400 400
      a.resizeTo(500,500)
      //移动位子 会覆盖上面 10 10
      a.moveTo(100,100)
      // 关闭
      a.close()
      //用a.closed 来检查是否关闭, ture是,false没有
      alert(a.closed)
      //a.opener 返回值为新开页面的window
      a.opener === window 
      a.opener = null 即打开的页面与之前页面终端联系,不能通信,无法恢复
      //检查新窗口是否被浏览器屏蔽
      a == null 即被屏蔽掉

    alert() confirm() propmt()
    alert 仅仅弹出一个提示
    confirm('提示...') 有返回值,ok返回true,cancel返回false
    prompt('提示...','默认输入的值') 取消返回值为null  否则返回值就是输入的值


    Navigator 对象包含有关浏览器的信息
      userAgent 返回由客户机发送服务器的 user-agent 头部的值。
    检测插件
    navugator.plugins(是一个数组,数组下面.name是插件名字) 

    history对象
      history对象保存着用户上网的历史纪录,从窗口被打开的那一刻算起
      //后退一页 参数为数字代表 几页  正负代表 前进 后退 
      history.go(-1) //history.back() 后退
      //前进一页 参数为字符串,跳到历记录中包含该字符串的第一个位子(可能前进,可能后退,若没有不则不动)
      history.go(1) //history.forward() 前进
      history.length //保存着历史纪录的数量(所有的,第一个页面 为 0)
    

    可视区宽/高
      DOM
        document.documentElement.clientWidth
        document.documentElement.clientWidth
        值为可视窗口内部大小，不包括工具栏和水平或垂直滚动条
      BOM(不兼容低版本,IE9及以上)
        window.innerWidth
        window.innerHeight
        值也是可视窗口内部大小加上滚动条宽度
        window.outerWidth/Height
        值是可视窗口整体大小，包括工具栏和滚动条 
    滚动条的距离
      DOM
        document.body.scrollTop     (谷歌,测试的有问题)
        document.body.scrollLeft         (谷歌)
        document.documentElement.scrollTop(其他)
        document.documentElement.scrollLeft(其他)
      BOM
        window.pageYOffset  
        window.pageXOffset  
    设置滚动条的距离
      window.scrollTo(X,Y)
      两个参数必须同时出现
    窗口改变触发的方法
      widow.onresize = function(){

      }
    滚动条动时触发这个方法
      window.onscroll = function(){
        
      }
    
    表示窗口相对屏幕左边和上边的位子
    screenLeft和screenTop (大部分,除了火狐)
    screenX和screenY(火狐,Safari和Chrome 也支持)
      处理兼容
      var left = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX
      var top = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY
*/