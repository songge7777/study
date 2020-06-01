# 盒子尺寸
## content(替换元素)
- 何为替换元素 内容可以被修改的,如img src属性被修改,img,object,video,iframe,input,textarea,select都是，其次都是inline或者inline-block,video,iframe,canvas默认宽高300*150px,但是img默认为0
- 替换元素的尺寸计算
  -  固有尺码 拿img来讲就是图片原有的宽度
  -  html尺码 即`<img src='xx' width='' height=''>` 在标签上设置的属性
  -  css尺码 即style内设置的样式
### img 
  -  img 标签 只设置width或者height另外一个属性会成比例自动计算
  -  注意 内联替换元素和块级替换元素使用同一套计算规则，虽然图片变成块级但是尺寸还是按照内联规则表示,这就是一些替换元素变成块元素宽度没有100%的原因
### 替换元素和非替换元素
- 1、src
  - 缺少一个src,img标签没有src(img没有src的时候就是非替换元素) alt='任意属性'，设置成块元素的时候他的宽度就是100%,此时的img和span一样了
  - img 标签没有alt的时候 width是不能自动获取100%宽度只有设置 alt属性width就自动获取100%
  - img 标签在有src的时候 before等伪元素失效 当没有src的时候生效('./img.html'有个使用的例子)
```html
  <style>
    img{
      display: block;
      height: 100px;
      background: red;
    }
  </style>
  <img alt='xx'/>
```
```html
  <style>
    img{
      display:block;
      height: 100px;
      position: relative;
    }
    img::before{
      content: '123';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #f0f3f9;
    }
  </style>
<body>
  <img  alt="xx"/>
  <img src="1.jpg" alt="xx"/>
</body>
```
- 2、content
  - 技巧 伪元素换行
```css
   .test > span:first-child:after{
      content: "\A";
      white-space: pre;
    }
```

  - 在谷歌可以对样式直接设置这个属性
  - `<img src='1.jpg'>` 和`<img /> img{content:url('1jpg')}`是一样的效果
  - 同时还可以替换图片`<img src='1.jpg'/> img:hover{ content:url('2.jpg')}`  
  - 这里要注意 content只是呈现的效果 点击下载的时候地址还是原来的src 
  - 将普通元素变成替换元素 
  ```html
  <!-- 以前都是用背景做的 -->
    <style>
      h1{
        content:url('logo.png')
      }
    </style>
    <h1>《《css世界》》</h1>
  ```
  - content attr 属性值内容生成
  ```css
  <!-- 可以直接将img 的alt值赋值进去  注意attr内部要加引号-->
  img:after{
    content:attr(alt)
  }
  .icon:before{
    content:attr(data-title)
  }
  ```
## padding
- padding 值 不支持负数，支持百分比(相对宽度计算的)
- 实现管道符,利用内联元素的padding实现高度(如果用width和height 不好控制)
```html
  <style> 
  a + a:before {
      content: "";
      font-size: 0;
      padding: 10px 3px 1px;
      margin-left: 6px;
      border-left: 1px solid gray;
  }
  </style>
  <a href="">登录</a><a href="">注册</a>
```
## margin
- 修改元素内部尺寸，此时son的宽度为340px，其他情况不能修改元素尺码
```html
  <style>
    .father{
      width: 300px;
    }
    .son{
      margin: 0 -20px;
    }
  </style>
  <div class="father">
    <div class="son"></div>
  </div>
```
- margin的合并
  - 块级元素的上外边距与下外边距有时候合并为单个外边距,这就是margin合并
- 3个场景
  - a、相邻兄弟的margin合并
  - b、父级和第一子元素/最后一个子元素margin-top/margin-bottom 合并到父级
    - 处理办法(第一子元素设置top 最后一个子元素设置为bottom 下面都是以top为例) 
    - 1、父元素设置为块状格式化上下文元素(overflow:hidden)
    - 2、父元素设置border-top值
    - 3、父元素设置padding-top值
    - 4、父元素和第一个子元素或者最后一个子元素之间添加内联元素进行分离
    - 5、针对最后一个子元素 父元素设置height min-height max-height值
  - c、空块级元素的margin合并
    - 父元素内有一个空的块级元素,空块级元素的margin-top和margin-bottom会合并,这就是垂直方向的margin值合二为一
