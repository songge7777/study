const test = require ('./src/class/Spider')
const config = require('./src/config/config')
const s = new test(config)

let begin =async () => {
   await s.init()
}

begin()