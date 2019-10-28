/*
  canvas 
    <canvas id="myCanvas" width="200" height="100"> 若浏览器不支持该标签，则标签里的内容会被显示出来</canvas>
      若不设置宽高,默认宽300px,高150px; 不能通过css设置

    通过JS来绘制
      1、获取画布
          let vs = document.getElementById('id')
      2、获取context对象 获得渲染上下文和他的绘画功能,返回一个具备绘画的对象
          let context = vs.getContext('2d')
      3、开始绘制 填充(默认颜色是黑色)
          context.fillRect(50,50,100,100)
          前2个是坐标 后面2个是宽高

      4、形状绘制
          //新建路径(beginPath和closePath有类似于函数花括号的作用（作用域）)
          context.beginPath()

          //绘画的起始点
          context.moveTo(x,y)
          //绘制直线 终点
          context.lineTo(x,y)
          //绘制轮廓,边框
          context.stroke()
          //填充路径,实心
          context.fill()

          //闭合路径
          context.closePath()
      5、圆形绘制
          弧度 = 角度*Math.PI/180
          context.arc(圆心X,原型Y,半径,圆弧起点,圆弧终点,旋转方向)
      6、添加样式和颜色
          context.fillStyle = '颜色值'
          context.strokeStyle = '颜色值'
          可以用颜色 单词 16进制 rgb/rgba
          context.lineWidth = 10 //设置线条的粗细,不带单位
      7、	//开了一个封闭的区间，样式只在这个区间内生效
          context.save();
          //区间结束
          context.restore();
      8、设置文字样式
          context.  (文字,x,y)
          context.font = '48px 微软雅黑' //文字大小和字体 默认10px sans-serif
          context.textAlign = 'center' 
          context.textBaseline = 'middle' //基线对齐
          context.measureText('文字').width //获得文字的宽度
*/