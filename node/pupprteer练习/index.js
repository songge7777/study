const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone = devices['iPhone 6'];
(async () => {
  
  let url = "https://juejin.im/timeline"
  let fs = require('fs')
  const browser = await puppeteer.launch({
    // headless:true,
    headless:false,

  });
  //newPage 创建一个实例
  const page = await browser.newPage();
  // await page.emulate(iPhone);


  await page.goto(url);
  //登录
  await page.click('.login')
    
    //输入
    await page.click('[name=loginPhoneOrEmail]')
    await page.keyboard.sendCharacter('17683889217')
    await page.click('[name=loginPassword]')
    await page.keyboard.sendCharacter('Sg920322')

    await page.click('[class=btn]')
    // await page.once('load',async ()=>{
      console.log('load')
      //等待url跳转 最后一条response 响应 
      await page.waitForNavigation()
      await page.click('.nav-list .menu',{delay:100})
      await page.click('.nav-menu-item .fw-bought',{delay:500})

      //等待 被点击的class 出现
      await page.waitForSelector('.book-list .item .content-box',2000)
      await page.click('.book-list .item .content-box',{delay:500})
  
      //等待 is-buy button--buy
      await page.waitFor('.is-buy .button--buy')
      await page.click('.is-buy .button--buy',{delay:500})
      
      //等待
      await page.waitFor('.section-content')
      //截取 打印的html
      // let pdfhtml = await page.evaluate((data)=>{
      //   let res = document.querySelector('.section-content').innerHTML
      //   console.log('12322222222222222',res)
      //   return res
      // },123)
      let a = await page.$$eval('figure img',(items)=>{
        items.forEach(item=>{
          item.src = item.getAttribute('data-src')
        })
        return items
      })
      console.log('--',a)
        await page.pdf({
                path: 'as.pdf',  
                format: 'A4',
            })

      // function fnJump(data){
      //   console.log('--------------------data',data.url().includes('api.growingio.com/v2/89669d96c88aefbc'))
      //   if(data.url().includes('api.growingio.com/v2/89669d96c88aefbc')){
      //     console.log('跳')
      //     page.click('.content-box .info-box',{delay:500})
      //   }
      // }
      // await page.on('response',fnJump)
      // await console.log('完成 -')
      // page.removeListener('response',fnJump)

// content-box book info-box
    // })
  //点击头像 .nav-list .menu

  //点击已购买 .nav-menu-item  .fw-bought


/*
   keyboard    
      dwon(key,[text:'输入的文本'])
           第二个参数可选
           这个事件触发后 要调下 keyboard.up()
      press(key,[text:'输入的文本',delay:'延迟毫秒']) 
           是 keyboard.dwon()和keyboard.up()快捷方式
      sendCharacter(char) 
          //分发一个 keypress 和 input 事件。该方法不会发送 keydown 或 keyup 事件。
           page.keyboard.sendCharacter('嗨'); 用来输入内容的
      type(text, options)
          keyboard.type() 输入内容
            // 每个字符输入后都会触发 keydown, keypress/input 和 keyup 事件
            // keyboard.type('#mytextarea', 'Hello'); // 立即输入
            // keyboard.type('#mytextarea', 'World', {delay: 100}); // 输入变慢，像一个用户
      up(key)
        keyboard.up(key)
*/
 
  

    // a.forEach(a1=>{
    //   console.log(a1)
    // })
  
  // await page.evaluate(()=>{
  //   console.log('---------',_hmt)
  // })

  // await page.on('console', msg => {
  //   for (let i = 0; i < msg.args().length; ++i)
  //     console.log(`${i}: ${msg.args()[i]}`); // 译者注：这句话的效果是打印到你的代码的控制台
  // });
  // await page.on('console',msg=>{
  //   console.log('-----',msg)
  // })
  // await page.addScriptTag({
    
  // })


  // let b = await page.$eval('#kw',(el)=>{
  //   el.value = 123
  //   return 123
  // })
  // await console.log(b) 

  // let a = await page.evaluate(() =>{
  //   addPraise();
  //   console.log(addPraise)
  //   return '123'
  // }); // 这个代码表示在页面实例中执行了console.log。如果没有监听console事件，这里的输出不会出现在你的控制台
  // await browser.close();
})();

