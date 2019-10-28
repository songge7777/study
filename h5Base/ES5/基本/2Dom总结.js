/*
	dom操作 
	节点(相关信息,非自身)
			名称
					dom.nodeName (任何一个节点都有)返回大写  例如 UL IMG
					dom.tagName  (只有标签有)返回大写  例如 UL IMG
			获取相关节点 
					父:dom.parentNode
					子:dom.children(只获取标签),dom.childNodes(第一层所有的节点)  

					父级第一个节点    dom.firstChild
					父级最后一个节点  dom.lastChild 
					父级第一个'元素'节点    dom.fristElementChild
					父级最后一个'元素'节点  dom.lastElementChild
					获取子元素的个数 childElementCount
					获取紧挨着上一个节点 dom.previousElementSibling
					获取紧挨着下一个节点 dom.nextElementSibling
			节点类型
					标签:1 dom.nodeType
					属性:2 dom.getAttributeNode('class').nodeType
					文本:3 空格也是
					注释:8
					#document:9  
      获取元素位子信息
          window.getComputedStyle(dom) 宽高不带border
					dom.getBoundingClientRect() 盒子信息
							width  带边框，下面计算都带
							height 带边框
							left   元素左边到可视区域最左边
							right  元素右边到可视区域最左边
							top    元素上边到可视区域最上边
							bottom 元素下班边到可视区域最上边
					offsetParent
							获取元素到最近有定位的父级(会一层一层往外找，直到body,body没有这个)
					offserLeft(不带px)
							元素最左边离，与定位父级之间的距离
					offserTop(不带px)
							元素最上边离，与定位父级之间的距离
			元素的属性(attribute,HTML标签上的特性,它的值只能够是字符串,property是DOM中的属性，是JavaScript里的对象)
					attribute
					获取(获取不到JS 自定义属性，能获取html标签自定义)
							attributes 获取所有的标签属性
							getAttribute('class')获取元素的类(src或者href 取的是相对地址，写的啥就获取啥,参数跟html里面的一致)
					设置
							setAttribute('属性','值')
					删除
							removeAttribute('属性')
					property
					获取
							dom.id   dom.className
					设置 直接赋值即可

					attribute 和 property 
					区别(dom强大)
							attribute 赋值 都能获取 可以获取自定义的属性 
							property 赋值 attribute不能获取 不能获取自定义属性
          相同:更改property和attribute上的任意值，都会将更新反映到HTML页面中
          总结 attribute 操作html的一切属性 property 操作非自定义的
	节点(自身信息，增删改查)	
			获取元素信息		
				dom.offsetWidth/Height(带边框)	
				dom.clientWidth/Height(不带边框)
			创建节点
				(针对元素)
				let dom = document.createElement(tagName) 
				document是固定的,参数是标签名(大小写都可以)
				返回值:创建的标签
				(文本)
				let textNode = document.createTextNode('text')
			增加节点(操作已有的则是剪贴)
				父节点.appendChild(节点),添加到最后 
				返回值:参数(创建的节点)
				
				父节点.insertBefore('新节点','被插入的节点的位子')
				创建的节点插入第二个参数前面
				两参数必须同时存在,第二个参数null或者undefined变成appendChild

				replacechild 替换元素用法相通,被替换的会被删除
			删除节点
				父节点.removeChild(节点) 
			克隆节点(只包括html,css,不包括js,id问题需要手动删除)
				被克隆的节点.cloneNode('参数')
				参数:true(包含子孙),false(不包含子孙)
				返回值:被克隆的节点

	innerHtml和Dom方法的区别
		<ul>
			<li></li>
			<li></li>
		</ul>
		innerHtml 把原来dom下的内容清空在添加 (操作一个ul，里面li都会被清空)
			dom.innerHTML+="<li>xubj</li>"
		Dom  把新内容追加到原来里面
			dom.appendChild("<li>xubj</li>");
	outHTML和innerHtml区别
		innerHtml 指所有的子元素
		outHTML 指包括自己和所有子元素 

	动态和静态获取
	getElementsByTagName() 这个系列的都是动态 结构变化时候结果会变
	querySelector()        这个系列的都是静态 结构变化时候结果不会变
	matchesSelector()   接收一个参数,即css选择符,如果调用的元素与该选择符匹配为ture,否则为falsed
 
	dom操作表单
	dom操作表格
	
	HTML页面中,文档元素(root)始终都是<html>元素  
	XML 没有预定义元素,因此任何元素都可能成为文档元素			

	document 类型为9
		常用方法
		write()   	参数为字符串 
		writeln()   在字符串末尾添加一个换行符号
	\为转义字符  " 里面还需要" 要加\" "
	
	element 类型为1
		nodeName值为标签名
		if(element.tagName == 'div')//不能这么写 容易出问题 (在html中会返回大写)
		if(element.tagName.toLowerCase() == 'div') //最好这样写
	
	text 类型为3
		nodeName值为"#text"

	comment(注释) 类型为8
		nodeName值为"#comment"

	Atrr 类型为2
		nodeType值为特性的名字

	操作表格
		创建表格
		var table = document.createElement('table')
				table.borber = 1
				table.width = 100%
		创建tbody
		var tbody = document.createElement('tbody')
				table.appendChild(tbody)
		创建第一行
				tbody.insertRow(0)
				tbody.rows[0].insertCell(0)
				tbody.rows[0].cells[0].appendChild(document.createTextNode('cell 1,1'))

	classList 属性
			//删除 'disabled' 类
			dom.classList.remove('disabled')
			//添加 'current' 类
			dom.classList.add('current')
			//切换 'user' 类
			dom.classList.toggle('user')
			//表示列表中是否存在给定的值,返回布尔值
			dom.classList.contains(value)
	焦点管理
			document.activeElement 这个属性始终会引用DOM中当前获取了焦点的元素
			例子 var btn = document.getElementById('myButton')
					 btn.focus()
					 console.log(document.activeElement === btn) //true
					 默认情况情况下document.activeElement=null
			document.hasFocus(),用来确定文档是否获取了焦点
					var btn = document.getElementById('myButton')
					 btn.focus()
					 console.log(document.hasFocus()) //true

	自定义数据属性
		<div id = 'div' data-appid='123' data-myname=''sg>
		let div = document.getElementById('div')
		//获取
		div.dataset.appid
		//赋值
		div.dataset.appid = '11111'
	
	contains()方法
		判断某个节点是不是另一个节点的后代
		dom.contains('子节点或者本身') 结果为true

	innertText
		读取 
			dom.innertText 操作元素中包含的所有文本内容
		写入
			当赋值的时候,只会作用于当前节点
			若是 dom.innerText = dom.innerText
			可以过滤掉HTML标签,原有dom下标签都没了
		textContent 也是获取文本内容(浏览器支持度不同而已)
	outerText
		在读取文本模式下 同上
		在写入 把本身也会覆盖



*/