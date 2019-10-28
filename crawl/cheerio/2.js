/*
  选择器
  $(selectior,[context],[root])
  选择器在Context范围内搜索,Context又在Root范围内搜索
*/
// const cheerio = require('cheerio')
// const html = `
// <ul id='fruits'>
//   <li class='apple'>苹果</li>
//   <li class='banana'>香蕉</li>
//   <li class='pear'>梨</li>
// </ul>
// `
// let $ = cheerio.load(html)
// console.log($('.apple','#fruits').text())

/*
  读取元素的属性
*/
// const cheerio = require('cheerio')
// const html = `
// <ul id='fruits'>
//   <li class='apple'>苹果</li>
//   <li class='banana'>香蕉</li>
//   <li class='pear'>梨</li>
// </ul>
// `
// let $ = cheerio.load(html)
// //取值
// console.log($('ul').attr('id'))
// //赋值
// $('ul').attr('id','favorite').attr('class','favorite')
// //删除
// $('ul').removeAttr('class')

/*
  prop attr
  prop 用来表示固有的属性 比如checked selected
  attr 自定义属性 id class
*/
const cheerio = require('cheerio')
const html = `
<input type='checkbox' checked/>
`
const $ = cheerio.load(html)
console.log($("input[type='checkbox']").attr('type'))