/*
  1、总结：valueOf偏向于运算，toString偏向于显示。

      1、 在进行强转字符串类型时将优先调用toString方法，强转为数字时优先调用valueOf。

      2、 在有运算操作符的情况下，valueOf的优先级高于toString。

        valueOf()：返回最适合该对象类型的原始值；

        toString(): 将该对象的原始值以字符串形式返回。

        这两个方法一般是交由JS去隐式调用，以满足不同的运算情况。

        在数值运算里，会优先调用valueOf()，如a + b；

        在字符串运算里，会优先调用toString()，如alert(c)。

      数组方法
      https://www.jb51.net/article/87930.htm

      display 详解
      https://segmentfault.com/a/1190000009636727

      gird  详解
      https://www.jianshu.com/p/d183265a8dad

      时间 切换
      let date = new Date()
      date.toLocaleString() //本地字符串表示 获取本地时间
      date.getTime()//时间戳
  
  2、
    // 并集  交集   差集
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    // Set {1, 2, 3, 4}

    // 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
    // set {2, 3}

    // 差集
    let difference = new Set([...a].filter(x => !b.has(x)));
    // Set {1}

  3、
    使用sessionStorage、localStorage存储数组与对象

    localstorage永久存储，不过期，除非手动删除，sessionstorage在重启浏览器、关闭页面或新开页面时失效。
    方法:

    ①clear（）：删除所有值。

    ②getItem（name）：根据指定的名字name获取对应的值

    ③key(index)：在指定的数字位置获取该位置的名字。

    ④removeItem（name）：删除由name指定的名值对

    ⑤setItem(name,value)：为指定名字设置一个对应的值
  
  4、
    set 类似数组 本身是一个构造函数

    例子
    const set = new Set([1, 2, 3, 4, 4]); 
    [...set]
    // [1, 2, 3, 4]


    const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    items.size // 5

    const set = new Set(document.querySelectorAll('div'));
    set.size // 56

    方法
    add(value)：添加某个值，返回 Set 结构本身。
    delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    has(value)：返回一个布尔值，表示该值是否为Set的成员。
    clear()：清除所有成员，没有返回值。


    // 去除数组的重复成员
    [...new Set(array)]
    Array.from方法可以将 Set 结构转为数组
    const items = new Set([1, 2, 3, 4, 5]);
    const array = Array.from(items);

    Set 结构的实例有四个遍历方法，可以用于遍历成员。

      keys()：返回键名的遍历器
      values()：返回键值的遍历器
      entries()：返回键值对的遍历器
      forEach()：使用回调函数遍历每个成员

      let set = new Set(['red', 'green', 'blue']);

      for (let item of set.keys()) {
        console.log(item);
      }
      // red
      // green
      // blue

      for (let item of set.entries()) {
        console.log(item);
      }
      // ["red", "red"]
      // ["green", "green"]
      // ["blue", "blue"]



      可以直接用 
      for (let x of set) {
        console.log(x);
      }

    5、
      Map
      Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
      Set和Map都可以用来生成新的 Map
      注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
      const map = new Map();
      map.set(['a'], 555);
      map.get(['a']) // undefined

      方法：
      size 属性
      set(key, value)
      get(key)
      has(key)
      delete(key)
      clear()

      Map 结构原生提供三个遍历器生成函数和一个遍历方法。

      keys()：返回键名的遍历器。
      values()：返回键值的遍历器。
      entries()：返回所有成员的遍历器。
      forEach()：遍历 Map 的所有成员。

    6、
      
      parseInt(string, radix)
      第一个参数书被解析的字符串  第二个是第一个参数是什么进制数
      parseInt() 函数可解析一个字符串，并返回一个整数。
      
      parseInt("10");			//返回 10
      parseInt("19",10);		//返回 19 (10+9)
      parseInt("11",2);		//返回 3 (2+1)
      parseInt("17",8);		//返回 15 (8+7)
      parseInt("1f",16);		//返回 31 (16+15)
      parseInt("010");		//未定：返回 10 或 8

    7、
      	
	Module 的语法
 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器

1、CommonJS 模块就是对象，输入时必须查找对象属性

// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

// ES6模块
import { stat, exists, readFile } from 'fs';


2、export 
	export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

	例子 
	export var year = 1958; ===  export {firstName, lastName, year};
	
	export function multiply(x, y) {
 		 return x * y;
	}
	export class a{}

	用as关键字重命名 原名 as 新名
	export { multiply as v1,  a as v2}

	// 写法一
	export var m = 1;

	// 写法二
	var m = 1;
	export {m};

	// 写法三
	var n = 1;
	export {n as m};
	注意：函数和class一样 但是这个是错误写法export 1;

	动态更改
	export var foo = 'bar';
	setTimeout(() => foo = 'baz', 500);

3、import 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块
	import {firstName, lastName, year} from './profile.js';

4、模块的整体加载
		export function area(radius) {
  			return Math.PI * radius * radius;
		}

		export function circumference(radius) {
  			return 2 * Math.PI * radius;
		}

	import * as circle from './circle';
	console.log('圆面积：' + circle.area(4));
	console.log('圆周长：' + circle.circumference(14));

6、export default
	export default function () {
  		console.log('foo');
	}
	import customName from './export-default';
	customName(); // 'foo'
	或者
	export default function foo() {
 		 console.log('foo');
	}
	// 或者写成

	function foo() {
 	 console.log('foo');
	}
	export default foo;
	上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。

	// MyClass.js	
	export default class { ... }

	// main.js
	import MyClass from 'MyClass';
	let o = new MyClass();

7、
    ES6 模块加载 CommonJS 模块

    module.exports 属性 同于export default xxx

    module.exports = {
      foo: 'hello',
      bar: 'world'
    };

    // 等同于
    export default {
      foo: 'hello',
      bar: 'world'
    };

  8、
    window.getComputedStyle("元素", "伪类")
    第一个参数是目标元素 
    第二个是 是否含有伪类
  
  9、
    	//查看是啥浏览器
	  navigator.plugins 
  
  10、
    对json 数组 截取处理 不改变之前的json 数据 
    arr2 = JSON.parse(JSON.stringify(JsonData.data))
    arr1 =  arr2.splice(0,JsonData.Grouping)
  
  11、 
    for.....of 
      一般在数组用  数组有接口
        对象没有 在对象里面用回报错
    for....in 
      数组对象都可以用
  12、
    一开始，exports和module.exports都指向空对象(同一内存块)，exports是引用 module.exports的值。
    module.exports 被改变的时候，exports不会被改变，而模块导出的时候，真正导出的执行是module.exports，而不是exports
    
    当 exports 直接赋值的时候  到出去的是module.exports  跟exports没有关系
    
    但是
      module.exports = {a: 2}//通过赋值的方式指向了另一块内存
      exports.a = 1  //只是在原来指向的内存中添加属性，内存指向并没有变化
      此时到出去的a 就变化了 
  13、
    class A{
        // 名字是死的  给类增加静态属性 //es7 才有的
        static defaultProps = {
            name:'1231'
        }
        static a = '12'
        fn(){
            console.log(this)
        }
    }
    console.log(A.a)  // 12 
    let a = new A()
    let fn = a.fn;
    fn() // 在浏览器 或者 node中 结果都是undefined

    14、
      get和set访问器
      let obj = {
          get age (){
              console.log('123')
          },
          set age(val){
              console.log('4444444',val)
          }
      }
      console.log('==',obj.age)
    15、
      Object.defineProperty(obj, prop, descriptor)
        descriptor
          configurable:true | false,//是否可以被修改或者删除
          enumerable:true | false,// 是否可以被枚举 (for...in或Object.keys())
          value:任意类型的值,//返回的值
          writable:true | false,//是否可以被重写

          //当使用了getter或setter方法，不允许使用writable和value这两个属性
      let obj= {
        name:'123'
      }
      let value = '123'
      Object.defineProperty(obj,name,{
        get(){
          consle.log('获取')
          return value
        }
        set(item){
          consle.log('设置')
          value = item
        }
      })
      16、转义URL地址
        decodeURLComponent('地址')
      17、
        js加载顺序
        defer 异步 有序加载
        async 异步 谁快谁先加载
        preload 预加载 异步
          preload通常用于本页面要用到的关键资源，包括关键js、字体、css文件。
          preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度。
        prefetch 预抓取 
          资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低。
          也就是说prefetch通常用于加速下一次导航，而不是本次的。
          被标记为prefetch的资源，将会被浏览器在空闲时间加载。
      18、
        图片转换成base64
        let source = source.toString(64)
        // data:image/jpeg;base64 必需加的前缀
        base64 格式 data:image/jpeg;base64,xxxxx;
      19、
        调类里面的方法  里面的this(指向当前类的实例) 如果遇到定时器 this指定就不稳定了
        技巧:(参考vuex里面的代码) 
            当调用属性和类上的方法  属性优先
        class Store{
            constructor(options){
              // 先获取commit,dispatch 方法 等调用(commit,dispatch)的时候 会调用属性里面的
              let {commit,dispatch} = this;
              this.commit = (type) => {
                commit.call(this,type)
              }
              this.dispatch = (type) => {
                dispatch.call(this,type)
              }
            }
            commit(type){
              this.mutations[type]()
            }
            dispatch(type){
              this.actions[type]()
            }
        }
      20、
        let arr = [
          {a:fn1},
          {b:fn2},
        ]
        forEach将arr 的 a和fn1这种key和value分开
        function forEach(obj,callback){
          Object.keys(obj).forEach(item=>callback(item,obj[item]))
        }
      21
        {
          a:{
            modules:{
              a1:{}
            }
          },
          b:{
            modules:{
              b1:{}
            }
          }
        }
        这类格式 参考vuex的module
        class ModuleCollection{
          constructor(options){// vuex [a,b]
            this.register([],options);
          };
          register(path,rawModule){
            // path 是个空数组 rawModule就是一个对象
            let newModule = {
              _raw:rawModule,// 对象 当前 有state getters 那个对象
              _children:{}, // 表示 他包含的模块
              state:rawModule.state //他自己模块的状态
            }
            if(path.length == 0){
              this.root = newModule; // 根
            }else{
              let parent = path.slice(0,-1).reduce((root,current)=>{
                return root._children[current];
              },this.root)
              // path[path.length-1] 取数组的最后一项
              parent._children[path[path.length-1]] = newModule
            }
            if(rawModule.modules){ // 有子模块
              forEach(rawModule.modules,(childName,module)=>{
                this.register(path.concat(childName),module)
              })
            }
          }
        }

          */