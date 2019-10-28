// https://www.cnblogs.com/gongyijie/p/8358836.html
// https://www.cnblogs.com/haoqipeng/p/5309491.html
/*
从大的分类上讲，display的32种写法可以分为6个大类，再加上一个全局类，一共是7个大类：

1 外部值:就是说这些值只会直接影响一个元素的外部表现，而不影响元素里面的儿子级孙子级元素的表现。 

  display: block;
  display: inline;
  display: run-in;//这个元素就直接闯入下一行

2 内部值:用来管束自己下属的儿子级元素的排布的。 
  
  display: flow; //实验室阶段产品，Chrome不支持。
  display: flow-root; //不同于刚才谈到的 flow，现在用 flow-root的渐渐多起来了，因为它可以撑起被你 float掉的块级元素的高度。
  display: table; //这一个属性，以及下面的另外 8个与 table相关的属性，都是用来控制如何把 div显示成 table样式的，因为我们不喜欢 <table>这个标签嘛，所以我们想把所有的 <table>标签都换成 <div>标签。
  display: flex; //flex布局 再次不做展开
  display: grid; //网格布局 再次不做展开
  display: ruby; //针对于汉字(除了 Firefox以外其它浏览器对它的支持都不太好)
  display: subgrid; //subgrid总的思想是说大网格里还可以套小网格，互相不影响(草案)

3 列表值

  display: list-item; //display:list-item;和 display:table;一样

4 属性值

  display: table-row-group;//此元素会作为一个或多个行的分组来显示（类似 <tbody>）。 display: table;
  display: table-header-group; //此元素会作为一个或多个行的分组来显示（类似 <thead>）。 
  display: table-footer-group; //此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。
  display: table-row; //此元素会作为一个表格行显示（类似 <tr>）。
  display: table-cell; // 此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
  display: table-column-group; //此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。
  display: table-column; //此元素会作为一个单元格列显示（类似 <col>）
  display: table-caption; //此元素会作为一个表格标题显示（类似 <caption>）

  display: ruby-base;//display: ruby;
  display: ruby-text;
  display: ruby-base-container;
  display: ruby-text-container;

5 显示值

  display: contents;//它让子元素拥有和父元素一样的布局方式，仅此而已。
  display: none;

6 混合值

  display: inline-block;
  display: inline-table;
  display: inline-grid;
  display: inline-flex;

7 全局值

  display: inherit;
  display: initial;
  display: unset;




border-collapse: collapse; 合并重合的边框  表格用的到









*/