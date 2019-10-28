
<!-- d3.select 选中符合的第一个 -->
d3.select('css选择器')
.attr('属性','值')
.style('属性','值')
.text('修改文本值')
.append('p')

d3.select('css选择器')
.remove() //删除当前选中的元素

<!-- d3.selectAll 选中所有 -->
SVG 有一些预定义的形状元素，可被开发者使用和操作：














g是svg的一个容器

矩形 <rect>
rect 元素的 width 和 height 属性可定义矩形的高度和宽度
x y  代表位子
style 属性用来定义 CSS 属性
CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke 属性定义矩形边框的颜色

圆形 <circle>
cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)
r 属性定义圆的半径。

椭圆 <ellipse>
cx 属性定义圆点的 x 坐标
cy 属性定义圆点的 y 坐标
rx 属性定义水平半径
ry 属性定义垂直半径

线 <line>
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束

折线 <polyline>
<polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
style="fill:white;stroke:red;stroke-width:2"/>

多边形 <polygon>
<polygon points="220,100 300,210 170,250 123,234"
style="fill:#cccccc;
stroke:#000000;stroke-width:1"/>
points 属性定义多边形每个角的 x 和 y 坐标

路径 <path>
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath
<path d="M250 150 L150 350 L350 350 Z" />
它开始于位置 250 150，到达位置 150 350，然后从那里开始到 350 350，最后在 250 150 关闭路径。