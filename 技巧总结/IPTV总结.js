
/*
{{>toc}}

h1. iptv爬取制作流程

puppeteer 使用
  github: https://github.com/GoogleChrome/puppeteer
  使用文档: https://zhaoqize.github.io/puppeteer-api-zh_CN/#/

h3. 常用api:

<pre>

  注:以下page为当前页面实例,所有api基本都是异步操作

  1、等待页面加载完成触发这个函数，on每次都触发 once只触发一个 
  page.on('load',()=>{})

  2、获取当前页面的url
  page.url()
 
  3、node 和 浏览器页面 进行传值操作
     处理当前页面操作(进入js环境操作)，第二个参数是node环境下传进去
     第一个参数是一个函数 接收的参数就是data(传进来的)，函数内处理当前页面，
     同时可以返回 一个参数给node环境中
  page.evaluate((data)=>{
   //js环境中操作
  },data)
 
  4、获取页面的 内容
    page.content()

  5、截图, 具体配置看文档
        page.screenshot({
            path: 'screenshot.jpeg',
            type: 'jpeg',
            clip: {
              x: 0,
              y: 0,
              width: 1280,
              height: 720
            },
            encoding: "base64"
          })
  6、 全局修改属性
    将页面Authentication对象下的CTCSetConfig等方法改写
    page.evaluateOnNewDocument(()=>{
        Object.defineProperty(window, 'Authentication', {
          value: {
            CTCSetConfig(...agrs) {
              console.log('page.js-改写的方法回调', ...agrs)
            },
            CTCStartUpdate() {
              return;
            },
            CTCGetConfig() {
              console.log('CTCGetConfig')
            }
            // CTCGetAuthInfo(...agrs){
            //   console.log('CTCGetAuthInfo',...agrs)
            // }
          }
        }),
   })

   

  
</pre>


h3. 配置准备:

<pre>
   1、引入库 //在安装puppeteer 库的时候 会默认安装一个谷歌浏览器
     const puppeteer = require('puppeteer');
   2、初始化 
  (async () => {
    const  browser =await  puppeteer.launch({
                             headless: true,//默认true,是否开启浏览器(若开始，配置为false)
                             args: ['--no-sandbox', '--disable-setuid-sandbox'],//上线环境(在lunix运行)要配置这个
                           })
    const page =await browser.newPage()

    await page.setViewport({  //打开浏览器 大小配置
        width: 1920,
        height: 1080
    });
   
    // 注入全局方法,由于部分代码浏览器不能识别需要将他屏蔽掉
       或者 onkeydown按键处理 也提前在这儿做处理
       具体看lib/spiderAuto/iptvMocker2.js下的global() defaultKeyProcess()方法
    await global()

    let url = '要爬取的url地址'
    await page.goto(url)
    
    //在这里增加 控制按键 
    await defaultKeyProcess()
    

    //达到 页面后 可以进行一系列操作处理
  })();

  全局 加入按键关键代码
  此方法 要放在 page.evaluateOnNewDocument(()=>{})内
   Object.defineProperty(window, window, {
          value: (
            onkeydown = function (data) {
              if (data.keyCode == 13) {
                console.log('page.js-13')
              } else if (data.keyCode == 38) {
                let data = {
                  which: UP
                }
                grabEvent(data)
              } else if (data.keyCode == 40) {
                let data = {
                  which: DOWN
                }
                grabEvent(data)
              } else if (data.keyCode == 37) {
                let data = {
                  which: LEFT
                }
                grabEvent(data)
              } else if (data.keyCode == 39) {
                let data = {
                  which: RIGHT
                }
                grabEvent(data)
              } else if (data.keyCode == 8) {
                let data = {
                  which: BACK
                }
                grabEvent(data)
              }
            }
          )
        }),



</pre>


h3. IPTV auth过程(页面初始化到itpv首页)

<pre>

  1、在auth 爬取iptv主要文件目录  =>lib/spiderAuto/iptvMocker2.js  
     (以下涉及部分方法指向iptvMocker2.js代码)
     1、通过puppeteer的api  const hmtlDom =await page.content()   获取页面信息        

     2、得到的hmtlDom是一个字符串  可以截获

        let  key,userID,Mode,ChannelID,STBAdminStatus,MiniPlatform,FCCSupport,AudioADOn,DynamicAuthIP,action;
         下面是已知的参数   
          let IP = '192.168.1.155'
          let MAC = '00-01-6C-06-A6-29'
          let userId = '75720573'
          let stdId = '0010029900D04940000180A1D7F3599D'
          let password =keyFn('123456')
          let reserve = ''
          let EncryToken = crypt_des({
            alg: 'des-ede3', //3des-ecb  
            autoPad: true,
            key: `${cskey}`,
            plaintext: `${tmpRandom()}$${key}$${userId}$${stdId}$${IP}$${MAC}$${reserve}$CTC`,
            iv: null
          }).toLocaleUpperCase();

           下面是部分处理函数
          function keyFn(str) {
            if (str.length >= 24) {
               return str.substr(0, 24)
            } else {
               let leng = 24 - str.length
               let zeroString = '0'.repeat(leng)
               return str.toString().concat(zeroString)
            }
           }
        
         function crypt_des(param) {
           var key = new Buffer(param.key);
           var iv = new Buffer(param.iv ? param.iv : 0)
           var plaintext = param.plaintext
           var alg = param.alg
           var autoPad = param.autoPad

           //encrypt  
           var cipher = crypto.createCipheriv(alg, key, iv);
           cipher.setAutoPadding(autoPad) //default true      
           var ciph = cipher.update(plaintext, 'utf8', 'hex');
           ciph += cipher.final('hex');
           return ciph
         };

         function tmpRandom() {
           return `${(Math.random()*10000000).toString().substr(0,7)}`
         }

        3、通过上面处理得到一个对象

        let obj = {
          EncryToken,
          userID,
          Mode,
          ChannelID,
          STBAdminStatus,
          MiniPlatform,
          FCCSupport,
          AudioADOn,
          DynamicAuthIP,
          action
         };
         
         4、进入js环境 更改表单数据 提交

          await this.page.evaluate 是操作页面的方法

           // 下面这个方法 第一个参数是一个函数 操作dom 可以有获取dom里面的数据 返回出来 在node里面接收到
                           第二个是node环境传入到dom里面的参数
              作用是 修改页面dom表单 进行提交
           await this.page.evaluate(obj => {
            if (document.IptvAuthenticationForm) {
              document.IptvAuthenticationForm.authenticator.value = obj.EncryToken;
              document.IptvAuthenticationForm.userID.value = obj.userID;
              document.IptvAuthenticationForm.Mode.value = obj.Mode;
              document.IptvAuthenticationForm.ChannelID.value = obj.ChannelID;
              document.IptvAuthenticationForm.STBAdminStatus.value = obj.STBAdminStatus;
              document.IptvAuthenticationForm.MiniPlatform.value = obj.MiniPlatform;
              document.IptvAuthenticationForm.FCCSupport.value = obj.FCCSupport;
              document.IptvAuthenticationForm.AudioADOn.value = obj.AudioADOn;
              document.IptvAuthenticationForm.DynamicAuthIP.value = obj.DynamicAuthIP;
              document.IptvAuthenticationForm.action = obj.action;
              document.IptvAuthenticationForm.submit();
              return Promise.resolve(true);
             }
            }, obj)

        5、当提交表单后 页面经过几次跳转直接到到IPTV首页 在跳转中 获取直播列表
           //每次跳转都会执行这个方法
           page.on('load',()=>{
             //每次跳转都会执行这个方法，通过当前url的变化 判断是有直播列表数据 
               直播列表的url 会带'iptv3a/hdLogin' 关键字  
             if(page.url().indexOf('iptv3a/hdLogin')>0){
                // 获取 直播列表
                 let channels = await page.evaluate(() => {
                    //channels 是页面的一个对象  直接将他返回即可
                     return Promise.resolve(channels)
                });
                
              //得到的是一个数组  信息也很多  处理数组 获取需要的内容

                channels = channels.map(item => {
                      let newArr = {}
                      newArr['ChannelName'] = appointSlice(item, 'ChannelName=', '"');
                      newArr['ChannelURL'] = appointSlice(item, 'ChannelURL=', '"');
                      newArr['UserChannelID'] = appointSlice(item, 'UserChannelI', '"')
                    return newArr
                  });
              // 这里的 channels 就是处理好的直播列表数据

              }
           })

         6、判断是否到IPTV首页，在首页的大部分操作当前url是不变动的，都是通过内嵌的 iframe 切换
            接下来的页面远程控制 和 自动爬取数据 主要是通过 监听 iframe地址变化 和 监听 response响应
            跳转到首页做截图处理
          if(page.url().indexOf('frameset_builder')>-1){
           //运行到这里 即到达IPTV首页,
           //这里管截图处理，this.screenshot 是当前的一个存储变量
           //当图片要传给前端的时候 只需要获取this.screenshot的值 即可
          setInterval(async() => {
                 let r = await page.screenshot({
                 path: 'screenshot.jpeg',
                 type: 'jpeg',
                 clip: {
                   x: 0,
                   y: 0,
                   width: 1280,
                   height: 720
                 },
                 encoding: "base64"
               })
               this.screenshot = r
             }, 1000)
           }
         同时在这儿运行外面传递进来的函数(即监听不同的response  处理的事情)
          // pageProcessor 就是存储传递进来的 response处理函数 
          // 具体看lib/spiderAuto/iptvMocker2.js 里面的代码
        this.page.on('response', async (resp) => {
          if (!/\.jpg|\.png$/.test(resp.url())) {
            logger.info(`-  ${resp.url()} response`);
          }
          for (let i = 0; i < this.pageProcessor.length; i++) {
            let p = this.pageProcessor[i];
            if (p.urlReg.test(resp.url())) {
              if (p.onResponse) {
                await p.onResponse(resp.url(), resp, thz);
              }
            }
          }

        });
 

</pre>

h3. IPTV 爬取流程

<pre>

1、入口文件目录 => skc.js  
   在入口文件中 (以下方法对于skc.js代码)
       1、当socket连接成功后 就可以启动 puppeteer 工作
       2、初始化 用puppeteer创建的实例(iptvMock.init()方法)
       3、页面初始化完成后(进入页面最初的状态)，经过(iptv.auth()方法，
          里面有细节在下面单独列出)，页面认证跳转等操作到达IPTV播放首页，
       4、到达IPTV首页可以自动爬取节目列表数据和控制页面操作

</pre>

h3. 控制页面操作

<pre>
  主要是 上下左右、enter、goBack按键和获取播放信息等操作
  在入口文件 => skc.js
  
  流程:
    通过socket.on监听 前端发过来的按键 给iptv页面发送相同的指令，
    发送完成在更新截图(原本一秒钟会更新一次)
  //监视按键
    socket.on('key_board', async (key) => {
      switch (key.value) {
        case 'shang':
          iptv.moveUp(1)
          break;
        case 'xia':
          iptv.moveDown(1)
          break;
        case 'zuo':
          iptv.moveLeft(1)
          break;
        case 'you':
          iptv.moveRight(1)
          break;
        case 'enter':
          iptv.pressOkKey(1)
          break;
        case 'back':
          iptv.goBack()
          break;
      }
    });
    
      页面初始化完成  向iptv实例里面注入一些处理函数 
      具体 看skc.js 代码
      // 增加普通按钮
      iptv.addPageProcessor(/frame50\/vod_portal.jsp$/, null, vodOnResponse)
      // 首页阻止返回
      iptv.addPageProcessor(/bg\_index\_club\_new2/, null, preventBack)
      // 获取普通电视 --电影名字
      iptv.addPageProcessor(/detail\_type\/movie\/detail\_code/, null, getplayName)
      // 获取点播 --电影名字
      iptv.addPageProcessor(/get\_vod\_info/, null, getVodName)
      // 获取播放地址
      iptv.addPageProcessor(/get\_vod\_url\.jsp/, null, getPlayUrl)
      // 获取连续剧列表
      iptv.addPageProcessor(/get\_vod\_info\.jsp/, null, getSitcomPlayList)
      // 点击播放时候 换取播放地址
      iptv.addPageProcessor(/frame50\/ad_play.jsp\?adindex\=1&adcount\=/, null, exchangeForUrl)
      // 返回遇到错误的处理
      iptv.addPageProcessor(/5CYII\=/, null, isBackErrorProcessor)
      iptv.addPageProcessor(/http:\/\/222.68.210.43:8080\/static\/es\/entries\/shmgtv\.html/, null, isBackErrorProcessor)

</pre>

h3. 页面自动爬取(点播数据)

<pre>
    在入口文件 => index.js(以下代码参考index.js文件)
    初始化项目 
    let iptv = await iptvMock.init();
    到达IPTV首页 控制方向自动跑

    点播页面按键和首页按键方式不同 所以需要添加 按键
    iptv.addPageProcessor(/vod_portal.jsp$/, null, vodOnResponse);

    点播的位子 => 向右7 上 1 进enter 到达点播页面 开始自动分析 获取数据
    iptv.addPageProcessor(/get_vod_column.jsp\?columnId\=/, null, vodAuto.vodLevel1Response);

    点播页面自动爬取数据 核心逻辑都在 lib/spiderAuto/vodPageAuto.js
    vodLevel1Response()方法处理 第一栏的数据

    response响应的地址带'get_vod_list.jsp' 
    vodLevel2Response()方法处理 第二栏的数据


    
</pre>

*/


