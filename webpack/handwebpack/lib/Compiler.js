let fs = require('fs')
let path = require('path')

let babylon = require('babylon')
let t = require('@babel/types')
let traverse = require('@babel/traverse').default;
let generator = require('@babel/generator').default
let ejs = require('ejs')
// babylon 主要就是把源码  他里面有个方法叫parse 转换成ast
// @babel/traverse 遍历节点
// @babel/types 替换
// @babel/generator 生成结果

class Compiler{
  constructor(config){
    // entry output
    this.config = config
    //1、需要保存入口文件的路径
    this.entryId; //'./src/index.js'
    //2、需要保存所有的模块依赖
    this.modules = {}
    this.entry = config.entry;// 入口文件
    this.root = process.cwd();// 工作路径
  }
  run(){
    // 执行 并且创建模块的依赖关系,true代表主模块
    this.buildModlue(path.join(this.root,this.entry),true)
    console.log('=======3',this.modules,this.entryId)
    // 发射一个文件(打包后的文件)
    this.emitFile()
  }
  getSource(modulePath){
    let content = fs.readFileSync(modulePath,'utf8')
    return content
  }
  // 解析源码
  parse(source,parentPath){ // AST解析语法树
    // console.log(source,'==================>',parentPath)
    let ast = babylon.parse(source)
    let dependencies = [];//依赖的数组
    traverse(ast,{
      CallExpression(p){
        let node = p.node;//对应的节点
        if(node.callee.name == 'require'){
          node.callee.name = '__webpack_require_';
          let moduleName = node.arguments[0].value;// 取到的就是模块的引用名字
          moduleName = moduleName + (path.extname(moduleName)?'':'.js')
          moduleName = './' + path.join(parentPath,moduleName)
          dependencies.push(moduleName)
          node.arguments = [t.stringLiteral(moduleName)]
        } 
      }
    })
    let sourceCode = generator(ast).code
    
    // 附模块的加载 递归加载
    dependencies.forEach(dep=>{
      this.buildModlue(path.join(this.root,dep),false)
    })
    return { sourceCode,dependencies}
  }
  // 构建模块
  buildModlue(modulePath,isEntry){
    // 拿到模块的内容
    let source = this.getSource(modulePath)
    // 模块id modulePath = modulePath = this.root  
    let moduleName = './'+path.relative(this.root,modulePath)
    if(isEntry){
      this.entryId = moduleName; //保存入口的名字
    }
    /**
     *  解析源码 对其改造
     *  1、将所有的require引入的内容 路径更改为src下
     *  2、将require 名字更改
     *  3、返回一个依赖列表
     * */ 
    let {sourceCode,dependencies} = this.parse(source,path.dirname(moduleName))
    console.log('==111',sourceCode)
    console.log('==222',dependencies)
    // 把相对路径和模块中的内容 对应起来
    this.modules[moduleName] = sourceCode
  }
  emitFile(){
    // 用数据渲染  
    // 拿到输出到那个目录下
    let main = path.join(this.config.output.path,this.config.output.filename)
    let templateStr = this.getSource(path.join(__dirname,'main.ejs'))
    let code = ejs.render(templateStr,{entryId:this.entryId,modules:this.modules});
    this.assets = {}
    // 资源中路径对应的代码
    this.assets[main] = code;
    fs.writeFileSync(main,this.assets[main])
  }
}
module.exports = Compiler