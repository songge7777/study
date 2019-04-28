/*
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



    */
