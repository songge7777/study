/*
  跨文档消息
    XDM的核心是postMessage()
    作用:一个网页和iframe 进行传递
    发送:
    let dom = document.getElementById('myframe').contentWindow
    dom.postMessage('发送的消息',"origin")
    接受:
    window.onmessage=(e)=>{
      console.log('接受的数据',e.data)
      //向来源窗口发送回执
      e.source.postMessage('发送的消息','origin')
    }







*/