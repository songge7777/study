/*
  事件类型
    鼠标事件
      click 点击
      dbclick 双击
      mousedown  按下
      mouseup    抬起
      mousemove  移动
      会传给子元素
      mouseover  移入
      mouseout   移除
      不会传给子元素
      mouseenter 移入 
      mouseleave 移出
    鼠标坐标  
      event.clientX/event.clientY
      坐标根据可视区左上角进行
    事件源
    
      event.target(他是一个属性)
      触发事件的元素
      dom.matches('选择器')=>event.target.matches
      判断选择器是否是对象里面得的
    键盘事件
      event.keycode 按下那个键返回这个键对应的unicode
      
      event.ctrlkey   事件发生的时候 ctrl是否被按下去了  是则true 否则false
      event.shiftkey  事件发生的时候 shif是否被按下去了  是则true 否则false
      event.altkey    事件发生的时候 alt是否被按下去了  是则true 否则false

      keydown  当键盘按下去的时候就会触发 如果不抬起 这个事件会一直触发
      keyup    抬起
      keypress 当键盘按下字母数字或者标点符号就会触发这个

    焦点事件
      focus 有焦点事件的元素获取焦点就会触发
      blur  失去
      tabindex  用来更改tab键切换顺序
      使用 dom.focus()  dom.blur()

    事件绑定与移出
      on
        dom.on事件名 = 函数
        on只能添加一个，多个会覆盖
      addEventlistener
        dom.addEventlistener(事件名称,函数a(event),boolean)
        function a(e){
          console.log(e)
        }
        函数里面的参数event(event点击事件源,可以不写,要写只能是他) 即是事件event
        注意:当事件为mousemove 的话不能传参也不能加()写函数名即可 ：传参导致程序只能执行一次不行连续执行

        boolean 
          为true   捕获
          为false  冒泡(默认)
    移出
      on
        dom.on事件名 = null
      addEventlistener
        dom.removeEventlistener(事件名称,函数名字,boolean)
        不能移出addEventlistener添加的匿名函数
        只能移出同一阶段的绑定函数

    阻止事件冒泡
      非IE:event.stopPropagation() 不会往上层传递
      IE:event.cancelBubble= true
    
    阻止浏览器默认行为
      on
        在函数里面写return false
      addEventlistener
        event.preventDefault()
    
    拖拽原理

*/