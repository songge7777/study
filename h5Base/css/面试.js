/*
CSS 布局
meta
	- 设置页面中字符集
		<meta charset="utf-8" />
	- 设置当前页面的关键字
		<meta name="keywords" content="关键字1,关键字2,关键字N" />
	- 设置当前页面的描述
		<meta name="description" content="网页的描述" />
	- 设置页面的重定向
		<meta http-equiv="refresh" content="秒数;url=目标地址" />
	- 通过meta来为网页设置关键字和描述，会被搜索引擎检索，
		并且会在搜索结果中显示出来，但是并不会影响页面的排名。

介绍xhtml的语法
		1.注释不能嵌套
			错误的：<!-- <!-- --> -->
		2.标签必须正确结束（成对出现或者是自结束标签）
		3.标签不能交叉嵌套
		4.属性必须有值且值必须加引号（双引号或单引号都行）
		5.html中不区分大小写，但是一般情况我们都使用小写

内联元素和块元素：
		内联元素(行内元素)：只占用自身内容的大小，不会占用一整行。
					我们一般使用内联元素去包裹文字，为文字内容设置样式
					常见的内联元素：
						a  ， span ，img
		块元素：块元素会独占页面中的一整行
					我们一般使用块元素去做页面中的布局的
					常见块元素：
						div ，p ，h1~h6
						
		注意：
			- 我们一般使用块元素去包裹内联元素，而不会使用内联元素去包裹块元素
			- a元素可以包含任何元素，除了a本身
			- p元素不能嵌套任何的块元素！
样式的继承
	- 在CSS中，祖先元素的样式会同时设置到后代元素上，这一特性我们称为是样式的继承。
	- 所以基于该特定，当有一些样式我们需要为很多元素设置时，我们不用一个一个设置，
		可以直接将该样式设置给他们的祖先元素，这一样式会自动应用他们身上。	
	- 但是，并不是所有的样式都会继承，比如：背景相关的样式都不会继承！
	- 继承来的样式没有优先级！
	
选择器的优先级（权重）
	- 当我们为一个元素同时设置多个相同的样式时，这里就会有一个优先级的问题
		这么多的样式我们到底要应用那个样式，由选择器的优先级决定。
	- 优先级的排序：
		1.!important --> 如果为一个样式添加了一个important，则该样式会优先于所有的样式显示！
		2.内联样式 --> 优先级是 1000 
		3.id选择器 --> 优先级是 100
		4.类和伪类选择器 --> 优先级 10
		5.元素选择器 --> 优先级 1
		6.通配选择器(*) --> 优先级 0
		7.继承的样式 --> 没有优先级
		
 	- 当使用不同的选择器设置相同的样式时，需要根据选择器的优先级来决定应用那个样式，
		它需要将所有的选择器的优先级相加，然后比较，优先级大的优先显示。
			如果优先级相同，则使用靠后的样式。
	- 注意：优先级的相加不会超过选择器的最大数量级！

选择器
	- 后代元素选择器：
		- 作用：选择指定元素的指定后代元素
		- 语法：祖先元素 后代元素
		- 例子：div p{}
			- 这样会选取所有的在div中的p元素
			
	- 子元素选择器：
		- 作用：选择器指定元素的指定子元素
		- 语法：父元素 > 子元素
		- 例子：div > p{}
			- 会选中所有的div的子元素p
			
	- 兄弟元素选择器：
		- 作用：选择指定元素的后一个兄弟元素或者后边所有的兄弟元素
		- 语法：前一个 + 后一个
		- 例子：div + p{}
			- 选中紧挨着div后边的p元素
			
		- 语法：前一个 ~ 后一个
		- 例子: div ~ p {}
			- 选择div后边所有的p兄弟元素
			
	- 伪类选择器
		- 伪类实际是在表示元素正在处于某种状态
		- 伪类：
			:link --> 表示一个正常没有被访问过的链接。
			:visited --> 表示访问过的链接
			:hover --> 表示鼠标正在滑过的链接
			:active --> 鼠标正在点击的链接
			:focus --> 表示获取焦点的状态
			:after --> 选中元素最后边这部分
			:before --> 选中元素最前边这部分
				- 使用after和before时，我们可以使用一个content属性，可以向元素中添加一个指定的内容
			::selection --> 表示正在被选中的文字内容
				- 注意：火狐中需要使用：::-moz-selection
			:first-letter --> 选中段落中的第一个字母
			:first-line --> 选中段落的第一行	
			:first-child --> 选中第一个子元素
				例子： p:first-child{} 
					- 选中页面中的所有第一个子元素p
					- 这里指的子元素，指的是在父元素中的所有子元素进行排序
			:last-child
				- 选中页面中最后一个子元素
			:nth-child
				- 选中页面中指定位置的子元素
				- 例子：p:nth-child(3){}
					- 找到p元素同时p元素是其父元素的第三个子元素
					- 可以在nth-child中传递一个even或odd作为位置，这样可以选中页面中偶数或奇数位置的子元素
			:first-of-type
			:last-of-type
			:nth-of-type
				- 上边三个伪类和first-child last-child类似
					只不过它们的排序只按照同一个元素进行排序
			:not()
				- 否定伪类可以将一些元素剔除出去
				- 例子：p:not(.p1)
					- 选中所有的p元素，除了class属性值为p1
浮动
	- 使用float使元素浮动
	- float有两个可选值：
		left：使元素向左浮动
		right: 使元素向右浮动
	- 当一个元素设置浮动以后，它会完全脱离文档流，并且会在页面提升一个层级，
		设置浮动以后，元素会尽量的向父元素的上方浮动，直到遇到父元素的边框或者其他浮动元素便停止浮动。
	- 遇到没有浮动的块元素，浮动元素也会停止浮动
	- 浮动元素浮动的高度，不会超过齐前边的兄弟元素的高度
	- 文本不会被浮动元素覆盖，它会环绕浮动元素的周围，我们可以使用浮动来实现文字环绕图片的效果。
	- 块元素：
		- 块元素设置浮动以后宽度不再占父元素的100%，而是被子元素撑开。
	- 内联元素：
		- 内联元素设置浮动以后会变成块元素
高度塌陷
	- 在文档流中，父元素的高度默认是被子元素撑开，子元素多高父元素就多高，
		当子元素脱离文档流以后，子元素便不能撑开父元素，会导致父元素的高度塌陷，
			父元素高度塌陷以后会影响到整个的页面的布局。
	- 解决方案：
		1.w3c推荐的方案：
			- 可以在父元素最后添加一个空的div
			- 并且为这个空的div添加一个样式：clear:both
			- 这样父元素就会被空的div撑开
			- 缺点：
				这个方案会在页面中添加冗余的代码，会给结构增加无用代码。
				
		2.使用after伪类(推荐方式)：
			- 通过after伪类向父元素的后边添加一个空的内容
			- 然后为空的内容设置为块元素，并且清除它的浮动
			- 实际上这种方式和上边的原理是一样的，只不过它不会为页面增加多余的代码
			- 例子：
				.clearfix:after{
					content:"";
					display:block;
					clear:both;
				}
			- 缺点：
				不兼容IE6了
				
		3.开启父元素的BFC
			- 根据W3C的规范，每一个元素都有一个隐含的属性BFC
			- BFC（Block Formatting Context）块级格式化环境
			- BFC在网页默认是关闭，可以通过一些属性来开启。
			- 开启BFC以后，元素会具有如下功能：
				1.子元素的垂直外边距不会与父元素的垂直外边距重叠
				2.开启BFC的元素不会被浮动元素所覆盖
				3.开启BFC的元素可以包含浮动子元素
			- 如何开启BFC：
				1.可以设置元素的display为inline-block
				2.可以 设置元素的绝对定位
				3.设置为overflow为hidden（副作用最小）
				4.设置元素浮动
			- 所以我们可以通过：overflow:hidden来开启父元素的bfc
				以使父元素可以包含浮动的子元素	
			- 但是低版本的IE不支持BFC，所以使用以上方式不行，
				而IE中有个Has Layout隐含属性，它和BFC功能类似，
					所以对于低版本的IE来说，开启Has Layout即可
				开启方式：
					zoom:1	
  三栏布局为例
  1.浮动布局（高度未知，不可行）
	缺点：脱离文档流，处理浮动元素与其他元素位子关系，处理 不好会带来很多麻烦
	优点：兼容性好
  2.绝对定位（高度未知，不可行）
	优点：快捷
	缺点：脱离文档流，意味着后面的所有元素都要脱离文档流，导致了可使用性是比较差的
  3.flexbox（高度未知，可行）
	display:flex，
	两边宽度固定，中间flex:1
	两侧宽度固定
	比较完美，在手机移动端基础都是flex布局
  4.表格布局（高度未知，可行） 
	将外围容器设置为 display:table width:100%
 	将里面的div设置单元格 display:table-cell 
	两侧宽度固定
	优点:兼容性比较好
	缺点：当其中一个单元格高度超出时候，剩下的单元格高度也随着变化
  5.网格布局(网格需要设置宽高)（高度未知，不可行）
	将外围容器设置为 display:grid width:100% 
			 grid-template-rows(行高):100px
			 grid-template-columns(三列):300px auto 300px
 	优点：
	缺点：

页面布局变通：
	三栏布局
	  1、左右宽度固定，中间自适应
	  2、上下高度固定，中间自适应
	两栏布局
	  1、左宽度固定，右自适应
	  2、右宽度固定，右自适应
	  3、上高度固定，下自适应
	  4、下高度固定，上自适应
  CSS盒模型
	基本概念：标准模型+IE模型
	区别：
		计算 高度和宽度不同
		标准模型计算：height/width:content
		IE模型计算：height/width:content+padding+border
	CSS如何设置这两种模型：
		box-sizing:content-box;(浏览器默认)
		box-sizing:border-box;
	JS如何设置获取和模型对应的宽和高
		dom.style.width/height(只能获取内联样式，1.内联样式写，2.通过节点添加，3.外链样式表)
		dom.currentStyle.width/height(能获取浏览器渲染之后的宽高，确定只有IE支持)
		window.getComputedStyle(dom).width/height(通用)
		dom.getBoundingClienRect().width/height(计算一个元素的绝对位子bottom...height,width)
	BFC（边距重叠解决方案）
		BFC的基本概念：块级格式化上下文
		BFC的原理（渲染原理）：
			1、BFC这个元素的垂直方向边距会发生重叠,但子元素的垂直外边距不会与父元素的垂直外边距重叠
			2、BFC的区域不会与float元素的box重叠
			3、BFC在页面中是一个独立的容器，外面的元素不会影响里面的元素，反过来一样
			4、计算高度的时候浮动元素也会参与计算
		如何创建BFC：
			1、float值不为none(默认值是none 只要你设置了浮动 就创建了BFC)
			2、position的值不是none和relative
			3、display的值inline-block和table相关都可以
			4、overflow值为hidden和auto
		BFC的使用场景
		  
	IFC
  DOM事件类
	基本概念：DOM事件的级别
	DOM事件模型（捕获和冒泡）
	DOM事件流
	描述DOM事件捕获的具体流程
	Event对象的常见应用
	自定义事件

	DOM事件类 
		事件级别
			DOM0 element.onclick=function(){}
			DOM2 element.addEventListener('click',function(){},false)
			DOM3 element.addEventListener('keyup',function(){},false)
		事件模型 
			捕获和冒泡
		事件流
			1、捕获 2、目标阶段 3、冒泡
		描述DOM事件捕获的具体流程
			window--document--html--body--.....--目标元素
		Event对象的常见应用
			event.preventDefault()//阻止默认行为
			event.stopPropagation()//阻止冒泡
			event.stoplmmediatePropagation()//都绑定这个事件  加上他有优先 
			event.currentTarget//当前绑定的事件  就是父级元素
			event.target//当前触发的事件
		自定义事件		
			var eve=new Event('custome');
			ev.addEventListener('custome',function(){
				console.log('custome');
			})			
			ev.dispatchEvent(eve)//触发

			customEvent（与Event比较，可以放object参数）
  类型转换
	原始类型
		Boolean Null Undefined Number String Symbol
	对象
		Object 
	显示类型转换 Number 函数
		数值：转换后还是原来的值
		字符串：如果可以被解析为数值，则转换为相应的数值，否则得到NaN，空字符串是0
		布尔值：true转成1，false转成0
		undefined:转成NaN
		null:0
		
		对象类型转换
			先调用对象自身的valueOf方法，如果该方法返回原始类型的值，则直接对该值使用Number方法，不在进行后续步骤
			如果valueOf方法返回复合类型的值，在调用对象自身的toString方法，如果toSting方法返回原始类型的值，则对该值使用Number方法，不再进行后续步骤
			如果toString方法返回的是复合类型的值，则报错
	显示类型转换 String函数
		数值：转为相应的字符串
		字符串：转换后还是原来的值
		布尔值：true转成'true'，false转成'true'
		undefined:转成'undefined'
		null:转为'null'

		对象类型转换
			先调用toString方法，如果该方法返回原始类型的值，则对该值使用Sting方法，不在进行后续步骤
			如果toSting方法返回复合类型的值，在调用对象自身的valueOf方法，如果valueOf方法返回原始类型的值，则对该值使用sting方法，不再进行后续步骤
			如果valueOf方法返回的是复合类型的值，则报错

*/