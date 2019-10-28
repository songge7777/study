
const Page = require('./Page')

class Browser {
    constructor(pop){
        this.page = null
        this.url = pop.url
        this.config = pop.config
    }
    async init() {
        const page = await new Page(this.config)
        this.page =await page.init()
        await this.page.goto(this.url) 

        await this.page.type('#kw','狗')
        await this.page.click('#su')
        await this.page.click('#s_tab a:nth-child(6)')
        // await this.page.waitForSelector('.login')
            // await this.page.click('.login')
            // await this.page.type('[name=loginPhoneOrEmail]', '17683889217', { delay: 1 });
            // await this.page.type('[name=loginPassword]', '850312', { delay: 1 });
          
            // await this.page.focus('[name=loginPhoneOrEmail]')
            // await this.page.keyboard.sendCharacter('501798525')
            // await this.page.focus('[name=loginPassword]')
            // await this.page.keyboard.sendCharacter('850312')
            // await this.page.click('.input-group .btn')
        
        
    }
}
module.exports = Browser