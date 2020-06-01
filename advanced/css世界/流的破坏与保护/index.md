# float
- 特性
  - 包裹性
    - 包裹性 div包裹一个img 浮动元素  那么div的宽度就是img的宽度
    - 自适应 在包裹性的基础上 img后面有一堆文字(中文,英文不行),此时的div宽度就是200px
  - 块状化格式化上下文
    - 元素一旦float的属性不为none，则其display计算值就是block或者table,同时设置vertical-align 也是没用的，他只在内联元素中起作用,text-align也是对块级作用无效
  - 破坏文档流
  - 没有任何margin合并
```html
<!-- 包裹性 -->
  <style>
    .father{
      width: 200px;
    }
    .float{
      float: left;
    }
    img{
      width: 128px;
    }
  </style>
  <div class="father">
    <div class="float">
      <img src="./2.jpg" alt="">
    </div>
  </div>
  <!-- 自适应 -->
  <div class="father">
    <div class="float">
      <img src="./2.jpg" alt="">你阿萨德阿打算阿萨德as你阿萨德阿打算阿萨德as
    </div>
  </div>
```
## 自适应布局
- 一侧固定一侧自适应,通过margin-left
- 如果是不固定的也可以
```html
  <!-- 固定 -->
  <style>
    .father{
      width: 200px;
      overflow: hidden;
    }
    img{
      width: 60px;
      height: 64px;
      float: left;
    }
    .animal{
      margin-left: 70px;
    }
  </style>
  <div class="father">
    <img src="./2.jpg" alt="">
    <p class="animal">小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，</p>
  </div>
  <!-- 不固定 -->
  <style>
  .left{
    float:left;
    width:50%
  }
  .right{
    margin-left:50%
  }
  </style>
```
## clear
- clear属性只有块级元素才有效,而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动需要设置display的原因
- clear:both的本质让自己不和float元素在一行显示，并不是真正意义上的清除浮动
  - 同时 1、在这里 设置margin-top:-9999也是没有变化的
  - 2、clear:both 后面的元素依旧可以能会发生文字环绕的现象
```css
.clear:after{
  content:'';
  display:block;
  clear:both;
  margin-top: -999px;
}
```

```html
  <style>
    .father{
      width: 200px;
    }
    .clear:after{
      content:'';
      display: block;
      clear:both;
      margin-top: -7000000000000px;
    }
    img{
      width: 60px;
      height: 64px;
      float: left;
    }
    .animal{
    }
  </style>
  <div class="father ">
    <img src="./2.jpg" alt="">
    <p class="animal">小猫1，小猫1，</p>
    <p class="clear">小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1</p>
    小猫1，小猫1，小猫1，小猫1，小猫1，小猫1，小猫1
  </div>
```
## BFC
- BFC不会发生margin重叠,BFC可以清除浮动元素
- 触发条件
  - <html>根元素
  - float的值不为none
  - overflow 值为auto，scroll或hidden
  - display的值为table-cell,table-caption和inline-block中的任何一个
  - position的值不为relative和static
## 最佳结界overflow
- 要想彻底清除浮动的影响,最合适的属性不是clear，而是overflow，一般使用overflow:hidden
- overflow本质工作是裁剪,当子元素超出容器宽度高度限制的时候,裁剪的编辑是border box,而非padding box
- 在html中有两个标签默认是可以产生滚动条的,根元素<html>和<textarea>,这两个标签的overflow默认属性是auto
## 绝对定位
- 无依赖的绝对定位，absolute是非常独立的css属性值,其样式和行为表现不依赖其他任何css属性就可以完成
## absolute流体特性
- 当一个绝对定位元素，其对立定位方向属性同时有具体的数值的时候(top-bottom)，流体特性就发生了
```html
<style>
.box{
  position:absolute;
  left:0;
  right:0
}
</style>
<div class='box'></div>
```
## 层叠关系
- 发生层叠的时候  覆盖关系2条准则
  - 谁大谁上 z-index 谁大就显示谁
  - 后来居上 后面的dom会覆盖前面的dom
