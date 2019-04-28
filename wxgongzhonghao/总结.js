/*
	sdk
    url 注意/ #之前的路径都算
  moment
    moment().local() //本地时间 moment("2018-11-13T12:27:27.653")
    moment().format(String);//时间格式化
    String=>YMDhms
  MD5
    处理字符串的时候 把字符串的空格去除 string.trim()
  
  回复模板  例子  xml不能有空格
    <xml>
      <ToUserName><![CDATA[${ToUserName}]]></ToUserName> 
      <FromUserName><![CDATA[${FromUserName}]]></FromUserName> 
      <CreateTime>${new Date().getTime()}</CreateTime> 
      <MsgType><![CDATA[text]]></MsgType> 
      <Content><![CDATA[你好]]></Content> 
    </xml>

*/