/*
    puppeteer.launch 启动浏览器 
      options 
        headless(boolean)         是否无头模式运行(默认ture看不到浏览器)
        slowMo(number)            将 Puppeteer 操作减少指定的毫秒数
        defaultViewport(Object)   为每个页面设置一个默认视口大小。默认是 800x600,如果为 null 的话就禁用视图口。
            width/height等(可以设置为手机模式) 
        args                      传给浏览器的参数(['--no-sandbox', '--disable-setuid-sandbox'] 在linux值要为这个)
        handleSIGINT(boolean)     Ctrl-C 关闭浏览器进程。默认是 true
        timeout(number)           等待浏览器实例启动的最长时间(以毫秒为单位)
        userDataDir               用户数据的目录
        returns                   返回的是一个promise
    Page实例的方法
      event(once/on/removeListener 都是node原生方法)
        用法Page.on('close',()=>{})
          一般监听 close/load(加载)/console(可以自己打印 在监听)/error(页面崩溃时触发)/
                    frameattached(iframe加载触发)/framedetached(当iframe从页面移除)/framenavigated(iframe导航到新的url触发)
                    request(页面发送请求触发,page.setRequestInterception 拦截并且改变请求)/respone(页面某个请求接收到对应的返回触发)
        
      selector 选择器($/$$/$eval/$$eval)
        用法page.$(string) //document.querySelector 没有默认返回null
                $$(srting) //document.querySelectorAll 没有默认返回[]
                
                $eval(selector,fn(args)) page.$eval('#search', el => el.value); 
                  //args 在页面中写的代码 传入到页面当中 
                  //js环境中  el就是当前的dom 完成后 返回fn()执行后的值
                  //此处的打印是 js 环境

      addScriptTag(options)
        (一般添加到的地方：head标签末尾)
        用法 page.addScriptTag(
              {
                url:'string',
                path:'string', 如果 path 是相对路径, 那么相对 当前路径 解析。
                content:'string',不用加script标签(若是有path 则content不会显示)
                type:'string'
              })
          注入一个指定src(url)或者代码(content)的 script 标签到当前页面。
      page.addStyleTag(options)
        options 
          url <[string]> link标签的href属性值
          path <[string]> 样式文件的路径. 如果path 是相对路径,那么相对 当前路径解析。
          content <[string]> css代码（即）
      browser()
        用法 page.browser()  得到当前 page 实例所属的 browser 实例。
      click()
        page.click(selector[, options])
      close()
        page.close(boolean)  默认false  为true 会弹出一个对话框
      content()
        page.content() 返回页面的完整 html 代码，包括 doctype
      emulate()
        page.emulate(options)支持模拟器 
      focus()
        page.focus(selector) 让selector聚焦
      frames()
        page.frames() 返回所有的iframe标签
      goBack()
        page.goBack() 回到上一个页面
      goForward()
        page.goForward() 回到历史的 下一个页面
      goto(url, options)
        page.goto(url, options)  导航到的地址. 地址应该带有http协议, 比如 https://.
      hover(selector)
        page.hover(selector)此方法找到一个匹配的元素，如果需要会把此元素滚动到可视
      pdf(options)
        打印pdf 要开启无头模式
        page.pdf(options)  生成当前页面的pdf格式
      screenshot()
        page.screenshot([options]) 截图
      reload(options)
        page.reload(options) 等待加载
      select(selector, ...values)
        page.select(selector, ...values) 返回 所有符合的元素
      setDefaultNavigationTimeout(timeout)
        page.setDefaultNavigationTimeout(timeout) //改变定时器等 的默认 时间
      setCookie()
        page.setCookie(...cookies)
      setContent(html)
        page.setContent(html) //设置页面的源码
      setRequestInterception()
        page.setRequestInterception(boolean) //拦截所有请求
        // 一旦启用请求拦截，每个请求都将停止，除非它继续，响应或中止。 通过请求拦截器取消所有图片请求
        // 启用请求拦截器，会激活 request.abort, request.continue 和 request.respond 方法。这提供了修改页面发出的网络请求的功能。
      setViewport(viewport)
        page.setViewport(viewport) //设置页面显示宽高等
      tap() 
        page.tap(selector) 点击
      type() 
      page.type() 输入内容
        // 每个字符输入后都会触发 keydown, keypress/input 和 keyup 事件
        // page.type('#mytextarea', 'Hello'); // 立即输入
        // page.type('#mytextarea', 'World', {delay: 100}); // 输入变慢，像一个用户

      evaluate()
        进去js环境 操作dom
        page.evaluate(pageFunction, ...args)
          pageFunction <[function]|[string]> 要在页面实例上下文中执行的方法
          ...args 要传给 pageFunction 的参数
          return  Promise.resolve('把值传递出来')
      evaluateOnNewDocument()
            // 坑  要放到 browser.newPage()的时候  (一般只要不打开新的连接 他将一直存在)
            页面的iframe加载或导航完成。这种场景，指定的函数被调用的上下文是新加载的iframe。
            指定的函数在所属的页面被创建并且所属页面的任意 script 执行之前被调用。常用于修改页面js环境
            用法 1引入文件可以参考官网
                2 用一个匿名函数包裹  page.evaluateOnNewDocument(()=>{
                                        Object.defineProperty(window, 'bds', {
                                          value:{
                                            use(){
                                              return '123'
                                            }
                                          }
                                        })
                                      } 
            evaluateOnNewDocument 作用是重写 exposeFunction作用是挂载到window 
      exposeFunction()
            挂载到页面的方法在多次跳转后扔有用
      
      waitForSelector(selector,options)
        page.waitForSelector(selector,options)
      waitForSelector(urlOrPredicate,options)
        作用 等待response某一条数据响应
            url => data.url()   状态 => data.status()  方法 => data.methods()
        page.waitForResponse(urlOrPredicate, options)
      waitForNavigation(options)
        //和监视load有点像  
        //作用 等最后一次response响应 在操作
        page.waitForNavigation(options)

      waitForFunction(pageFunction,options,args)
         在node中传一个参数 放到dom 里面执行
         例子
            1、(可以用来监控页面的大小变化)
              puppeteer.launch().then(async browser => {
                const page = await browser.newPage();
                const watchDog = page.waitForFunction('window.innerWidth < 100');
                await page.setViewport({width: 50, height: 50});
                await watchDog;
                await browser.close();
              });
            2、将 node.js 中的参数传递给 page.waitForFunction 函数：
              const selector = '.foo';
              await page.waitForFunction(selector => !!document.querySelector(selector), {}, selector);                          
      
      是上面的缩写
      page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]])
    keyboard    
      dwon(key,[text:'输入的文本'])
           第二个参数可选
           这个事件触发后 要调下 keyboard.up()
      press(key,[text:'输入的文本',delay:'延迟毫秒']) 
           是 keyboard.dwon()和keyboard.up()快捷方式
      sendCharacter(char) 
          //分发一个 keypress 和 input 事件。该方法不会发送 keydown 或 keyup 事件。
           page.keyboard.sendCharacter('嗨'); 用来输入内容的
      type(text, options)
          keyboard.type() 输入内容
            // 每个字符输入后都会触发 keydown, keypress/input 和 keyup 事件
            // keyboard.type('#mytextarea', 'Hello'); // 立即输入
            // keyboard.type('#mytextarea', 'World', {delay: 100}); // 输入变慢，像一个用户
      up(key)
        keyboard.up(key)
                                      
    response
      监视所有的响应 data.url() 每个响应的url  response.status() 状态
        用法 
          await page.on('response',data=>{
                  console.log("data",data.url())
                })           


                

    */
   /*
    问题
    1、当要点击某个页面的时候，报错没有该选择器
       处理办法 
        用监视
         on(记得处理完后 取消监视 removeListener)
            页面跳转 监视load  
            不跳转监视response 截获最后一条回应的数据 在处理      
       
   */  