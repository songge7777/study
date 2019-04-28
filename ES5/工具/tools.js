
/**
 * 字符串截取处理
 */

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
// 需要对单引号做判断 appoint传入的'或者"
let str = `dasyg ad12 213  sd='dasd123'$ ds`

function splice(data, target, appoint) {
  let rg = new RegExp(`${target}\'([A-Z0-9a-z]{1,})`)
  console.log(rg)
  let a =  data.match(rg)
  console.log(a)
}

// splice(str, 'sd=',"'") 

/**
 * 判断字符串是否存在
 */
  function fn (urlReg,url){
   return  urlReg.test(url)
  }
  let urlReg = /\d/g ;
  let url = 'http:www.132.com'
  let a =  fn(urlReg,url)
  console.log(a)

/**
 * 获取字符串=后面的内容 数字和字母或者null 一个至多个
 */
  function fn (urlReg,url){
    let ma = url.match(urlReg)
    if(!ma){
      console.log('数据有问题')
    }
    // match 返回的第二个数据对应 正则第一个小口号 (多个括号一次对应)
    return ma[1]
  }
  let url = `http:wwww.sda.data=123?d`
  let urlReg = /data\=([A-Znull0-9a-z]{1,})/
  fn(urlReg,url)


/**
 * sleep方法封装
 */
function sleep_wait(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },ms)
  })
}
//用法
let is_loaded = true
let fn =async ()=>{
  console.log('---------')
  while(is_loaded){
    await sleep_wait(1000)
    console.log('一直走')
  }
}
fn()
let a = setInterval(()=>{
  is_loaded = !is_loaded
  clearInterval(a)
},5000)

