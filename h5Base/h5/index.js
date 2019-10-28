// // // var a = ()=>{
// // //   console.log('1')
// // // }
// // a()

// // function a(){
// //   console.log('2')
// // }


// // function a(){
// //   console.log('3')
// // }

// let data = [
//   {
//     name:'four',
//     age:4
//   },
//   {
//     name:'one',
//     age:1
//   },
//   {
//     name:'three',
//     age:3
//   },
//   {
//     name:'two',
//     age:2
//   }

//  ]
// function createFunction(prop){
  
//   return function(obj1,obj2){
//     var  value1 = obj1[prop]
//     var  value2 = obj2[prop]
//     // return value2-value1
//     if(value1 < value2){
//       return -1
//     }else if(value2 < value1){
//       return 1
//     }else{
//       return 0
//     }
//   }
// }

// data.sort(createFunction('age'))
// console.log(data)

// function fn (){
//   console.log('fn')
// }
// fn()
// var a = fn;
// a()
// fn = function (){
//   console.log('fn1')
// }
// fn()
// a()

// console.log(parseInt(0)) 
class A{
  constructor(){
    this.a = 1
  }
}
A.prototype.b = 'b'
let a = new A
// a.prototype.b = 'b' 
// a.a = 2
console.log(a.hasOwnProperty('a'),a.b) 