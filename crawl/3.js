let puppeteer = require('puppeteer');
let url = 'https://juejin.im/tag/%E5%89%8D%E7%AB%AF';
(async ()=>{
  const browser = await puppeteer.launch({headless:false}); //1、打开无界面浏览器 headless无头 设置false就是开启浏览界面
  const page = await browser.newPage();     //2、打开一个空白页
  await page.goto(url,{
    waitUntil:'networkidle2'
  });   //3、在地址栏中输入地址 后面的配置是network空闲
  const titles = await page.$$eval('a.title',elements => {
    return elements.map(item => item.innerText)
  }) //获取指定节点的属性 $ => document.querySelector() $$ => document.querySelectorAll()
  console.log(titles)
  // await page.screenshot({path:'baidu.png'});  //4把当前的页面进行截图,保存到baidu.png文件
  await browser.close();//关闭浏览器
})()