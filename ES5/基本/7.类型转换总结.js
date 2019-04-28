/*
  数据类型转换
      https://blog.csdn.net/x_jagger/article/details/73430959
  toString()返回一个表示该对象的字符串
      每个对象都有一个 toString() 方法，当对象被表示为文本值时或者当以期望字符串的方式引用对象时，该方法被自动调用。
    对对象x，toString() 返回 “[object type]”,其中type是对象类型。
    如果x不是对象，toString() 返回x应有的文本值(简单这个理解))
      可以自己定义一个对象的toString()方法来覆盖它原来的方法。这个方法不能含有参数，方法里必须return一个值。
  valueOf() 方法返回指定对象的原始值 
    每一个内置对象都会覆盖这个方法为了返回一个合理的值，如果对象没有原始值，valueOf() 就会返回对象自身





例子
  []+[]  ''
  {}+{}  [object Object][object Object] -> 看成2个字符串相加
  {}+[]  0 -> {}被看成es6一个块级作用域 最后变成 +[] 转换为数值 即为0
  []+{}  [object Object] -> [] 经过valueOf() 变成 [] 在经过 toString() 变成''(空)  {} 同理 最后变成 [object Object]
   +{}    NaN  + 强制转换成数值
   +[]    0  + 强制转换成数值
   -[]    -0 - 强制转换成数值

 (一般情况 先调valueOf() 不是一个基本类型 则在调 toString()  特例   alert , [x].join(“”) 均调用toString() ,如果强制改写内置方法 返回的不是一个原始值 就报错)

//  一般来说，对象到字符串的转换经过了如下步骤：

// 1.如果对象具有toString()方法，则调用这个方法。如果它返回一个原始值，js将这个值转换成字符串，并返还这个字符串结果。

// 2.如果对象没有toString()方法，或者这个方法并不返回一个原始值，那么js将调用valueOf()方法。

// 3.否则，js无法从toString()或者valueOf()获得一个原始值，因此这时它将抛出一个类型错误异常。

// 一般来说，对象到数字的转换过程中，js做了同样类似的事情，但这里它会首先尝试使用valueOf()方法：

// 1.如果对象具有valueOf()方法，后者返回一个原始值，则js将这个原始值转换成数字，并返回这个数字。

// 2.否则，如果对象具有toString()方法，后者返回一个原始值，则js将转换并返回。

// （首先js转换成相应的字符串原始值，再继续将这个原始值转换成相应的数字类型，再返回数字）

// 3.否则，js抛出一个类型错误异常。


// 注意  1
// "-"减号运算符把两个操作数都转换成数字  
// "+"两边其中一个是对象 "+"运算符将对象转换成原始值  "==" ">" "<" 一样
// var date = new Date(); 
// var date_string = date.toString(); 
// var date_value = date.valueOf(); 
// alert(date == date_string); //true
// alert(date == date_value); //false

// var now = new Date();
// console.log(now);  // Date {Sat Apr 04 2015 13:21:08 GMT+0800}
// console.log(typeof (now+1));  //string
// console.log((now+1));  //Sat Apr 04 2015 13:21:08 GMT+08001
// console.log(typeof (now-1));  //number
// console.log((now-1));  // 1428124868474
// console.log(now == now.toString());  //true
// console.log(now > now -1); //true



  http://www.codes51.com/article/detail_388155_3.html
  {}+[] ：根据语句优先原则  {}被理解为复合语句块，因此相当于 {}; +[]   。[]为空，结果为0

  console.log({}+[]) : js把()中的语句当做一个表达式，因此{}不能被理解为语句块，而被理解为对象直接量,因此结果为对象

  其实 console.log({}+[])和[]+{}的结果相同，原理相同，{}作为右值出现被理解为对象直接量

  {}+[] 和[]+{}结果不相同，是不是很神奇。
*/  