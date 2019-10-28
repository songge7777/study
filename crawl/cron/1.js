let CronJob = require('cron').CronJob;
// 有两个参数 第一个是执行的实际 第二个是函数的定义
/*
  6个星的位子
  * 1、秒 0-59
  * 2、分钟 0-59
  * 3、小时 0-23
  * 4、日 1-31
  * 5、月 0-11
  * 6、星期 0-6
  
*/

// * 代表任意值 下面6个星 代表任意时间
// let job = new CronJob('* * * * * *',function(){
//   console.log(new Date().toLocaleString())
// })
// job.start()

// 特定值 可以用逗号分隔出来一个范围
// let job = new CronJob('1,5,10 * * * * *',function(){
//   console.log(new Date().toLocaleString())
// })
// job.start()

// 表示一个范围 范围内的都可以
// let job = new CronJob('20-30 * * * * *',function(){
//   console.log(new Date().toLocaleString())
// })
// job.start()

// 每隔多长时间一次 可以用/表示间隔的频率
let job = new CronJob('*/5 * * * * *',function(){
  console.log(new Date().toLocaleString())
})
job.start()