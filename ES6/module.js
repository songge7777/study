// 都是es6 的 要编译成es5才能用

//1、 export 命令  
// 变量输出
var firstName = 'Michael';
var lastName = 'Jackson';
export {firstName, lastName};


// as关键字重命名
function v1() {  }
function v2() {  }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

// 函数或类输出
export function multiply(x, y) {
    return x * y;
  };
// 报错
// function f() {}
// export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};

//2、 import 命令

import {firstName, lastName} from './profile.js';
function setName(element) {
    element.textContent = firstName + ' ' + lastName;
  }

//3、  模块的整体加载
export function area(radius) {
    return Math.PI * radius * radius;
  }
  
export function circumference(radius) {
    return 2 * Math.PI * radius;
}
// 第一种
import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
// 第二种
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

//4、export default命令
export default function () {
    console.log('foo');
  }
//   上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

//   其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
import customName from './export-default';
customName(); // 'foo'