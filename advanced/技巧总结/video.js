/*
  chrome://settings/content 
  查看 chrome  的插件

  video flash 插件问题报错问题
  http://www.mamicode.com/info-detail-2518698.html



  video 播放问题:
  The media could not be loaded, either because the …rk failed or 
  because the format is not supported

  问题是 播放组件src写死了 以为是动态的 所有等待播放的时候这个流早就停止了


  通过网络发送数据的时候 (数据格式不对的情况下 发送过去的会是一个空的)  直接发对象 最好用JSON.stringfiy 包裹


  获取的流可以播放 页面不报错 就是不能点播放 查看下video类型是否属于 

*/