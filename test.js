
// 需要对单引号做判断 appoint传入的'或者"
function appointSlice(data, target, appoint) {
  //data = form    target = 'action=' appoint = '\''
  let leng = data.indexOf(target);
  //从target开始查找
  let startIndex = data.indexOf(appoint, leng);
  // console.log(startIndex,leng)

  let startNext = data.indexOf(appoint, startIndex + 1);
  let sliceData = data.slice(startIndex + 1, startNext);
  return sliceData;
};

//截取一段 数据 data  起点 target1 结束点target2
function sliceData(data, target1, target2) {
  let target = data.indexOf(target1)
  let targetLenght = target1.length
  //截取起始位子
  let targetStart = target + targetLenght
  // 结束位子
  let targetEnd = data.indexOf(target2, targetStart)

  let sliceData = data.slice(targetStart, targetEnd)
  // console.log('sliceData', targetStart, targetEnd)
  return sliceData
}

let str = `http:weq-qe-qwe-123-target='12asdsa3'$12654`

function slice(str,target){
  let rg = new RegExp(`${target}\=\'([A-Z0-9a-z]{1,})`)
  str = str.match(rg)
  return str
}
let a = slice(str,'target')
console.log(a)
let rs = appointSlice(str,'target',"'")

console.log(rs)