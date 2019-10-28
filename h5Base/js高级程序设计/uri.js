let url = 'http://www.baidu.com/123 value.html#start'

function compilerUrl(url){
  return encodeURIComponent(url)
} 

function parserUrl(url){
  return  decodeURIComponent(url)
}
let a1 = url
for(var i=0;i<4;i++){
  a1 = compilerUrl(a1)
}
console.log(a1)
let b1 = a1;
let index=0;
function getUrl(url){
  if(url.indexOf('http:')>=0){
    console.log('url',url,index)
    return url
  }else{
    index++;
    let rs = parserUrl(url) 
    return getUrl(rs) 
  }
}
let a = getUrl(b1)
console.log(index,getUrl(b1))