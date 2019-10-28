/*
  1、事件流 从页面中接受事件的顺序
        <!DOCTYPE html>
      <html>
        <body>
          <div></div>
        </body>
      <html>

     IE 事件流为事件冒泡(点击的位子往外传递)
        点击div 触发顺序 <div>(最先接受点击事件) -> <body> -> <html> -> document 
     其他 事件流为事件捕获(事件达到预定目标之前捕获他)
        点击div 触发顺序 document(最先接受点击事件) -> <html> -> <body> ->  <div>  
      
     DOM2级事件 规定的事件流包括3阶段:事件捕获阶段、处于目标阶段、事件冒泡阶段 
  2、html事件处理程序
        <input type="button" value="click Me" onclick='alert(event.type)'>
        <input type="button" value="click Me" onclick='alert(this.value)'>
        <form action="#">
          <input type="text" name="username" value="click Me11111111" >
          <input type="button" value="click Me" onclick='alert(username.value)'>
        </form>
  3、DOM0级事件  
        将一个函数赋值给一个事件处理程序属性(属性通常是小写)
        例如:  
          绑定:dom.onclick = ()=>{}
          删除:dom.onclick = null
     DOM2级事件
        addEventListener('事件名称','处理函数','布尔值,true捕获,false冒泡(默认)')   
        removeEventListener('事件名称','处理函数,匿名的不能','布尔值,true捕获,false冒泡(默认)')

        通过addEventListener 添加的只能用removeEventListener来移除
  4、事件对象
        DOM浏览器会将一个event对象传入时间处理程序中(无论是DOM0还是DOM2),都会传如一个event
        event对象的方法
          currentTarget   事件处理程序当前正在处理事件的那个元素
          cancelable  是否可以取消事件的默认行为
          preventDefault() 取消默认事件(当cancelable为true才可以)
          stopPropagation() 取消事件的进一步捕获或者冒泡 
          target  事件目标
          type  被事件触发的类型
          eventPhase  调用事件处理程序的阶段:1表示捕获阶段，2目标阶段3，冒泡阶段
  5、事件类型
        ui事件:不一定与用户操作有有关
          load:当前页面完全加载后在window上面触发
          unload:当页面内容卸载后在window上触发
          abort:在用户停止下载过程,在<object>触发
          error:发生错误时候,在window触发
          select:当用户选择文本框中的一个或者多个字符时触发
          resize:当窗口大小变化时,在window触发
          scroll:当用户滚动内容,在该元素上面触发,
          load 用法(其他类似))
            2种定义
              在js中 
                dom.onload = function(){}
              在html中
                <body onload = 'alert('Loaded')'>
              //图片加载完成,就有显示框
                <img src='XXX.gif' onload='alert('加载完成')'>
        焦点事件
          blur 失去焦点
          focus 获取焦点,不会冒泡
          focusin 获取焦点时触发,会冒泡
          focusout 失去焦点时触发
        鼠标与滚轮事件
          鼠标事件
            click
            dblclick
            mousedown
            mouseenter(除了这两其他都是冒泡,不会传给子集,不支持事件流)
            mouseleave(除了这两其他都是冒泡,不会传给子集,不支持事件流)
            mousemove
            mouseout
            mouseover
            mouseup
            若是IE不支持上面 可以用enent.button 的值进行判断
            在页面没有滚动的时候(下面两两相等))
            event.clientX(相对浏览器视口)
            event.clientY
            event.pageY(相对于页面)
            event.pageX

            event.screentX(鼠标的坐标,相对电脑屏幕)
            event.screentY
          滚轮事件(mousewheel)
            这个事件(mousewheel)可以在任何元素上触发,最终会冒泡到document和window对象
            通过事件函数 得到 event.wheelDelta 只有2个值(一正一负),根据正负判断滑动的方向即可
            (Opera 9.5之前的版本正负是颠倒的) 

          事件顺序
            只有在一个元素上相继触发mousedown和mouseup 才会触发click,他们中有一个被取消都不会触发
            只有触发两次click事件,才触发dblclick,2次click事件有一次被阻止都不会触发
            1、mousedown 2、mouseup 3、click 4、mousedown 5、mouseup 6、click 7、dblclick
            检查浏览器是否支持 DOM2级事件
            let isSupported = document.implementation.hasFeature('MouseEvents','2.0')
            检查浏览器是否支持 DOM3级事件
            let isSupported = document.implementation.hasFeature('MouseEvent','3.0')  
          更多事件信息
            'DOM2级事件'
            e.detail 表示给定位子上发生多少次单击(如果鼠标在mousedwon和mouseup之间移动了位子,e.detail会被重置为0,说白了鼠标不能晃动)
          触摸设备
            不支持dblclick 双击浏览器窗口变大画面,而且没办法改变
            轻击可单击的元素会触发mousemove,若屏幕内容不变,则会依次触发mousedown,mouseup,click
            mousemove也会触发mouseover和mouseout
            两个手指放在屏幕上且页面随手指移动而滚动时会触发mousewhell和scroll   
        键盘事件
          keydown   按下键盘的任意键,不放手会一直触发  
          keypress  按下键盘的字符键,不放手会一直触发
          keyup     释放键盘上的键
          键值
            event.keyCode      
          字串编码
            event.charCode 只有在keypress事件才有
            获得字符编码之后,就可以使用String.fromCharCode()将其转换成实际的字符
        文本事件
          textInput 在文本插入文本框之前触发
            event.data 获取当时输入的字符
            event.inputMethod 表示文本输入到文本框的方式(只有IE才支持,返回的是一个数字,代表一些方式)
          textInput和keypress区别
            一、
            textInput 只有在编辑区域(如input、textarea)才触发 
            keypress  任何获取焦点的元素都可以触发                
            二、
            textInput 在按下字符触发
            keypress  按下退格键等也触发
        H5事件
          conextmenu    菜单事件 
          beforeunload  浏览器卸载页面之前触发
          DOMContentLoaded  window的load事件会在页面中的一切加载完毕时触发,而他在形成完整的DOM树之后就触发,
                            不理会图像,javascript文件,css文件或者其他资源是否已经加载完毕
          pageshow    这个事件在页面显示时触发
          pagehide    在页面卸载触发,而且是unload事件之前触发
          hashchange  url参数列表(url中'#'号后面的所有字符串,发生变化)
                      此时事件必须添加给window对象
                      event对象2个属性 oldURL和newURL(两属性分别保存着参数列表变化前后的完整URL)
        设备事件
          safari
          orientationchange   监控 设备有横向,纵向切换
                              event没有任何有价值的信息
                              通过window.orientation属性包含3个值
                                0 表示正常情况 
                                90表示左旋转(home按钮在右)
                                90表示右旋转(home按钮在左)
          deviceorientation   检测设备方向变化时候在window上触发
                              event对象下5个属性
                                alpha 在围绕z轴旋转时(左右旋转),y轴的度数差 0-360之间的浮点书
                                beta  在围绕x轴旋转时(左右旋转),z轴的度数差 180-180之间的浮点书
                                gamma 在围绕y轴旋转时(左右旋转),z轴的度数差 -90-90之间的浮点书
                                absolute  布尔值,表示设备是否返回一个绝对值
                                compassCalibrated 布尔值,表示设备的指南针是否校准过
          devicemotion        设备什么时候移动
        触摸事件  具体看书---------


*/