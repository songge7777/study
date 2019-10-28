/*
1、content
  --替换元素 img object video iframe input textarea select
      a、内容的外观不受页面上的css影响
      b、有自己的尺寸(一般300X150,img为0)
      c、他们的vertical-align的基线与下边缘重合 
  --所有的替换元素都是内联水平元素(非块元素)，但是display不一样 

  --替换元素有一个固有尺寸,无法改变他的尺寸
    借助before或者after伪元素 例子
        div::before{
          content: url('./1.jpg');
          width: 100px;
          height: 100px;
        }
       <div> </div>
    img设置宽高,没有改变图片固定尺寸,实际是设置了外部尺寸，然而他默认
    填充(fill，也就是外部尺寸多大就填充多大),类似background-size的三个选择

*/