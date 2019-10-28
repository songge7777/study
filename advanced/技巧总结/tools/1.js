// let arr = [];
// let n = 18;
//1-n 取中间的随机值
// Math.round(Math.random()*(n-1)+1)

// let rs = []
// function fn(nn,arr=[]){
//     if(arr.length == 0){
//         for(var i=1;i<=nn;i++){
//             arr.push(i)
//         }
//     }
//     let randomNum = Math.round(Math.random()*(nn-1)+1)
//     let a = arr.splice(randomNum-1,1).join()
//     rs.push(a)
//     nn--
//     if(nn == 0){
//         console.log(rs)
//         return 
//     }
//      fn(nn,arr)
// }

// fn(4)

// let rs = []
// function fn(nn,arr=[]){
//     if(arr.length == 0){
//         for(var i=1;i<=nn;i++){
//             arr.push(i)
//         }
//     }
//     let a =  arr.reduce((pre,next,index,target)=>{
//         console.log(pre,next,index,target)
//         return pre+`a`
//     },0)
//     console.log('a',a)
//     console.log('arr',arr)
// }
// console.log(fn(4))

// function a(arr){
//     let n = [];
//     for(let i=0;i<arr.length;i++){
//         console.log('arr',arr)
//         let s = Math.floor(Math.random()*arr.length)
//         n.push(arr[s])
//         arr.splice(s,1)
//     }
//     return n;
// }

// console.log(a([1,2,3,4,5]))


// function fn(nn,arr=[]){
//     let rs = []
//     for(let i=1;i<=nn;i++){
//         arr.push(i)
//     }
//     let length = nn
//     for(let k=0;k<length;k++){
//         let randomNum = Math.round(Math.random()*(nn-1)+1)
//         let a = arr.splice(randomNum-1,1).join()
//         rs.push(a)
//         nn--
//     }
//     console.log(rs)
// }

// fn(4)


function fn(arr){
    arr = [...(new Set(arr))]
    let length = arr.length
    let nn = length
    let rs = []
    for(let k=0;k<length;k++){
        let randomNum = Math.round(Math.random()*(nn-1)+1)
        let a = arr.splice(randomNum-1,1).join()
        rs.push(a)
        nn--
    }
    console.log(rs)
}

fn([1,2,3,4,3,2])


// let s = [1,2,3,2,1,]
// let a = new Set(s)
// console.log([...a])


var data = [
    {name : '阿斯顿4',value:29},
    {name : '发生四点2',value:11},
    {name : 'asdas3',value:22},
    {name : 'asdas1',value:1},
    {name : 'asdas5',value:239},
]
var a = {
    "阿斯顿":[123123],
    '发生四点':[213435],
    "gd给对方":['213421'],
    "g儿童":['asda']
    
}


data.sort((a,b)=>{
    return a.value - b.value
})

   let rs = data.map((item)=>{
        let obj = {}
        obj[item.name] = geoCoordMap[item.name]
        return obj
    })
console.log(rs)