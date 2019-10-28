
// Buffer用于处理二进制数据流
// 实例类似 整数数组，大小固定

// 创建Buffer alloc安全 allocUnsafe不安全
// 1.Buffer.alloc(10)                 给固定的空间 默认用0填充
// 2.Buffer.alloc(10,1)               填充都是1
// 3.Buffer.allocUnsafe(10)           随机
// 4.Buffer.from([1,2,3])             长度是3 内容是1 2 3
// 5.Buffer.from('test')              74 65 73 74
// 6.Buffer.from('test','base64')     b5 eb 2d


// Buffer的方法
//1、 Buffer.byteLength 
// 中文是3字节  字母是1字节
//2、Buffer.isBuffer() 

//3、Buffer.concat()

// const Buf1 = Buffer.from('This')
// const Buf1 = Buffer.from('is')
// const Buf1 = Buffer.from('Buf')

// const buf = Buffer.concat([Buf1,Buf2,Buf3])

// console.log(buf.toString())//字符串


// 实例化方法 buf = Buffe.from()
// const buf = Buffer.from('this is')
// console.log(buf.length)//7

// const buf2 = Buffer.alloc(10)
// console.log(buf2[0].length)//10

// const buf3 = Buffer.allocUnsafe(10)
// console.log(buf3[0].length)//10


// buf.fill()内容填充
// buf.fill('填的数','开始','结束')

// buf.equals('buf2')比较2个值是否相等
// buf.indexOf()   buf.copy('buf2','开始','结束')