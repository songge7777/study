const puppeteer = require('puppeteer');

//第一种写法
(async () => {
    //连接浏览器
    const browser = await puppeteer.launch({
        headless : false
    });
    //创建一个浏览器
    const page = await browser.newPage();
    console.log(page)

    // //跳转页面
    // await page.goto('https://www.baidu.com');

    // //聚焦某个地方
    // await page.focus('#kw');

    // // 模拟输入 sendCharacter 不能输入纯数字  type可以
    // // page.keyboard.type('Hello'); // 立即输入
    // // page.keyboard.type('World', {delay: 100}); // 更缓慢的输入, 像一个用户
    // // await page.keyboard.type('12311111')
    // await page.keyboard.sendCharacter('sw')
		// // await page.keyboard.sendCharacter('嗨');
		
		
    // await page.click('#su')
    // //再次跳转页面发生
    // page.on('load',()=>{
    //     console.log('123')
    // })
    // // Keyboard 提供一个接口来管理虚拟键盘.高级接口为 keyboard.type, 其接收原始字符, 然后在你的页面上生成对应的 keydown, keypress/input, 和  keyup 事件.
    // // 你可以使用 keyboard.down, keyboard.up 和 keyboard.sendCharacter 来手动触发事件, 就好像这些事件是由真实的键盘生成的.
    // //截图
    // await page.screenshot({path: 'example1.png'});
})()



//第二种写法
// puppeteer.launch({
//     headless : false
// }).then(async browser => {
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com');
//     // 其他操作...
//     await browser.close();
//   });