// 冒泡
// function fn(arr){
//   let len = arr.length
//   for(let i=0; i < len; i++){
//     for(let j=0; j < len - i - 1; j++){
//       if(arr[j]>arr[j+1]){
//         let str = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = str
//       }
//     }
//   }
//   return arr
// }
// console.log(fn([3,5,6,2,1,5]))

// 柯里化
// function currie(...args){
//   let arr = [...args]
//     fBound = function(...args){
//       arr.push(...args)
//       return fBound
//     }
//     fBound.toString = ()=> arr.reduce((a,b)=>a+b)
//     return fBound
// }
//   let a =currie(1,2,3,4)(11)(22)
//   console.log(a+'')

  // fBound = function(...args){
  //     arr.push(...args)
  //     return fBound
  // }
  // fBound(()=>)


//   function fn(arr){
//     let len = arr.length
//     for(let i=0;i<len;i++){
//       let j = i + Math.floor(Math.random()*(len - i));
//       [arr[i],arr[j]] = [arr[j],arr[i]] 
//     }
//     return arr
//   }

//   let arr = [1,2,3,4,5,6,7]
// console.log(fn(arr))


// let a = [2,1,4,2,3,5,8]
// let len = a.length
// let b = a.splice(len-1,1)
// console.log(b,a)

// let math = Math.random()*10
// for(let l=0;l<10;l++){
//   console.log((Math.random()*(3-1)).toString().slice(0,1))
// }

let a = ' abcd 1 '
let str = 'old123qweold12344'

let s = a.replace(3,'1')
let s1 = str.charAt(1)

// let s = a.split(' ').join('')
console.log(s,s.length)