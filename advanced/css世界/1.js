let array = [
  {
    id: 1,
    parent_id: 0,
    name: "四川省"
  },
  {
    id: 2,
    parent_id: 0,
    name: "广东省"
  },
  {
    id: 3,
    parent_id: 0,
    name: "江西省"
  },
  {
    id: 5,
    parent_id: 1,
    name: "成都市"
  },
  {
    id: 6,
    parent_id: 5,
    name: "锦江区"
  },
  {
    id: 7,
    parent_id: 6,
    name: "九眼桥"
  },
  {
    id: 8,
    parent_id: 6,
    name: "兰桂坊"
  },
  {
    id: 9,
    parent_id: 2,
    name: "东莞市"
  },
  {
    id: 10,
    parent_id: 9,
    name: "长安镇"
  },
  {
    id: 11,
    parent_id: 3,
    name: "南昌市"
  }
]

function fn(array){
  let map = {};
  let arr = []
  array.map(item=>{
    map[item.id] = item
  })
  // array.map(item=>{
  //   let parent_id = item.parent_id
  //   if(parent_id !== 0){
  //     console.log('parent_id',parent_id)
  //     map[parent_id].children? map[parent_id].children.push(item):map[parent_id].children = [item]
  //   }
  // })
  // for(let key of Object.values(map)){
  //   if(key.parent_id == 0){
  //     arr.push(key)
  //   }
  // }
  console.log(map)
}


fn(array)