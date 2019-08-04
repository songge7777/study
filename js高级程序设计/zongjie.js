/*
1、script 6个属性 
  async defer charset language src type
  script标签内 不能存在</script>字符串 可以加反斜杠转义

  script标签放到head中 js会等head中的js全部被下载和解析后在执行body
  所以一般放到 body内 加快显示时间

  derfer 延迟执行 遇到</html>才会执行,也就是页面都解析完毕后在运行,一般都是先后顺序执行,先于 DOMContentLoad 事件
  async 异步执行 立即下载 执行顺序不是先后 一定会在load事件前执行 可能会在 DOMContentLoad 事件前后执行
  他们两个只适应外部脚本
2、五种数据类型
  Undefined Null Boolean Number String
  typeof 
  未定义  undefined
  布尔值  boolean
  字符串  string
  数值    number
  对象和null object
  函数    function

  undefined 定义一个变量 没有赋值
  Null 赋值一个空对象指针
  用法 只要意在保存对象的变量还没有真正保存对象 就用null
  都是只有一个值的数据类型

  Boolean 数据类型转换
  数据类型        转换成true       转换成false
  Boolean          true              false
  String           非空              空字符串('')
  Number           非零(包括无穷大)   0和NaN
  Null             任何对象           null
  Undefined        没有               Undefined

  Number
    NaN 非数字的特殊值
      特点 任何NaN的操作都返回NaN
           NaN与任何值都不相等 包括自己
    isNaN() 将接收的值转换成数值 能返回fasle 否则true
    
    转换方式
      Number()适应任何类型
      parseInt() 下面2个专门把字符串转换成数值
      ParseFloat()
      
      Number转换
        Boolean值 true/1 false/0
        null  0
        nudefined NaN
        字符串 
          '001' => 1
          ''(空) => 0
          'asd' => NaN
          '123aaa' => NaN
        对象
          调用valueOf() 和toString()
      ParseInt转换 (第二个参数是进制  默认是10)
        '123aaa' => 123
        '' => NaN
        '22.5' => 22
      ParseFloat转换 最后保留2位小数
    
  String
    字符串的特点 一旦被创建 他们的值就不变 要是改变的话 原来的字符串要被销毁 然后再用新字段填充
    
    转换方式
      toString() 返回对应字符串的表现(数值 布尔 对象 字符串)
        null 和 undefined 没有这个方法
      String()
        啥都可以转换
        如果值有toString 则调用
        值是null 返回 'null' undefined 返回 'undefined'
  
  object
    每个对象都有的方法
    constructor 保存创建当前对象的函数
    hasOwnProperty(propertyName) 检查属性在对象实例中(而不是原型链中)
    toLocaleString() 返回对象的字符串表示 与执行环境有关系
    toString()
    ValueOf()
  
  一元操作符
    +(- 同理) 对应非数字会像Number()一样对值进行转换
    +'01' => 1
    + 'z' => NaN
    加法如果有一个操作数是字符串
      2个都是 就拼接起来
      只有一个 将另一个转换成字符串在拼接
    如果 是别的类型则调toString和valueOf 对于undefined和null 调用string
  
    逗号操作符
    var num = (1,2,3,4) //num==4
    
    if() 里面都会调用Boolean()转换

    函数的参数
      function fn(num1,num2){
      }
      fn(1,2)

      //当fn有传递值的情况下 num1,num2 和arguments 值永远保持同步
        当fn没有给值的时候 num1,num2 就是undefined  修改任意一个 他们值不同步

  检查类型
      typeof 一般用来检查 基本数据类型
        未定义  undefined
        布尔值  boolean
        字符串  string
        数值    number
        对象和null object
        函数    function
      数组
        Array.isArray(arr)
        if(value instanceod Array)// 需要环境
      
      创建对象
        1、let obj = new Object()
        2、person={
            name:'sg'
          }
        读取属性
          person.name/person['name']
      创建数组
        1、var colors = new Array(20)
        2、var colors = new Array(['red','blue'])
        利用length属性对数组进行增删
          var colors = new Array(['red','blue'])
          colors.length = 1 // blue就会被删除掉
          colors.length = 2 // ['red','undefined']
        转换方法
          toSting()会返回由数组中每个值的字符串形式拼接而成的一个逗号分隔的字符串
            也等同 join(',')方法 (join 接收undefined 或者空 和接收',' 是一样的)
            var c = ['red','blue']
            c.toString() //red,blue
          valueOf() 同样结果
          alert(c)  同样结论,alert要接收字符串参数 默认会调用toString
        数组方法
          栈方法(后进先出)
            push 将参数逐个添加到数组末尾,修改数组长度
            pop  删除末尾最后一项 减少length
          队列方法(先进先出)
            shift 
            unshift
          重排序方法
            reverse
            sort
              sort方法会调用每个数组项的toString(),比较得到的字符串
              sort((a,b)=>a-b) 第一个值位于第二个值前面 返回负数 第二个值位于第一个值前面返回正数 
          操作方法
            concat 连接 返回新的数组 原数组不变
            slice('startNumber','endNumber') 包前不包后 返回新的数组 原数组不变
            splice 
              删除 (0,2)从第0项开始 删除2个
              插入 (2,0,'item','item1') 第二项开始,删除0个,插入item和item1
              返回删除后的内容  原数组变化
          位置方法
            indexOf()和lastIndexOf()
            返回查找到的项在数组中的位置,没有查找到就返回-1,查找会用全等去比较
            第一个参数是要查找的值  第二个参数是查找的起始位置
          迭代方法
            every
            some  
              var num = [1,2,3,4,5]
              var everyRs = num.every((item,index,arrary)=>item>2) =>false
              var someRs = num.some((item,index,arrary)=>item>2) =>true
            filter
              var num = [1,2,3,4,5]
              var filterRs = num.filter((item,index,array)=> item>2) => [3,4,5]
            forEach
              var num = [1,2,3]
              num.forEach((item,index,array)=>{//执行某些操作})
            map
              var num = [1,2,3]
              var mapRs = num.map((item,index,array)=> item*2) => [2,4,6]
          归并方法
            reduce&&reduceRight
              他们接收4个参数:前一项,当前项,索引,数组对象
              var num = [1,2,3,4,5]
              num,reduce((pre,cur,index,array)=>{
                //若传递了第二个参数 即index从0开始 pre就是第一个  否则从1开始 cur就是第一个
              },{})
      Date 
        Date.parse()
          // 格式 
          //  月/日/年 => 6/13/2004
          //  2004-05-25T00:00:00 
        Date.UTC()
          //  年分,基于0月开始(0是一月,1是二月),小时基于0到23 
          //  年月是必须的
        new Date 接收的参数与Date.UTC 一样
        Date.now() 表示返回当前的毫秒数
          返回的都是毫秒数
        toLocaleString,toString,valueOf方法
          toLocaleString和toString大致一样的效果 返回时间
        valueOf方法 返回日期的毫秒数 可以用操作符来比较日期值
          var date1 = new Date(2007,0,1)
          var date2 = new Date(2007,1,1)
          alert(date1>date2) // false
        日期格式化
          toDateString 显示星期几、月、日、年
          toTimeString 时分秒和时区
          toUTCString 实现格式化完整的UTC日期
        方法
          getTime/setTime  同valueOf 返回毫秒数/设置毫秒数
          getFullYear/setFullYear 取得4位数的年份
          getMonth/setMonth 设置月份0开始 11表示十二月/设置超过11则增加年份
          getDate/setDate  设置日1开始 / 设置超过31则增加月份
          getDay/setDay 设置星期几
          getHours/setHours 返回日期的小时数0-23
          getMinutes/setMinutes 返回分0-59 
          getSeconds/setSeconds 返回秒
          getTimezoneOffset 返回本地时间与UTC时间相差分钟数
    正则
      创建 
        var pattern1 = /cat/g
        var pattern2 = new RegExp('cat','g')
        注意给RegExp 传递的是字符串,需要对特殊字符进行双重转义
                     new 对象里面传递的是字符串  直接写不是字符串
          字面量模式         等价的字符串
        /\[bc\]at/  =>  "\\[bc\\]at"
        /\d.\d{1,2}/  =>  "\\d.\\d{1,2}"
      
       标志
        g:表示应用所有字符串,而非在发现第一个匹配后立即停止
        i:表示不区分大小写
        m:表示多行模式,即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项
      属性
        global 布尔值,表示是否设置了g标志
        ignoreCase 布尔值,表示是否设置了i标志
        lastIndex 整数,表示开始搜索下一个匹配项的字符位置,从0开始
        multiline 布尔值 表示是否设置了m表示
        source 正则表达式的字符串表示
        var pattern = /\[bc\]at/i;
        console.lo(pattern.global) => false
        console.lo(pattern.ignoreCase) => true
        console.lo(pattern.multiline) => false 
        console.lo(pattern.lastIndex) => 0
        console.lo(pattern.source) => "\[bc\]at"
      方法
        exec 接收一个字符串参数 返回匹配的内容，或者没有匹配项情况下返回null
        返回的是array实例,记住不能随便加空格,没有捕获组则该数组只包含一项,捕获组就是中括号
          index 表示匹配项在字符串中的位置
          input 正则表达式的字符串
            let text = "mom and dad and bady"
            var p = /mom( and dad (and bady)?)?/gi
            var p1 = /nd/gi
            var ma = p.exec(text)
        若是不加g他每次只返回一个匹配项,每次调用exec则都会在字符串中继续查找新的匹配项索引的第一个就是匹配到的值
        若正则匹配项里面加()(即捕获组)则匹配所有满足的  如果带g他的index会有变化
        test 接收一个字符串参数 匹配到内容就返回true 否则就fasle
      toString方法 
        RegExp 和 字面量创建的 toString方法都返回正则表达式的字面量
      valueOf 返回正则表达式的本身 是一个对象

    函数
      内部属性
        this 看执行环境
        caller 这个是属性保存着调用当前函数的引用
          function outer(){
            inner() 
          }
          function inner(){
            alert(inner.caller)
            //console.log(arguments.callee.caller)

          }
          outer()
        arguments 类数组 包含传入函数中所有的参数
        arguments.callee callee是一个指针 指向拥有这个arguments对象的函数
          function factorial(num){
            if(num<-1)
              {
                return 1;
              } 
            else {
              retrun factorial(num-1)
              // 或者argumeng.callee(num-1)
            }
          } 
      函数的属性
        length 表示函数希望接收的命名参数的个数
        prototype 属性不可枚举
        call/apply/bind    
      
    string
      方法 访问字符串中特定的方法
        charAt()/charCodeAt() 都接收一个参数
        或者 用中括号加数字
      操作方法
        concat 连接
        slice/substr/substring
          slice和substring 2个参数起始位置
          substr 开始位子和个数
          负值
            slice会将负值与字符串长度相加
            substr 第一个加长度 第二个转换为0
            substring 负值变成0
          返回操作后的数字 原不变,若第二个不传 则将字符串末尾作为结束位置
        trim 删除前置及后缀的所有空格,然后返回结果,原数组不变
          非标准trimLeft和trimRight
        toLowerCase(转换成小写)和toUpperCase(转换成大写)/toLocalLowerCase和toLacalCase(针对特定的地区实现)
        localeCompare 比较2个字符串
          如果字符串在字母表中应该排在字符串参数之前,返回负数
          如果字符串等于另一个字符串,返回负数
          如果字符串在字母表中应该排在字符串参数之后,返回正数
      字符串匹配的方法
        match
          与exec参数啥都一样
          区别 
            match带g将匹配到的数组放在数组内返回(带不带捕获组都一样)
            exec带g只是index会有变化
        search
        replace(字符串/正则,字符串/函数)
          var text = "cat,bat,sat,fat"
          var rs = text.repalce("at","ond")
          // "cond,bat,sat,fat"
          var rs = text.repalce(/at/g,"ond")
          // "cond,bond,sond,fond"
        正则表达式 字符串内有一些特殊的字符
          $$  $
          $&  匹配模式的子字符串 与RegExp.lastMatch的值相同
          $n  匹配第n个捕获组的子字符串 n(0-9),如果正则表达式没有定义捕获组 则使用空字符串
          $nn 匹配第nn个捕获组的子字符串 nn(00-99)
    URI 
      Global对象 encodeURI 和 decodeURI 对URI进行编译 有效的URI不能包括空格  而他们就是对空格进行编码和解析
                encodeURIComponent 和 decodeURIComponent 则对任何非标准字符串进行编码
        var uri = "http://www.baidu.com/a b";
        console.log(encodeURI(uri)) // http://www.baidu.com/a%20b 
        console.log(encodeURIComponent(uri)) // http%3A%2F%2Fwww.baidu.com/a%20b 
    eval 是一个js解析器 接收一个参数 即要执行的js字符串
        eval("alert('hi')")
        eval 中创建的任何变量或函数都不会被提升
        但是在strict严格模式下 eval不能被赋值 && 外部访问不到eval中创建的任何变量
    Global 对象的属性
        undefined/NaN/infinity  
        Object/Array/Date/Error/RegExp
        String
        Number
        Boolean
        Function 
        js明确禁止给 undefined/NaN/infinity 赋值
    Math
      min&&max 方法用于确定一组数值的最大值和最小值
        var max = Math.max(3,5,1,22)
        console.log(max) // 22
      借助 apply
        var values = [3,5,1,22]
        var max = Math.max.apply(Math,apply)
      舍入方法
        Math.ceil(25.9) //26 向上舍入
        Math.floor(25.1) //25 向下舍入
        Math.round(25.9) //26 四舍五入
      random方法 返回0到1之间的数
        //获取2个数之间的任意数
        function selectFrom(lowerValue,upperValue){
          let choices = upperValue - lowerValue
          return Math.floor(Math.random()*choices + lowerValue)
        }
        selectFrom(2,10)
        //这个函数很有用 可以在数组中随机取一项
        let arr = ['red','green','blue','black']
        var color = arr[selectFrom(0,arr.length-1)]


          */

// let da = new Date()

console.log('12')