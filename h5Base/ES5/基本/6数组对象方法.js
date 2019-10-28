/*
  es6 flat() 将数组打平
    例子
    let arr1 = [1, 2, [2, 3, 4]]
    console.log(arr1.flat())  
  数组
    记:4 3 1 3 5  （4个增加，替倒牌，forEach，连脚截，every one 重 过 index）
    push      添加末尾 
    unshift   添加前面
    pop       删除末尾
    shift     删除前面
    原数组变动 返回数组的长度
    (替 倒 牌(排))
    splice() 用新元素替换旧元素
      splice(start,deletecount,item)  start开始位子  deletecount 删除个数  item 替换内容
      0参数     直接返回空数组
      1个参数   截取数组，参数开始到结束
      2个参数   截取的个数
    原数变成更新后的数组  返回删除后的内容 是一个数组
    括号里面的都是包前不包后

    reverse() 颠倒数组
      返回值和原数组都 变成颠倒后数组
    原数组变动 返回变动后的数组

    Arr.sort((a,b)=>{ (----------------原数变动)
      //从小到大
      return a-b
      //从大到小
      return b-a
    })
    无参数 按照字符编码的顺序进行排序
    原数组变，返回新数组

    Arr.forEach((a1,a2,a3)=>{  (----------------原数组不变动)
          //a1 当前数组中的某个数据
          //a2 当前数据的索引
          //a3 数组本身
        })
    没有返回值

    (连 脚(join) 截)
    concat() 连接数组(----------------原数组不变动)
      用法 数组.concat(A1,A2) 合并多个，参数也可以是非数组
    原数组不变动 返回组合后的新数组


    join() 将数组所有的元素连接成一个字符串 (----------------原数组不变动)
      数组.join(a1)   a1就是一个连接符号，用他把数据连接成一个字符串
    原数组不变动 返回新值

    slice() 截取数组 (----------------原数组不变动)
      slice(begin,end) begin开始位子  end结束位子(可以用负数,-1是最小的,最后一个元素，但不包括，第一个参数要小于第二个参数的位子)
      0参数     直接返回空数组
      1个参数   截取数组，参数开始到结束
    原数组不变动 返回截取后的数组

    (every one 重 过 index)
    Arr.every((item,index)=>{
      //用来判断所有数组元素都满足一个条件
      if(item<4){
        return true
      }
    })
    原数组不变动 所有都满足<4 返回值true 否则false
    
    Arr.some 同上//判断所有数组元素中，只要一个元素满足条件即可
    原数组不变动 满足<4 返回值true 否则false


    Arr.map((item,index)=>{ (----------------原数组不变动)
      //将元素重新组装并返回
      return '<b>'+item+'</b>'
    })
    原数组不变，返回重装后的元素

    Arr.filter((item,index)=>{ (----------------原数组不变动)
      //通过某一个条件过滤数组
      if(item>=2){
        return true
      }
    })
    原数组不变，返回满足条件的元素

    Arr.findIndex(x)=>{ (----------------原数组不变动)
      return x == 4
    }
    原数组不变，返回满足条件的第一个元素下标

    Arr.reduce((pre,next,index,target)=>{
      
    })
    返回新的数组 原数组不变


      
  let url = '/user/:id/:name'; // 匹配的路径
  let str = '/user/1/2'; // 请求的路径

  let pathToRegExp = require('path-to-regexp')
  let keys = []
  // end:false 非严格匹配  true严格匹配
  // keys 用来存放 :里的参数  动态路径
  let reg = pathToRegExp(url,keys,{end:true});
  keys = keys.map(k => k.name);

  console.log(keys) // ['id','name']
  // let a = str.match(/\/user\/([A-Za-z0-9]{1,})\/([A-Za-z0-9]{1,})/)
  // console.log(a)

  let [,...args] = (str.match(reg))
  // console.log(str.match(reg))
  console.log(args) //[1,2]
  // keys=['id','name']
  // 通过reduce 转化成对象
  // 第一次执行 memo 是{}
  // 第二次执行 memo 里面添加一个'id'的key值 正好用索引取args 里面的值 返回执行下一步
  // 第三次执行 对象里面继续添加key值,最后返回包装好的对象

  let r = keys.reduce((memo,key,index)=>(memo[key]=args[index],memo),{})
  console.log(r)









  JSON对象的方法
    JSON.parse()     将JSON字符串转换为JSON对象
    JSON.stringify() 将JSON对象转换为JSON字符串

  Math对象的方法
    .ceil()   向上取整
    .floor()  向下取整
    .round()  四舍五入
    .abs()    绝对值
    .random() 取0-1直接的随机数[0,1)

    取随机数
      x-y
        Math.round(Math.random()*(y-x)+x)
      0-x
        Math.round(Math.random()*x)
      1-x
        Math.ceil(Math.random()*x)||1
      0-(x-1)
        Math.floor(Math.random()*x)




  字符
    indexOf() 查下标
    lastIndexOf() 从右往左找

    slice(开始位子,结束位子) 截取字符串
      包前不包后,可以放负，开始位子不能大于结束位子
    原字符串不变  返回截取后的
    
    split(分隔符,分割成数组的个数) 用指定的分隔符把字符串分隔成数组
      一个参数都没有和一个空格字符的话，会把整个字符串作为数组中的一个数据
    
    trim() 去掉首空格
    toLowerCase() 大写变小写
    toupperCase() 小写变大写

    substring(开始位子，结束位子) 截取一段字符
      0参数,返回整个字符串
      1参数，从这个参数截到最后
      2参数，不包括最后一个参数
      返回截取后的字符串，原字符串不变
    与slice区别
      1、slice起始位子不能大于结束位子
         substring起始位子可大于结束位子，并会自动调换位子
      2、slice可放负数，substring不可放负数
    
    substr(开始,个数) 截取一段指定开始位子与个数的字符串
      0个参,返回整个字符串
      1个参，默认第一个参数到最后
      
    startsWith() 方法用于检测字符串是否以指定的前缀开始。


    apply call
    一样的作用,第一个参数是对象,this改变成他,第二个是参数
      obj.apply(obj,[]) 使用情况,在函数里面,不确定参数多少的情况 用arguments(本身是数组)来代替
      obj.call(obj,'string')

    
    





*/

// 打平数组

let arr = [
  [{
    a: '1',
    children: { a: 'aa' }
  }],
  [{
    b: '2',
    children: { b: '22' }
  }],
  [{
    c: '3',
    children: { c: 'cc' }
  }],
]

function fn(children) {
  for (let i = 0; i < children.length; i++) {
    console.log('0', i, children.length)
    if (Array.isArray(children[i])) {
      console.log('1')
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

console.log(fn(arr))