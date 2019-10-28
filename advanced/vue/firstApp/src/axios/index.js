import axios from 'axios'; 



axios.interceptors.request.use(function(config){
  console.log('请求',config)
  let allCookies = document.cookie

  config.url ='/api'+config.url
  // config.headers={
  //   token:'123'
  // }
  return config;
})

axios.interceptors.response.use(function(res){
  console.log('响应',res)
  let allCookies = document.cookie
  if(!allCookies){
    location.href='http://localhost:8080/#/login'
  }
  console.log('allCookies=>',allCookies)
  if(res.data.code == 1){
    return res.data
  }
  return Promise.reject('异常')
})

export default axios
