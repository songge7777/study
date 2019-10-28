/*
1、export和import
    export规定模块的输出，import模块输入
    ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
    比如，CommonJS 模块就是对象，输入时必须查找对象属性。
      // CommonJS模块
        let { stat, exists, readFile } = require('fs');

        // 等同于
        let _fs = require('fs');
        let stat = _fs.stat;
        let exists = _fs.exists;
        let readfile = _fs.readfile;
    export用法
      变量
        export var firstName = 'Michael';
        export {firstName};
      类
        export function multiply(x, y) {
          return x * y;
        };
      as关键字重命名
        function v1() { ... }
        function v2() { ... }  
        export {
          v1 as streamV1,
          v2 as streamV2,
          v2 as streamLatestVersion
        };
    三种写法
      // 写法一
      export var m = 1;

      // 写法二
      var m = 1;
      export {m};

      // 写法三
      var n = 1;
      export {n as m};
    import用法
      使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块
      as
      import { lastName as surname } from './profile.js';
    
*/