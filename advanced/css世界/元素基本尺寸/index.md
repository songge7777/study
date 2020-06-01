# 元素

## 块级元素
- 常见的div、li、table 
- 设置 display:'table'/'block'/'list-item'(list-item会出现不需要的符号)
- 特点 水平流上只能单独显示一个元素,多个块级元素换行
- 换行特性用来clear浮动
```css
.clear:after{
  content:'';
  display:'table';  
  clear:'both'
}
```
## width
- width:auto
### 外部尺寸
- 1、块级元素的流动性,一般情况不设置width:100%,块级元素会自动铺满整个盒子空间,如果设置了会限制他的流动性
- 2、绝对定位模型,在position设置为absolute或fixed的时候,宽度由内部尺寸决定
  - `div{position:absolute;left:20px;right:20px}` 父级宽度为1000px的情况下，这个div的宽度就为960px
### 内部尺寸
- 当元素内没有内容,宽度为0即是
- 1、包裹性,元素由内部决定但永远小于包含块容器(display:inline-block),带表性的元素button
- 2、作用如下,当文字少的时候居中显示,文字超过一行的时候居左显示(为什么文字少的时候不左了,因为line元素的宽度就是其本身)
```html
  <style>
    div{
      width: 240px;
      margin: 10px auto;
      text-align: center;
      background: red;
    }  
    p{
      display: inline-block;
      text-align: left;
    }  
  </style>
    <div>
      <p>我的阿阿打算</p>
      <p>我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算我的阿打算</p>
    </div>
```
### 盒子模型
- box-sizing 设置盒子模型 值content-box/border-box,border-box包含border和padding的宽度

## height
- 让height:100% 生效有2中办法
```css
/* 父级都设置高度 */
html,body{
  height:100%
}
/* 使用绝对定位 */
div{
  position:absolute,
  height:100%
}
```
- 绝对定位和非绝对定位高宽使用百分比区别,前者相对padding box,进行计算的,后者相对content box进行计算的
```js
  <style>
    .box{
      width: 300px;
      height: 160px;
      padding: 30px;
      box-sizing: border-box;
      background-color: red;
      position: relative;
    }
    .child{
      width: 300px;
      height: 100%;
      background: springgreen;
      position: absolute;
    }
  </style>
<body>
  <div class="box">
    <div class="child">
    </div>
  </div>
</body>
```
- max-height 超越 !important
- min-width覆盖max-width 优先级高(min-width:1400px max-width:1200px,max-width失效)
```html
  <style>
    .box{
      width: 100px!important;
      background:red;
      height: 100px;
    }
  </style>
  <div class="box" style="max-width:50px">
  </div>
```
## 内联元素
- 特点：1、display设置为inline或者inline-block，2、他和文字在一行显示