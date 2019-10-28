// 所有回掉函数的第一个参数都会保留给异常,如果操作成功,则第一个参数会是null或undefined
const fs = require('fs')
//fs.readFile 读取的是一个流  要是第二个参数是 'utf8' 则会转换成toSting,或者data.toSting()


// // 异步 读取文文件
// fs.readFile('./fs.js','utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data)
// })
// // 同步 暂时有问题
// // const a = fs.readdirSync(`${__dirname}/fs.js`)
// // console.log(__dirname)

// //写入文件 fs.writeFile('文件名字','内容可以是buff对象',回调) 
// const content = Buffer.from('this is buffer')
// // 第二个参数如果是buffer 会自动转换为string  
// // 第二个参数如果字符串 第三个参数要加utf8
// fs.writeFile('./text1.js',content,err =>{
//   if (err) throw err; 
//   console.log('done!');
// })

// // 查看文件的信息 fs.stat
// fs.stat('./fs.js',(err,stat)=>{
//   if(err){
//     console.log('文件不存在')
//     return;
//   }
//   console.log('是否是文件',stat.isFile())
//   console.log('是否是文件夹',stat.isDirectory())
//   console.log('文件的信息',stat)
// })

// //修改文件名 fs.rename 
// fs.rename('./text','./te',err=>{
//   if(err) throw err;
//   console.log('文件修改成功 ')
// })

// // 删除 fs.unlink
// fs.unlink('./test',err=>{
//   console.log('文件删除')
// })

// // 读文件内容
// fs.readdir('./',(err,files)=>{
//   console.log(files)
// })

// // 创建文件夹 fs.mkdir
// fs.mkdir('test',err=>{})
// // 删除文件夹
// fs.rmdir('./test',err=>{})
// // 监视文件
// fs.watch('./',{
//   recursive:true
// },(eventType,filename)=>{
//   console.log(eventType,filename)
// })

// // readstream
// const rs = fs.createReadStream('fs.js')
// re.pipe 读取一点放一点 参数放到哪儿 process.stdout 指的是控制台
// re.pipe(process.stdout);

// writrStream
const ws = fs.createWriteStream('./tt.txt');
    // 只能读取流和string
    ws.write('n123um')
    // 写入结束
    ws.end()