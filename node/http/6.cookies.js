

let a = [
  {
    child:[1,2,3],
    id:1
  },
  {
    child:[1,2,3],
    id:1
  }  
]
a.map(item=>{
  item.child.push(111)
})
console.log(a)