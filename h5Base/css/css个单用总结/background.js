/*
CSS2.1中有5个background属性可以用来控制元素的背景。这5个属性是：
  --background-color
  --background-image
  --background-repeat
      参数2个(x,y轴)
        repeat
        repeat-x
        repeat-y
        no-repeat
        space 两端对齐平铺
        round 两端对齐,但其多出来空间通过自身的拉伸来填充
  --background-attachment
  --background-position
      参数的值(2个,若写一个 2个都是一样) 可以是PX(正负)、百分比
      默认是padding-box,可以用center,top,bottom,right,left


在CSS3中我们可以使用三个全新的属性，如下：
  --background-origin
      有3个值 
        content-box 定位
        padding-box 定位
        border-box  定位
  --background-clip
      决定在背景区域中背景图片剪裁的位置
      content-box
      padding-box
      border-box
  --background-size
      参数2个 px 百分比 [auto]
        contain 大图变小
        cover   小图变大

  属性缩写
    background: color image repeat attachment 
                position origin clip size
  多值用,隔开,前者覆盖后者(小图放前面)
    例如
      p {
          background: 
            url (01.gif) no-repeat,    
            url (02.gif) repeat left bottom,   
            url (03.gif) repeat-y 10px 5px    
        }  
    */