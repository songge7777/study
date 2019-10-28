let html = `<h2 class='title'>xxx</h2>`

const cheerio = require('cheerio')
const $ = cheerio.load(html)
$('h2.title').text('hello word')
$('h2').addClass('welcome')
console.log($.html())