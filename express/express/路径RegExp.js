let configPath = '/user/:name/:id';

let realPath = '/user/1/2';

// 就正则 提取 {name:1,id:2}

let parmas = [];

let regStr = configPath.replace(/:([^\/]*)/g,function(...arg){
  console.log(arg)
  parmas.push(arguments[1])
  return '([^\/]*)'
})

let reg = new RegExp(regStr)

let [,...args]  = realPath.match(reg);

// path-to-RegExp
//
let memo =parmas.reduce((memo,key,index)=> (memo[key] = args[index],memo),{})
console.log(memo)
/* 逗号运算符
  let test = 1,2,3
  1,2,3都会计算 返回3
  console.log(test) // 3
*/