```html
  <!-- a -->
  <style> 
    div{
      width: 100px;
      height: 100px;
      background-color: red;
      margin: 10px;
    }
  </style>
  <section>
  <div class="box">
  </div>
  <div class="bar"></div>
  <!-- b -->
  <style>
    .container {
          max-width: 1920px;
          height: 384px;
          background: url('./1.jpg') no-repeat center;
          overflow: hidden;
          /* border-top:1px solid red; */
      }
      .container > h2 {
          font-size: 128px;
          margin-top: 100px;
          color: black;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <span>1</span>
        <h2>CSS世界</h2>
    </div>
    <script>
      // 父级的marginTop还是0
      let dom = document.querySelector('.container')
      let dom1 = document.querySelector('h2')
      let t = getComputedStyle(dom).marginTop
      let t1 = getComputedStyle(dom1).marginTop
      console.log(t,t1)
    </script>
    <!-- c -->
    <style>
       .father{
          overflow: hidden;
        }
        .son{
          margin:10px
        }
    </style>
      <div class="box"></div>
      <div class="father">
        <div class="son"></div>
      </div>
```
- margin合并的计算规则
  - 总结 正正取大值 正负值相加 负负最负值
  - 值为auto 他会自定填充
  - 1、margin-right 设置固定值的是 margin-left 设置auto 他会获取剩余的空间
  - 2、如果2侧都是auto 则平分剩下的空间
  - 3、margin:auto 默认是水平居中 可以修改 writing-mode:vertical-lr (修改文档流方向,但是水平不支持)
  - 4、水平垂直居中 
```html
  <style>
    .box1{
      width: 400px;
      height: 400px;
      position: relative;
      background: red;
    }
    .son{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;  
      width: 100px;
      height: 100px;
      background: springgreen;
      margin: auto;
    }
  </style>
  <section>
    <div class="box1">
      <div class="son"></div>
    </div>
  </section>
```
- margin 无效情况
  - 1、内联非替换元素 设置垂直margin是无效的(span等)，内联替换元素,设置垂直margin有效 并且没有合并的margin问题(所以图片永远不会发生margin合并)
  - 2、表格中的<tr>和<td>元素或者display设置table-cell、table-row 元素的margin都是无效的
  - 3、绝对定位的时候 当设置了top 若设置margin-bottom与绝对定位已有的位子争抢的时候 此时无效(必须要和当前元素定位方向一致才有用)
  - 4、定容盒子的子元素margin-bottom和margin-right设置无效 这个和绝对定位类似
  - 5、遇到float
  - 6、内联特性导致margin无效,因为幽灵空白节点 他的对齐方式的baseline 所以图片无法跑出去
```html
<!-- 3 -->
  <style>
    div{
      width: 400px;
      height: 400px;
      border: 1px solid red;
      position: relative;
    }
    .div1{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 10%;
      left: 20%;
      /* margin-bottom: 200px; */
    }
    .div2{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 30%;
      left: 40%;
    }
  </style>
  <section>
    <div class="box1">
      <div class="div1">div1</div>
      <div class="div2">div2</div>
    </div>
  </section>

  <!-- 4 -->
   <style>
    div{
      width: 400px;
      height: 400px;
      border: 1px solid red;
      position: relative;
    }
    .div1{
      width: 50px;
      height: 50px;
      background:springgreen;
      /* margin-bottom: 100px; */
      margin-right: 100px;
    }
    
  </style>
  <section>
    <div class="box1">
      <div class="div1">div1</div>
    </div>
  </section>

  <!-- 5 原因要看后面的章节 -->
  <style>
    img{
      float:left;
      width:256px
    }
    p{
      overflow:hidden;
      margin-left:200px
    }
  </style>
  <div class='box'>
    <img src='1.jpg'>
    <p>xxx</p>
  </div>

  <!-- 6 原因要看后面的章节 -->
  <style>
    img{
      height:96px;
      margin-top:-200px
    }
  </style>
  <div class='box'>
    x<img src='1.jpg'>
  </div>
```
## border
### border-width 不支持百分比 他有固定的数值 thin 1px,medium(默认值)3px, thick 4px
### border-style
  - 默认 none 实现没有边框`div{ border:1px solid;border-bottom:0 none}`
  - solid 实线
  - dashed 虚线边框
  - dotted 虚点边框 可以画圆
  - double 双线边框 当border-width 为3px的时候 才开始有双线
  - 还有其他等等
