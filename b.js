exports.fl = false
let a = require('./a.js');
console.log(`b.js ===> fl:${a.fl}`);
exports.fl = true
console.log(`b.js ===> 执行完毕`)