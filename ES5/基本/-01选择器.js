/*
https://www.cnblogs.com/AllenChou/p/4684753.html

  css 选择器
    element,element 逗号隔开 代表作用于2个元素
    div p           div 内部的所有p元素（带子孙）
    div>p           div 内部第一层p元素（带子不带孙）
    
    兄弟级别(作用于兄弟):
    div+p           div后面紧跟着的第一个p标签(必须是紧邻的标签) 
    div~p           div后面所有的p标签  
    
    [target]        选择带有 target 属性所有元素。
    [target=_blank] 选择 target="_blank" 的所有元素。
    [title~=flower] 选择 title 属性包含单词 "flower" 的所有元素(~多个的时候 包含)
    [lang|=en]	    选择 lang 属性值以 "en" 开头的所有元素(|开头) 

    a[src^="https"] 选择其 src 属性值以 "https" 开头的每个 <a> 元素
    a[src$=".pdf"]  选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。
    a[src*="abc"]   选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。

    p:first-letter  选择 <p> 元素的首字母
    p:first-line    选择 <p> 元素的首行(只要是折行都不算首行)
    p:first-child   选择 父元素的第一个子元素是<p>。
    
    (与first-child区别，上者：只有父元素的第一个子元素才满足--只有一个，下者：父元素满足条件的第一个元素--可以是不同的多个)
    (child 和 type 区别  child位子和元素一一对应，type 位子灵活满足元素即可)
    p:first-of-type 选择属于其父元素的首个 <p> 元素
    p:last-of-type  选择属于其父元素的最后 <p> 元素
    p:only-of-type  选择属于其父元素所有子元素 只有一个<p>的情况
    p:only-child    选择属于其父元素的唯一子元素 <p> 元素

    p:nth-child(2)        选择其父元素的第二个子是<p>(只有第二个元素是p才能起效果)
    p:nth-last-child(2)   同上，从最后一个子元素开始计数。
    p:nth-of-type(2)      选择属于其父元素第二个<p>元素,(多个元素情况下,选择第父元素的第二个P元素)
    p:nth-last-of-type(2) 同上，但是从最后一个子元素开始计数。
    p:last-child          选择属于其父元素最后一个子元素每个 <p> 元素。

    input:enabled         选择每个启用的 <input> 元素。
    input:disabled        选择每个禁用的 <input> 元素
    input:checked         选择每个被选中的 <input> 元素。
    :not(p)               选择非 <p> 元素的每个元素。
    ::selection           选择被用户选取的元素部分。
    // 9种 42个
    1、基本选择器
        通配选择器    *
        元素选择器    p
        ID选择器      #id
        类选择器      .class
        群组选择器	  p,span(作用于每个元素)

    2、层次选择器语法
        上下级
            后代选择器（包含选择器）  E F (E包含F)
            子选择器                E>F  (F是E的子元素)
        同级
            相邻兄弟选择器           E+F (E后面的第一个元素是F)
            通用选择器              E~F  (E后面的所有F元素)
    
    伪类选择器（5个伪类）
    3、动态伪类
        a:link      未访问  
        a:visited   已访问
        a:hover     悬浮
        a:active    被激活
        (a标签顺序从上到下)
        a:focus     获取焦点
    4、状态伪类
        E:checked     匹配选中的复选按钮或者单选按钮表单元素
        E:enabled     匹配所有启用的表单元素 form表单中的非禁用
        E:disabled    匹配所有禁用的表单元素    禁用元素
    5、目标伪类
        E:target  E元素被相关URL指向,才选择E元素
        例子:当点击a链接，链接跳转到h1的时候，h1的文字会显示为红色
        #big-bam-boom1:target {
            color: red;
        }
        <h1 id="big-bam-boom1">Kaplow!</h1>
        <a href="#big-bam-boom1">Mission Control, we're a little parched up here.</a>
    6、否定伪类
        E:not(F)    匹配所有除元素F外的E元素(F一般是 多个类中的一个)

    7、结构伪类(一般都是选择父元素下的)
        E:first-child 父元素的第一个子元素 是E    与E:nth-child(1)等同
        E:last-child	父元素的最后一个子元素 是E  与E:nth-last-child(1)等同
        E F:nth-child(n) 选择父元素E的第n个子元素F。其中n可以是整数（1，2，3）、关键字（even偶数，odd基数）
                        、可以是公式（2n+1）,而且n值起始值为1，而不是0.(n不能用别的字母代替)
        E F:nth-last-child(n)  用法同上 取反 (odd是偶数)
        
        (上面是第n个元素是E，下面是第n个E类型的元素,一般带of就是找类型，带child就是找元素)
        E:nth-of-type(n)  选择父元素内具有指定类型的第n个E元素
        E:nth-last-of-type(n) 选择父元素内具有指定类型的倒数第n个E元素
        E:first-of-type   选择父元素内具有指定类型的第一个E元素，与E:nth-of-type(1)等同
        E:last-of-type     选择父元素内具有指定类型的最后一个E元素，与E:nth-last-of-type(1)等同

        :root  根元素
        E:empty           选择没有子元素的元素，而且该元素也不包含任何文本节点

        E:first-letter  选择 <p> 元素的首字母
        E:first-line    选择 <p> 元素的首行(只要是折行都不算首行,可缩小浏览器试试)

        E:only-child      选择父元素只包含一个子元素，且该子元素匹配E元素
        E:only-of-type    选择父元素只包含一个同类型子元素，且该子元素匹配E元素

    8、属性选择器语法
        以单词为整体
        E[attribute]          用于选取带有指定属性的E元素。
        E[attribute=value]    用于选取带有指定属性和值的E元素。只能有一个的情况 
        [attribute~=value]   用于选取属性值中包含指定词汇的元素。多个单词中的一个,整个单词
        [attribute|=value]	 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词(a1-12)指a1
        以字符串
        a[src^="https"] 选择其 src 属性值以 "https" 开头的每个 <a> 元素
        a[src$=".pdf"]  选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。
        a[src*="abc"]   选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。

    9、伪元素(伪元素改变文档结构)
        E:before/E::before
        E:after/E::after
        
    */
