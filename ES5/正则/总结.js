
/*
  正则表达式
    1、定义方式
       直接量定义  /正则/修饰符  
       对象定义    new RegExp(字符串,修饰符)
        要传参数的时候 就用  new RegExp  生产一个正则
        一般情况直接 /正则/修饰符    
  

       修饰符     i:忽略大小写
                  g:全局匹配
       转义字符
        \  转义符
        \n 换行(newline)
        \s 空格(space)
        \S 非空格
        \' 单引号
        \" 双引号
        \d (digit)数字,正则中专门用来代表数字的,等级于 [0-9]
        \D 非数字字符,等价于[^0-9]
        \w 数字、字母、下划线
        \W 非数字、非字母、非下划线
        \b 单词的边界，独立的部分(起始位子、结束位子、空格)，它不匹配某个可见的字符，而是匹配位子(border)
        \B 非边界的部分
        .  任意一个字符
        \. 真正的点

      方法
        test() ------> 是否包含某位字符串
          查看正则表达式与指定的字符串是否匹配
          正则对象.test(字符串)
          返回:布尔值
        search()  -----> 类似 indexOf()
          找匹配的字符串首次出现的位子
          字符串.search(字符串或者正则)
          返回:找到返回位子下标,没有返回-1
          search()和indexOf()类似但后者参数不能是正则
        match() --------> 将满足的数据放到数组中
          匹配指定的字符串或者正则,把匹配到的结果放到一个数组中
          字符串.match(字符串或者正则)
          返回:找到后把结果放在数组中并返回,若是没有返回null
            如果不带g修饰符,只会匹配一个结果，并且给找到的数组添加index与input属性
              index:找到的字符对应的位子
              input:元字符串
            如果带g修饰符,则为全局匹配，结果里面放的是找到匹配的字符
            注意:匹配成功后，就不会在接着往下找了
        replace()
          替换匹配的字符串
          字符串.replace(字符串或者正则,字符串或者函数)
          参数 
            第一个参数:字符串或者正则
            第二个参数:字符串或者函数
                函数参数说明
                  参一 要匹配的内容,与replace的第一个参数一样
                  参二 要匹配的内容对应的位子下标
                  参三 原字符串
                  注意:这个函数必须要有一个返回值,否则的话它就会拿undefined替换掉原来的内容
          返回:替换后的新字符串,原来的字符串没有变化
                
                第二个参数是一个函数,他的形参至少是3个
              	var str='adb22s22d22hsu222223673njAj2nj2234n45nk';
                let a = str.replace(/(\d+)(\d)/g,(a1,a2,a3,a4,a5)=>{
                  console.log('-----------',a1,a2,a3,a4,a5)
                  return '--------'
                })
                a1 为(\d+)(\d)
                a2 为第一个(\d+)
                a3 为第二个(\d)
                a4 为第一个满足的下标
                a5 原字符串
                console.log会把满足的条件都打印下来

        分组和子项
          子项 ()代表一个字符  例如(\d) --- (3)
            放在小括号里的内容可以看到是一个子项，每一个小括号都可以看作一个子项
          replace方法匹配子项
            函数里的参数从第二个开始，就对应得每一个子项
          match方法匹配子项            
            没有g修饰符   返回的数组里有子项
            有g修饰符     返回的数组里没有子项
            str.match(/([0-9]{0,12})(columnId=)([A-Znull0-9]{3,15})/)
            返回的内容  第一个是匹配到的数据 接着都是() 里面的内容
        中括号
          []              匹配中括号里的任意一个字符,只代表一个字符
          [1-9]           区间的写法，标示从1到9之间的任意的一个字符
          [a-z]           a-z之间的任意一个小写字母
          [A-Z]           A-Z之间的任意一个大写字母 
          [a-zA-Z0-9]     匹配a-z,A-Z,0-9(匹配任何字母和数字)
          ^               排除掉某个字符(仅仅用在中括号内表达这个意思)
          [\u4e00-\u9fa5] 中文的区间,包含所有的汉字

          red|blue|green 标示red,blue,green 这三个单词中的任何一个(至少)

        量词
          所有的量词都需要放在{n,m}里面
          n,m代表数字

          {n}     前一项重复n次
          {n,}    前一项至少重复n次，最多不限
          {n,m}   前一项至少重复n次,最多重复m次

          +      前一项至少重复1次，最多不限     等价{1,}
          ？     前一项至少重复0次，最多重复1次，也就是说前一项是可选的，等价于{0,1}
          *      前一项至少重复0次，最多不限，也就是说前一项是可选的，等价{0,}
          
          ^      它出现在中括号里代表排除的意思,在中括号的外面标示字符串开始的位子
          $      字符串结束的位子









*/