```html
  <!-- 画圆 -->
  <style>
    div{
      width: 400px;
      height: 400px;
      overflow: hidden;
    }
    .div1{
      border: 399px dotted red;
      width: 400px;
      height: 400px; 
    }
  </style>
  <section>
    <div class="box1">
      <div class="div1">div1</div>
    </div>
  </section>
```
### border-color
- 当没有设置的时候 他会默认继承color的颜色,具有类似特性的还有outline、box-shadow、text-shadow等
```html
<!-- 用法 在hover的时候直接修改color 所有的颜色都会变 以前一般都是用bg做 -->
  <style>
    .add {
        display: inline-block;
        width: 76px; height: 76px;
        color: #ccc;
        border: 2px dashed;
        text-indent: -12em;
        transition: color .25s;
        position: relative;
        overflow: hidden;
    }
    .add:hover {
        color: #34538b;
    }
    .add::before, .add::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
    }
    .add::before {
        width: 20px;
        border-top: 4px solid;
        margin: -2px 0 0 -10px;
    }
    .add::after {
        height: 20px;
        border-left: 4px solid;
        margin: -10px 0 0 -2px;
    }
  </style>
  <a href class="add" title="继续上传">
    添加图片
  </a>
```
### 透明边框的技巧
- 增加小图标的接触面,原来16*16 现在变成 27*27 多余的部分是透明色
```css
.icon{
  width:16px;
  height:16px;
  border:11px solid transparent;
}
```
- 绘制三角形
```css
div{
  width:0;
  border:10px solid;
  border-color:red transparent transparent;
}
```
### line-height
- middle指的是基线往上1/2 x-height高度 可以理解为X交叉的那个位子，vertical-align:middle 不是绝对垂直对齐
- ex 是相对x的高度,利用它实现logo居中
```css
.icon{
  display:inline-block;
  width:20px;
  height:1ex;
  background:url(xxx)
}
```
- 多行文本 实现垂直居中
```html
  <style>
    .box {
        width: 280px;
        line-height: 120px;
        background-color: #f0f3f9;
        margin: auto;
    }
    .content {
        display: inline-block;
        line-height: 20px;
        /* margin: 0 20px; */
        text-align: left;
        vertical-align: middle;
    }
  </style>
  <div class="box">
      <div class="content">基于行高实现的基于行高实现的基于行高实现的基于行高实现的基于行高实现的...</div>
  </div>
```
- line-height值的比较
- 值  数值:是font-size的相对的,百分比:也是相对font-size,长度值:21px 带单位
- 注意 值是数值的时候所有子元素继承的都是这个值,是百分比的时候 所有子元素继承的是最终计算的值
  - box-1 是正常显示高度是32px+20px;box-2和box-3是相对当前盒子的font-size 当前font-size设置14px 则他们盒子的总体line-height就是21px所有会出现挤兑
```html
<style>
  .box   { font-size: 14px; }
  .box-1 { line-height: 1.5; }
  .box-2 { line-height: 150%; }
  .box-3 { line-height: 1.5em; }

  h3, p {
      margin: 0;
  }
  h3 { font-size: 32px; }
  p  { font-size: 20px; }
</style>
<div class="box box-1">
    <h3>标题</h3>
    <p>内容</p>
</div>
<div class="box box-2">
    <h3>标题</h3>
    <p>内容</p>
</div>
<div class="box box-3">
    <h3>标题</h3>
    <p>内容</p>
</div>
```
### line-height 大值特性
- 下面有2中情况 子元素行高20px 或者子元素行高96px  最终.box行高都是96px 因为无论内联元素line-height如果设置 最终父级高度都是由数值值的那个line-height决定
```html
<style>
  /* 第一种 */
.box{
  line-height:96px
}
.box span{
  line-height:20px
}
  /* 第二种 */
.box{
  line-height:20px
}
.box span{
  line-height:96px
}
</style>
<div class='box'>
  <span>内容。。。</span>
</div>
```
### vertical-align
- 属性分类
  - 线类 baseline(默认值),top,middle,bottom
  - 文本类 text-top,text-bottom
  - 上标下表类 sub,super
  - 数值百分比类 20px 2rm 20%
