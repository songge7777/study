// var message  ;
// console.log(message) 
// //age未定义  
// //  console.log(age)
// console.log(typeof message )
// console.log(Number.MIN_VALUE)

// console.log(Number('a123dss'),parseInt('.123aa123123'))

let a={
  name : 'sg',
  valueOf(){
    console.log('222')
    return 2
  },
  toString(){
    console.log('111')
    return 1
  }
}
function fn() {
  return 20;
}
// alert(a)
console.log(fn+a)