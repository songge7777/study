// 正则上的方法
// exec 
// 查找匹配的数据  返回数组 第一个是匹配到的值 第二个是()里面匹配到的(没有就不显示) 第三个 匹配到的索引,若是没有就返回null
// g/lastIndex 在 多次执行 exec 才有效果,注意 在循环执行`reg.exec(str)`当没有匹配的时候 会返回null  若再次执行`reg.exec(str)`他会重头开始匹配, 全部循环建议用 while 
// $n(n代表1-9)/$&(使用的时候必须写成['$&']))都是 RegExp 的静态方法  $n 匹配()里面的一n个数  $&和RegExp.lastMatch 一样 匹配最后找到的字符串

/*
  let str = 'qwe123 qwe12q 1r2'
  let reg = /\w+/g;
  let rs = null;

  while (rs = reg.exec(str)) {
    console.log(rs[0], RegExp.$1, RegExp['$&'])
  }
*/

// test
// test 匹配查找  是否存在  有就返回true  没有就返回false
/*
  let str = 'qwe123 qwe12q 1r2'
  let reg = /\w+/g;

  let rs = reg.test(str)
  console.log('rs', rs)
*/

// 字符串的方法  可以使用正则
// search 查找匹配的位子 没有就返回 -1

/*
  let str = 'qwe123 qwe12q 1r2'
  let reg = /\w/g;
  let rs = str.search(reg, 2)
  console.log(rs, RegExp['$&'])
*/

// match
// 带g 是全局匹配 返回的是数组 匹配的所有数据 可以作为截取字符串(split(''))功能
// 不带g 返回数组 第一个是匹配到的值 第二个是()分组 的值(没有分组就没有这项返回值)  第三个索引
/*
  let str = 'q1q1 we123  qwe12q 1r2'
  let reg = /(\w\d)+/;
  let rs = str.match(reg)
  console.log(rs, RegExp.$1, RegExp.$2, RegExp['$&'])
*/

// replace()
// 匹配到的数据 进行替换, 第一个参数是字符串/正则，第二个是字符串/函数
// 函数的参数 第一个是匹配到的值 第二个是()分组的值 有多少个分组 参数就有多少个表示, 接着的参数是索引

let str = 'qwe23 qwe82q 1r2'
let rg = /\D(\d)/g
let rs = null
rs = str.replace(rg, ($1, $2, $3, $4) => {
  console.log('=>', $1, $2, $3, $4)
})
// console.log('rs', rs)
