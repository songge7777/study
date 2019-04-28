/*
1、字体
  font(符合写法):bold italic 26px/50px "微软雅黑"
  后面的是 字体大小/行高 字体 是必须的
  书写位子要求严格，不能调换位子
2、文本
    letter-spacing : 字母(汉字)间距
    word-spacing : 单词间距 (单词的划分以空格为标志)

    white-space : nowrap (不换行)
    (英文和数字如果没有空格，是不会换行的)
    word-break : break-word(单词 一行显示不下就换行 )  break-all(遇到边界才换行) 
    空格的大小一般一个字体的一半
3、padding的复合
   2个值 上下方向
   3个值 上 左右 下
   4个值 上右下左
4、margin的复合同理
    a、margin传递问题,只有上下会传递,左右不会传递
      子集会把自己的margin-top和margin-bottom传递给父级
      处理：给父级加边框
    b、margin的上下叠压,只有上下会叠压
      上边元素的margin-bottom会和下边元素的margin-top叠在一起(取其中的最大值)
      处理:只给其中一个元素设置margin即可
    总结 margin 只是上下会出异状
5、xml,xhtml,html区别
    xml 用来传输数据的

               xhtml            html
    标签名   小写(必须)       可以大写可小写
    属性名称 小写(必须))      小写(必须)
    属性值   必须写完整形式    可简写
    
    总结 xhtml 基本都是小写  html除了属性名字 其他随意
    如何使用Xhtml 在头部引入文件类型声明 <特长>
            html <!DOCTYPE html>
6、a 可以做下载功能
    href 写地址  download 写下载后的名字
    a 标签4个状态顺序
     :link(1普通) :visited(2被访问) :hover(3悬浮) :active(4激活) 
    a 标签描点
      href = 别的标签的id
7、选择器
    id选择器,标签选择器,类选择器(class),群组选择器,包含选择器,通配选择器
    包含选择器: 父级 目标
       空格是查找后代(包括子孙)
       >是查找直接子元素(只有子))
    
    选择器优先级:
      !important>行内样式>id选择器>类选择器>标签选择器>通配符选择器(*)
    基础权重计算方式:
      标签 (1)  类选择器(10)  id选择器(100) 
      多层的时候可以用这个计算,但是n个标签累加都不能超多类选择器
    !important 最大

    但是 max-width : 90px 比 width : 100px !important 更强
8、 嵌套规则
    行内只能嵌套行内，块元素都可以嵌套
    我们一般使用块元素去包裹内联元素，而不会使用内联元素去包裹块元素
			- a元素可以包含任何元素，除了a本身
			- p元素不能嵌套任何的块元素！
9、样式的继承
	- 在CSS中，祖先元素的样式会同时设置到后代元素上，这一特性我们称为是样式的继承。
	- 所以基于该特定，当有一些样式我们需要为很多元素设置时，我们不用一个一个设置，
		可以直接将该样式设置给他们的祖先元素，这一样式会自动应用他们身上。	
	- 但是，并不是所有的样式都会继承，比如：背景相关的样式都不会继承！
	- 继承来的样式没有优先级！
10、float
    当一个元素设置浮动以后，它会完全脱离文档流，并且会在页面提升一个层级，
		设置浮动以后，元素会尽量的向父元素的上方浮动，直到遇到父元素的边框或者其他浮动元素便停止浮动。
	- 遇到没有浮动的块元素，浮动元素也会停止浮动
	- 浮动元素浮动的高度，不会超过齐前边的兄弟元素的高度
	- 文本不会被浮动元素覆盖，它会环绕浮动元素的周围，我们可以使用浮动来实现文字环绕图片的效果。
	- 块元素：
		- 块元素设置浮动以后宽度不再占父元素的100%，而是被子元素撑开。
	- 内联元素：
    - 内联元素设置浮动以后会变成块元素
    高度塌陷:
      	- 在文档流中，父元素的高度默认是被子元素撑开，子元素多高父元素就多高，
		      当子元素脱离文档流以后，子元素便不能撑开父元素，会导致父元素的高度塌陷，
          父元素高度塌陷以后会影响到整个的页面的布局。
        - 解决方案:
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
11、position
    relative 左右 或者上下为相同值  作用:相互抵消
    absolute/fixed 左右 或者上下为相同值  作用:拉伸  如果 加上 margin:auto 作用:居中 
    z-index属性目前只有在position:relative、position:absolute和position:fixed参与的情况下才有作用
12、表单提交
      	<form action="https://www.baidu.com/s">
            <input type="text" name="wd"  value="" />
            <input type="submit" value="搜索"/>
        </form>
      最后提交的地址:https://www.baidu.com/s?wd='value里面的值'
           <input type='email'> 在提交的时候会自动校验(xx@qq.com)
           <input type='url'>     在提交的时候会自动校验(http://xxx.com)
           <input type='number' max='10' min='1' step='2'>  step合法数字间隔 max/min 允许的最大/小值  在提交的时候会自动校验(必须是数子)
           <input type='color'>     可以选择颜色
           <input type='date'>  日期

13、label 用来绑定input 效果:点到 用户名光标会聚集到input上
		<label for="username">用户名：</label>
		<input type="text" id="username" name="username" value="文本框" />
14、radio和checkbox
				<input type="radio" name="sex" value="man"  />男
				<input type="radio" name="sex" value="woman" checked="checked"/>女
				<input type="radio" name="sex" value="else"/>其他
			
				<input type="checkbox" name="interest" value="eat" checked="checked" />吃饭
				<input type="checkbox" name="interest" value="sleep" checked="checked" />睡觉
        <input type="checkbox" name="interest" value="playdd" />打豆豆
15、disabled  禁止用户输入;被禁用的字段表单不会提交
    readonly  让表单变成只读状态;表单会被提交
16、select 
      选择上海提交的时候==> http://baidu.com/?city=shanghai
    <form action="http://baidu.com" method="get">
    // multiple 设置多选
			<select name="city"  multiple="multiple">
				<option value="beijing">北京</option>
				<option value="shanghai" selected="selected">上海</option>
				<option value="shenzhen">深圳</option>
			</select>
    </form>
17、text-shadow 文字阴影
     参数一:X轴的偏移量
     参数二:Y轴的偏移量
     参数三:阴影的大小
     参数四:阴影的颜色  
18、box-shadow 盒模型阴影
      参数一: 阴影方向insert内阴影  省略不写表示外阴影
      参数二: X轴的偏移量
      参数三: Y轴的偏移量
      参数四: 阴影的扩展半径(先扩展,在模糊)
      参数五: 阴影的大小
      参数六: 阴影的颜色
    阴影可叠加
19、表单美化
      改变按钮和其他控件的外观,使其外观类似于原生空间
        -webkit-appearance: none
      美化文本框内提示
       input::-webkit-input-placeholder{}/input::moz-placeholder{}
      去掉type=number上下小箭头
        input::-webkit-inner-spin-button{
          -webkit-appearance: none
        }
      去掉搜索按钮的圆角和叉叉
        input{
          -webkit-appearance: none
        }
        input::-webkit-search-cancel-button{
          -webkit-appearance: none
        }
20、内核问题
        谷歌    webkie   -webkit
        火狐    Gecko    -moz
        IE      Trident  -ms
        Opera   Presto   -o
        凡是什么双内核 都是webkit+IE
        安卓系统属于谷歌,默认浏览器都是webkit
        苹果,默认浏览器safari也是webkit
21、flex 
      容器 
        flex-direction  row/column(row-reverse,column-reverse)
        flex-wrap       wrap/nowrap/wrap-reverse
        flex-flow       上面2个集合默认row nowrap
        justify-content flex-start/center/space-between/space-around
        align-items     flex-start/center/baseline/stretch
        aligin-content  flex-start/center/space-between/space-around

      项目(6个)
        常用 flex 1
        align-self 可以覆盖 align-items 
           flex-start/center/baseline/stretch/auto(默认)
      
22、 transition 过度
        要求:元素的状态要有变化,比如hover、active等
        参数1 时间 ms 和 s(不要小于16ms)
        参数2 过度属性,all(默认)代表所有属性
        参数3 过度的方式,ease(默认)减速
                        linear  匀速
                        ease-in 加速
                        cubic-bezier(贝赛尔曲线)
        参数4 何时开始 
        transition-timing-function:动画进度和时间关系(参数3)
        多个 transition:过度时间 属性1,过度时间 属性2

23、transform 变化 (变化值可以叠加,顺序变化导致结果变化)
        旋转  rotate(30deg) rotateX() rotateY() 
        倾斜  skew(30deg)  skeX()  skewY() 不对行内元素起作用
        缩放  scale(倍数)  scaleX()  scaleY()
        位移  translateX(像素值))  translateY()  translate()
        合并  translateX  scaleX skeX 顺序先写后执行,后写先执行
        变换基地  transform-origin 变化的基点 
              参数1(X位子)  参数2(Y位子) 默认是center center

24、animation 动画
        与元素状态的变化无关,相当于多个补间动画
        参数1 运动时间
        参数2 关键帧名字
        参数3 过度方式
        参数4 重复次数
        参数3 动画顺序
    动画原理 : 1、视觉暂留作用
              2、画面逐渐变化
    动画作用 : 1、愉悦感
              2、引起注意
              3、反馈
              4、掩饰
    动画类型:
              1、transition补间动画
              2、keyframe关键帧动画
              3、
25、gird
      容器
        minmax()  函数来创建网格轨道的最小或最大尺寸
                  第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。
                  可以接受任何长度值,也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压
        repeat()  使用repeat()可以创建重复的网格轨道
                  第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸      

       
        display 
          grid ：生成一个块级网格
          inline-grid ：生成一个内联网格
          subgrid ：如果你的网格容器本身是另一个网格的网格项（即嵌套网格），你可以使用这个属性来表示
        grid-template-columns:40px 1fr auto 设置宽度(3排) 
        grid-template-rows   :100px auto    设置高度(2行)  

        grid-template-areas
                <div class="e"></div>
                <div class="a">头头头头头头头头</div>
                <div class="b"></div>
                <div class="b1"></div>
                <div class="c"></div>
            通过引用 grid-area 属性指定的 网格区域
            .a{
              grid-area:header
            }
            .b{
              grid-area:sidebar
            }
            .b1{
              grid-area:main
            }
            .c{
              grid-area:footer
            }
            .container {
              grid-template-columns: 50px 50px 50px 50px;
              grid-template-rows: auto;
              grid-template-areas: 
              "header header header header"
              "main main . sidebar"
              "footer footer footer footer";
            }
            4横3竖
            .代表没有设置的第一个元素 也就是c
            一个 grid-are名字只能表示一个横竖

        grid-template 
           用于定义 grid-template-rows ，grid-template-columns ，grid-template-areas 缩写 
        
        
        grid-column-gap  横 网格线的大小  
        grid-row-gap     竖
        grid-gap       总写


        justify-items (相对row)  
            start：将内容对齐到网格区域(grid area)的左侧
            end：将内容对齐到网格区域的右侧
            center：将内容对齐到网格区域的中间（水平居中）
            stretch：填满网格区域宽度（默认值）
        align-items    (相对column)
            start：将内容对齐到网格区域(grid area)的顶部
            end：将内容对齐到网格区域的底部
            center：将内容对齐到网格区域的中间（垂直居中）
            stretch：填满网格区域高度（默认值）

        justify-content 有时，你的网格合计大小可能小于其 网格容器(grid container) 大小
            start：将网格对齐到 网格容器(grid container) 的左边
            end：将网格对齐到 网格容器 的右边
            center：将网格对齐到 网格容器 的中间（水平居中）
            stretch：调整 网格项(grid items) 的宽度，允许该网格填充满整个 网格容器 的宽度
            space-around：在每个网格项之间放置一个均匀的空间，左右两端放置一半的空间
            space-between：在每个网格项之间放置一个均匀的空间，左右两端没有空间
            space-evenly：在每个栅格项目之间放置一个均匀的空间，左右两端放置一个均匀的空间
        align-content
            start：将网格对齐到 网格容器(grid container) 的顶部
            end：将网格对齐到 网格容器 的底部
            center：将网格对齐到 网格容器 的中间（垂直居中）
            stretch：调整 网格项(grid items) 的高度，允许该网格填充满整个 网格容器 的高度
            space-around：在每个网格项之间放置一个均匀的空间，上下两端放置一半的空间
            space-between：在每个网格项之间放置一个均匀的空间，上下两端没有空间
            space-evenly：在每个栅格项目之间放置一个均匀的空间，上下两端放置一个均匀的空间
        
        
        grid-auto-columns 设置尺寸 自动填充
              前提 grid-template-columns 没有设置的情况
        grid-auto-rows    设置尺寸 自动填充
              前提 grid-template-rows 没有设置的情况

        grid-auto-flow  没有规定摆放方位情况下
            row       告诉自动布局算法依次填充每行，根据需要添加新行
            column    告诉自动布局算法依次填充每列，根据需要添加新列
            dense     告诉自动布局算法，如果后面出现较小的 grid item，
                      则尝试在网格中填充空洞
      项目属性
          grid-column-start
          grid-column-end
          grid-row-start
          grid-row-end

          grid-column  X/Y  X代表开始的列 Y代表结束的列 
          grid-row     X/Y  X代表开始的行 Y代表结束的行
          grid-area    给一个网格项命名  在grid-template-area中用
          justify-self (横着对齐方式)
                start - 将内容对齐到网格区域的左端
                end - 将内容对齐到网格区域的右端
                center - 将内容对齐到网格区域的中间
                stretch - 填充网格区域的宽度 (这是默认值)
          align-self (竖着对齐方式)
                start - 将内容对齐到网格区域的顶部
                end - 将内容对齐到网格区域的底部
                center - 将内容对齐到网格区域的中间
                stretch - 填充网格区域的高度 (这是默认值)
26、border
        border-width
            一般自定义
        border-style
            solid   实线
            dashed  虚线
        border-color
            十六进制/颜色名字  颜色
        border-image(3个参数)
            前提需要设置 宽度和样式
            原理:将图片以9宫格平均裁剪，然后对应border 左上角 正上 右上角（一一对应）

            图片             剪裁位置(不带单位，默认px)   重复性
            url(border.png)  27                         repeat
            
            图片:
            图片可以是相对路径或是绝对路径，也可以不使用图片，即border-image:none;
            
            重复性：
            round（平铺）repeat（重复）stretch（拉伸,拉伸）
            round会压缩（或伸展）图片大小使其正好在区域内显示
            repeat是不管三七二十一直接重复的，而且是居中重复，repeat从中间开始
        border-radius
            border-radius: 是一个缩写(斜杠前的是水平方向，斜杠后面的是垂直方向)
                           左上角水平圆角半径大小 右上角水平圆角半径大小 右下角水平圆角半径大小 左下角水平圆角半径大小
                          /左上角垂直圆角半径大小 右上角垂直圆角半径大小 右下角垂直圆角半径大小 左下角垂直圆角半径大小;

            border-radius: 一个大值特性，也就是值很大的时候，只会使用能够渲染的圆角大小渲染
                           一个等比例特性，就是水平半径和垂直半径的比例是恒定不变的
            总结  50%和一个最大值的区别
                  50%就是按宽高的比例对应上去,过超过50%按照等比特性，比例还是不变
                  若是设置一个很大的值，根据大值特性,每个值都按(宽,高取小的值)来计算


            可以单独设置一个角:(但顺序不能写错,先上下在左右值为反)
            1、可以单独指定border-radius某个角落的圆角大小，如border-top-left-radius: 40px
            2、支持最多两个值，必须使用空格分隔
               中间两个方位关键字,如top/left的前后顺序不能改变
               border-top-left-radius: 200px 100px;
            上面2点一综合，就可以得到如下的记忆公式：border-垂直-水平-radius: 水平 垂直(或者记忆:上下左右)


        border-shadow

    边框做三角形
        宽度为0左右边框白色或者透明
        width: 0px;
        height:20px;
        border-width:20px ; 
        border-style:solid; 
        border-color:#ff3300 #ffffff  #ffffff #ffffff
        









     */