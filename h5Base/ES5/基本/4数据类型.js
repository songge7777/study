/*
 
  1、数据类型(5个基本,1个复杂)
    基本:Null Undefined Boolean Number String 
    复杂:Object
    
    typeof 返回6类值(返回的都是小写)
    "undefined"      未定义得值
    "boolean"        布尔值
    "string"         字符串
    "number"         数值
    "object"         对象或者null    null被认为是空对象的引用
    "function"       函数           typeof console.log  就是function 
    
    Undefined    
    var message  console.log(message) =>undefined
    //age未定义   console.log(age)=>报错
    console.log(typeof message )=>undefined
    console.log(typeof age )=>undefined

    Null
    var car = null   console.log(typeof car) =>"object"
    一般定义变量在将来用于保存对象，最好给他赋值null,即一个空对象
    undefined == null  =>true

    Boolean
    Boolean类型的值是小写,Ture和False是变量
    Boolean()将值转换成Boolean值
                true               false
    String    非空字符串            ""(空)
    Number    非零(包括无穷大)      0和NAN
    Object    任何对象              null
    Undefined --                 undefined

    Number 
      e或者E =>  123e3  123*1o的3次方
                123e-3  123*0.1的3次方
      浮点:  0.1+0.3 =0.300000...04 (特例)
      最大值 Number.MAX_VALUE === 1.7976931348623157e+308 超过最大值 显示 Infinity
      最小值 Number.MIN_VALUE ===  5e-324 超过最小值 显示 -Infinity
      超过最大值或最小值 无法进行计算  isFinite() 判断是否在最小最小值之间

      NaN 非数值是一个特殊的数值
        2特点 任何涉及NaN操作都会返回NaN
              NaN不等于任何数值(包括自己)
        isNaN() 判断
        isNaN(NaN)=>    true
        isNaN(true)=>   false  true被转换成1 
        isNaN('blue')=> true   不能转换成数值
        isNaN('123')=>  true
      Number() 转换为数值
      parseInt() 转换成整数 会忽略空格，直到找到第一个非空字符,若有字母就是NAN 数字+字母或者小数点 则取前面整数 
      parseFloat() 转化成浮点数 跟上面类似 
        Number('') 0
        parseInt('') NaN
        Number('123dss') NaN   
        parseInt('123aa') 123 
      
    String
      对象x.toString() 返回 “[object type]”,其中type是对象类型
      如果x不是对象，toString() 返回x应有的文本值(不是单纯的加”“)
      把一个值转换成String  toString()
    valueOf() 方法返回指定对象的原始值 (数值、字符串和布尔值)

  数据类型总结：
    显示类型转换: Number()  String() Boolean()
    Number() 
      数值: 转换后还是原来的值
      字符串: 1如果可以被解析成数值，转换成相对的数值，否则得到的是NaN，空就是0
      布尔值: true>1  false>0
      undefined: 转换成NaN
      null: 转换成0
    
      对象:(valueOf() 方法返回指定对象的原始值 (数值、字符串和布尔值))
        先调用对象自身的valueOf方法,如果该方法返回原始类型值(数值,字符串,布尔值)
        则直接对该值使用Number方法,不再进行后续步骤

        如果valueOf方法返回复合类型值,在调用对象自身的toString(),如果toString
        返回原始类型的值,则对该值使用Number(),不再进行后续步骤

        如果toString()返回的是复合类型的值,则报错
      

    String()
      数值:对应的字符串
      字符串:原来的值
      布尔值:true->'true'  false->'false'
      undefined: 'undefined'
      null: 'null'

      对象:(valueOf() 方法返回指定对象的原始值 (数值、字符串和布尔值))
        先调用对象自身的如果toString方法,如果该方法返回原始类型值(数值,字符串,布尔值)
        则直接对该值使用String方法,不再进行后续步骤

        如果toString方法返回复合类型值,在调用对象自身的valueOf(),如果valueOf
        返回原始类型的值,则对该值使用String(),不再进行后续步骤

        如果valueOf()返回的是复合类型的值,则报错

    alert() 默认调里面toString()
    valueOf方法总是会被优先调用的
    数据的转换
    所有对象继承了两个转换方法：

    第一个是toString(),它的作用是返回一个反映这个对象的字符串
    第二个是valueOf(),它的作用是返回它相应的原始值
    //  值             转换为：字符串       数字         布尔值        对象          
    // undefined       "undefined"         NaN          false
    // null            "null"               0           false

    // true            "true"               1 
    // false           "false"              0

    // ""(空字符串)                          0           false
    // "1.2"(非空，数字)                     1.2         true
    // "one"（非空，非数字）                  NaN         false

    // 0                  "0"                           false
    // -0                 "0"                           false
    // NaN                "NaN"                         false
    // Infinity           "Infinity"                    true
    // -Infinity          "-Infinity"                   true
    // 1                  "1"                           true

    // {}(任意对象)                                      true
    // [](任意数组)         ""                  0        true
    // [9](1个数字元素)     "9"                 9        true
    // ['a'](其他数组)      使用join()方法      NaN       true
    // function(){}(任意函数)                  NaN       true

    // valueOf()  每个JavaScript固有对象的 valueOf 方法定义不同。

      // Array      返回本身
      // Boolean    Boolean值
      // Date       时间戳
      // Function   函数本身
      // Number     数字值
      // Object     对象本身。这是默认情况
      // String     字符串值
      // Math 和 Error 对象没有 valueOf 方法。
 */