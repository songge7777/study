const {normalize} = require('path')

console.log(normalize('/usr//local/bin')) ///usr/local/bin
console.log(normalize('/usr//local/../bin')) ///usr/bin

const {join} = require('path')
console.log(join('/usr','local','bin/'))//usr/local/bin/

const {resolve} = require('path')
console.log(resolve('./'))//输出当前的绝对路径

const {basename, dirname, extname} = require('path')
const filePath = '/usr/local/bin/no.txt'
console.log(basename(filePath)) //no.txt
console.log(dirname(filePath))  // /usr/local/bin
console.log(extname(filePath))  // .txt

const {parse, format} = require('path')
const filePath = '/usr/local/node_modules/n/package.json'
const ret = parse(filePath)
console.log(ret)//返回一个对象 
                  // {
                  //   root:'/',
                  //   dir:'/usr/local/node_modules/n',
                        // base:'package.json',
                        // ext:'.json',
                        // name:'package'                    
                  // }
                  // parse 将路径解析 成一个对象
                  // format 将对象还原成一个路径
const {sep, delimiter, win32, posix} = require('path')
// sep 是/ 还是\
// delimiter  分隔符
// win32查看windons下面的上2属性  posix查看lunix下面的上2属性

// __dirname、__filename 总是返回文件的绝对路径
// process.cwd() 总是返回执行node命令所在文件夹

// ./ 在require()方法中总是相对当前文件所在文件夹
// 在其它地方和process.cwd()一样，相对node启动文件夹












