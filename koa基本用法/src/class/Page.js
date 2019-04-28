

const puppeteer = require('puppeteer');

class Page{
    constructor(pop){
        this.isShow = pop.isShow

        this.browser = null
        this.page = null
        
    }
    async init(){
        this.browser = await puppeteer.launch({
            headless : this.isShow
        })
        this.page = await this.browser.newPage()
        // console.log(this.page)
        // this.page.on('load',async()=>{
        //     await this.page.click('.login')
        // })
        // await this.page.focus('.loginPhoneOrEmail')
        // await this.page.keyboard.sendCharacter('zhanghao')

        // await this.page.focus('.loginPassword')
        // await this.page.keyboard.sendCharacter('zhanghao')
        // await this.page.type('')
        return this.page
    }
}

module.exports = Page