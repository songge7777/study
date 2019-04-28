/*
    1、vh 相对视口的高度(与宽无关) 视口被均分为100单位的vh
        5vh 纪实 相对视口的 5%
    2、居中
        position:absolute 
        top:50%
        left:50%
        transform:tanslate(-50%,-50%)
    3、video.js 
        播放按钮默认是左上位子
        加class='vjs-big-play-centered' 就可以居中
    4、text-align:justify 不起作用
        处理
        1、text-align-last:justify
        2、增加一个伪元素
        元素:after {
                content:'';
                width: 100%;
                display: inline-block;
                overflow: hidden;
                height: 0;
            }
    5、meta viewport
        详解
        https://www.cnblogs.com/2050/p/3877280.html  
        
        1，
            layout viewport   网页布局的区域
            获取 
            layout viewport的宽度可以通过 document.documentElement.clientWidth 来获取
        2，
            visual viewport 设备区域
        3，
            ideal viewport 理想的区域

    6、css text 可以设置负值
            当字体高度大于本身的行高  字体会落在行高的中分线
            当行高大于字体本身的高度  字体会在行高内居中
            行高变大变小 顶部位子不变  底部缩放  字体跟着移动
    7、生成二维码：https://cli.im/url
    8、浮动本职破坏 inline-box 高度
        清除浮动原理：添加一个伪元素 随便设置的内容 设置为块 在清除两侧的浮动 将元素本身高度归零内容隐藏 
                .div:after{
                    display:block; 
                    content:'clear'; 
                    clear:both; 
                    line-height:0; 
                    visibility:hidden;
                    }
    9、网格布局
        display:flex
        横 grid-template-rows : 每行的值（100px 100px 100px）简写 repeat(3,100px) 3代表个数 100px代表值
        纵 grid-template-columns ： 每纵的值（100px 100px 100px）
        
        横/纵简写 grid-template:repeat(3,100px)/repeat(3,100px)

        中间的间隔 grid-gap:2px
        
        换位子
        grid-row-start:1;
        grid-row-end: 2;
            grid-column-start: 2;
            grid-column-end: 3;
        简写
        grid-row:1/2
        grid-column:2/3
        在简写
        grid-area: 1/2（1代表横 2代表第几个） 
        （如果指定了4个值，grid-row-start 会被设为第一个值，grid-column-start 为第二个值， grid-row-end 为第三个值，grid-column-end 为第四个值。）
        grid-template-areas 通过引用 grid-area 属性指定的 网格区域(Grid Area) 名称来定义网格模板
                grid-template-rows和grid-template-columns 是指定横纵 grid-template-areas直接指定区域

        <section id="page">
            <header>Header</header>
            <nav>Navigation</nav>
            <main>Main area</main>
            <footer>Footer</footer>
        </section>
        #page {
            display: grid;
            width: 100%;
            height: 250px;
            grid-template-areas: "head head"
                                "nav  main"
                                "nav  foot";
            grid-template-rows: 50px 1fr 30px;
            grid-template-columns: 150px 1fr;
        }
        #page > header {
            grid-area: head;
            background-color: #8ca0ff;
        }

        #page > nav {
            grid-area: nav;
            background-color: #ffa08c;
        }

        #page > main {
            grid-area: main;
            background-color: #ffff64;
        }

        #page > footer {
            grid-area: foot;
            background-color: #8cffa0;
        }

        网格间距  grid-gap(总的) grid-column-gap(纵)  grid-row-gap(横)
    10、
        user-select : none | text | all | element
        none 文本不能被选中
        text 可以选中
        all 当所有内容作为一个整体时可以被选择 
            如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。
        element 可以选择文本，但选择范围受元素边界的约束
    11、
      border-image: 3个参数 (第一个地址，截取图片的宽度，展开方式)

      截取图片的宽度:一个参数就是 都截取一样  四个参数就分别截取上下左右
          注:左右截取的值不能大于等于宽,不然中间就没有值了

      展开方式:round(平铺) repeat(重复) stretch(拉伸，默认)
    12、
      border-radius 特性
      他的值为一个的时候 是一个综合值
      圆的水平和垂直 都一样  下面这个是针对椭圆
      
      border-radius:300px  ==  border-radius: 300px 300px 300px 300px/300px 300px 300px 300px;
      border-radius: 角水平圆角半径大小(左上,右上,右下角,左下)
              角垂直圆角半径大小(左上,右上,右下角,左下)

      比如一个border宽200px 高300px		
      大值特性   例:角左上水平值 大于 200px 只会按照200px 来计算

      等比例特性 例:水平值/角水平值 = 垂直值/角垂直值  
          当1： 宽度最大是200 给的角水平值也是200 
                那么角垂直给多少 垂直值就是多少
          当2： 宽度最大是200 给的角水平值是300	
                那么角垂直给Y   垂直值=300Y/200
          总结 水平值/水平高值 = 角水平值/角垂直值
    13、
      css 选择伪元素 中间不能有空格 有空格则给很多元素添加
    14、
      文字 超出部分的处理
      单行文本
        overflow: hidden;
        text-overflow:ellipsis;	
        white-space: nowrap;
      多行文本溢出
        display: -webkit-box;
              -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; //限制行数
        overflow: hidden;

    15、
        display:flex
        注意  flex-wrap:wrap (根据空间自动折行，一般情况单独设置 不要写在模板里面)
    16、
        flex 最后一行 左对齐问题
        首先看一个有几个元素  在末尾加上几个空的div 宽度等分
    17、
        在伪元素中  设置1px线 position:absolute margin-top有效 margin-bottom 无效
	
        在div 中的元素设置position: absolute;
        如果设置的是内联元素 会浮动到左上角
        如果是块元素 则隐藏在div元素的下面 通过margin-top:-20px 让其显示   
    18、
        在canvas中插入图片
            <canvas id="cvs"  width="1024" height="768" style="border:1px solid #ccc;margin:20px auto;display: block;">
                    当前浏览器不支持canvas
                    <!-- 如果浏览器支持canvas，则canvas标签里的内容不会显示出来 -->
                </canvas>
            <script>
                    //获取canvas元素
                    var cvs = document.getElementById("cvs");
                    //创建image对象
                    var imgObj = new Image();
                    imgObj.src = "http://images.cnblogs.com/cnblogs_com/html5test/359114/r_test.jpg";
                    //待图片加载完后，将其显示在canvas上
                    imgObj.onload = function(){
                            var ctx = cvs.getContext('2d');
                            ctx.drawImage(this, 0, 0);//this即是imgObj,保持图片的原始大小：470*480
                            //ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
                        }
            </script>

            base64 放在img上面要加前缀 
                img.src=`data:image/jpeg;base64,${this.url}`;
    19、
     
        文件上传 
        input 标签 type=file
            当文件上传的时候 触发onchange 事件  getFullPath(this) 事件名里面的this指的是当前的input标签
            this.files  接收上传的文件 this.files[0] 就是文件上传的内容  通过URL.createObjectURL 方法将
            他转换成一个流(赋值给src可以显示出来，通过 this.files[0].type 查看时啥类型)
                let blob =  URL.createObjectURL(obj.files[0])
                    newPreview.src = blob
                    console.log(blob)
     
    20、
        //输入框 当输入内容的时候  做限制 不是数字 为空
        <input type="text" autofocus="true" maxlength="3" onKeyUp="value=value.replace(/[^\d]/g,'')"  v-model="item.value1">.

    三栏布局 (左右)
    一、float
            <div class="div">
                <div class="div1">1</div>
                <div class="div2">2</div>
                <div class="div3">3</div>
                </div>

            html,body{
                    height: 100%;
                }
                .div{
                    height: 100%;
                }
                .div1,.div3{
                    width: 100px;
                    height: 100px;
                }
                .div1{
                    float: left;
                    background: red
                }
                .div2{
                    clear: both;
                    height: calc(100% - 200px);
                    background: springgreen
                }

                .div3{
                    float: left;
                    background: red
                }
                .div:after{
                    display:block; content:''; clear:both; line-height:0; visibility:hidden;
                    }
    二、绝对定位
        <div class="div">
            <div class="div1">1</div>
            <div class="div2">2</div>
            <div class="div3">3</div>
            </div>


        body,html{
            height: 100%;
        }
        .div{
            position: relative;
            height: 100%;
            
        }
        .div1,.div3{
            width: 100px;
            height: 100px;
        }
        .div1{
            background: red
        }
        .div2{
            position: absolute;
            top: 100px;
            bottom: 100px;
            background: springgreen
        }

        .div3{
            position: absolute;
            bottom: 0;
            background: red
        }
        
    三、flex
        <div class="div">
            <div class="div1">1</div>
            <div class="div2">2</div>
            <div class="div3">3</div>
        </div>
        body,html{
            height: 100%;
        }
        .div{
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        .div1,.div3{
            width: 100px;
            height: 100px;
        }
        .div1{
            background: red
        }
        .div2{
            width: 100px;
            flex: 1;
            background: springgreen
        }

        .div3{
            background: red
        }

    四、grid
        <div class="div">
            <div class="div1">1</div>
            <div class="div2">2</div>
            <div class="div3">3</div>
        </div>
        body,html{
            height: 100%;
        }
        .div{
            height: 100%;
            display: grid;
            grid-template-columns: 100px;
            grid-template-rows: 100px 1fr 100px
        }
        
        .div1{
            background: red
        }
        
        .div3{
            background: red
        }
    五、表格






*/