- vertical-align作用的前提:只能应用于内联元素以及display值为table-cell的元素(浮动和绝对定位会让元素块状化,因此他们也不行)
- 幽灵空白节点 只要是内联元素都会出现这个，何为幽灵空白节点,vertical-align的默认属性是baseline,但是baseline不是元素的最边缘,当div包裹img标签的时候,给div设置一个border就会看到图片底部和div之间产生一个间隙，这个间隙就是幽灵空白节点的baseline到最底部的距离。我们可以用x做测试,在img标签前面写入一个x,就能看到x和div之间有一个间隙,x下面就是baseline线。当只有div和img的时候 也出现间隙,那个间隙造成的原因就是幽灵空白节点
```html
<!-- 何为幽灵空白节点 -->
  <style>
  .box{
      border: 1px solid red;
      /* line-height: 32PX; */
      font-size: 50px;
  }
  </style>
  <div class='box'>
      x <img src="./1.jpg" alt="">
  </div>
```
### vertical-align和line-height关系
- 容器高度不等于行高的例子,当不设置span的字体大小box的高度就是32px,当设置span的字体一定相对交大的时候,由于vertical-align默认是baseline对于,x(没有的时候就是幽灵空白节点,用x代替下辅助下)和span内的文本都是基线对其,这样会导致span文本往上移，这样他们才能够基线对齐，导致box的高度被撑大
- 处理办法 让幽灵空白节点 和 span的字体大小一样，或者改变对齐方式vertical-align:top
```html
  <style>
    .box{
       line-height: 32PX;
       /* font-size: 24px */
    }
    span{
        font-size: 24px;
    }
  </style>
  <div class='box'>
    x<span>x文字x</span>
  </div>
```
- 常见的图片底部留有间隙处理,间隙产生的三大元凶就是`幽灵空白节点`,`line-height`,`vertical-align`，具体产生的原因上面已经描述过了
- 处理办法
  - 图片块状化,幽灵空白节点只存在内联元素
  - line-height 足够小,只要半行间距小于字母x的下边缘位子或者往上,自然就没有撑开的空间了
  - 容器的font-size足够小,前提条件是line-height的值是1 或者 150% 这类与font-size相关的 如果是100px这类值就没作用了
  - 图片 vertical-align 设置top，bottom、middle中的任意值,都可以，修改默认的baseline
```html
  <style>
    .box{
      border: 1px solid red;
    }
    span{
      font-size: 24px;
    }
  </style>
  <div class='box'>
    x <img src="./1.jpg" alt="">
  </div>
```
### 线性
- vertical-align属性默认值的情况
- inline
  - 在文本之类的内联元素那里字符x的下边缘
  - 对于替换元素则是替换元素的下边缘
- inline-block
  - 如果里面没有内联元素,或者overflow不是visible，该元素的基线就是margin低边缘
  - 否则就是元素里面最后一行内联元素的基线
- vertical-align top/bottom 一个上一个下，middle 与近似垂直居中
```html
  <style>
    span{
        display: inline-block;
        width: 150px;
        height: 150px;
        border: 1px solid red;
        background: springgreen;
    }
    .span1{
        /* margin: 10px; */
    }
  </style>
  <span class="span1"></span>
  <span>xxxxxxxxx</span>
```
### 文本
- 文本类属性值就是text-top和text-bottom
- text-top 盒子的顶部和父级内容区域的顶部对齐
- text-bottom 盒子的地步和父级内容区域的地步对齐
- sub 下标
- super 上标
