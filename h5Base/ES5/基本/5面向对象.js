
/*
  创建对象三种方法
    一、字面量
        var o1={name:'1'}
        var o11 = new Object({name:'2'})
    二、通过构造函数
        var P = {name:'3'}
        var 
    三、Object.create()
    
1、面向对象
    数据类型(4个值)
      var person={
        name:'123'
      }

      Object.defineProperty(person,'name',{
        configurable:false
      })

      第一个是对象，第二个是对象要处理的key,第三个是key的属性
      属性的默认值(非Object.defineProperty创建的key)
      {
        configurable : true,
        enumerable : true,
        writable : true,
        value : undefinde
      }
      属性的默认值(Object.defineProperty创建的key)
      上面3个true 全是false

      let 和 var 申明的变量有区别
      var申明的是挂载到window下的可以通过Object.defineProperty(window,'变量')
      也可以通过Object.defineProperty(window,'变量') 申明一个全局变量，默认的3个属性为false
      let 就不能，因为有作用域了
    访问器属性(4个)
      {
        configurable : true,
        enumerable : true,
        get:function(){
          //当对象下的值被获取时,触发
        }
        set:function(){
          //当对象下的值被赋值时,触发

        }
      }
      getter和setter函数至指定一个 严格模式下报错
    定义多个属性
      第一个对象是对象
      第二个对象下的keys
      var book = {}
      Object.defineProperties(book,{
        a:{
          writable:true
          value:'a'
        },
        b:{
          writable:true
          value:'b'
        }
        c:{
          get:function(){}
          set:function(){}
        }
      })
    读取属性的特性
    let a = Object.getOwnPropertyDescriptor(person,'age')
      第一个对象,第二个对象下的key
     console.log(a.configurable,a.writable) 
2、创建对象
    字面量
      缺点:需要创建很多实例,产生很多重复的代码
      let obj1 = {
        name:'',
        age:''
      }
      let obj2 = {
        name:'',
        age:''
      }
    工厂模式
      修改字面量创建的缺点,用函数包装在返回
      缺点 无法解决对象识别问题(对象类型),重复造轮子，产生大量的重复性代码
      function createPerson(name,age){
        let o = new  Object()
            o.age = age
            o.name = name
            o.fn = function(){
            }
            return o
      }
      var a1 = new createPerson('sg',12)
      var a2 = new createPerson('sg1',112)
    构造函数模式
      缺点:函数即是对象,当Person被实例化的时候 this.fn 就会初始话一次,不同实例的同名函数是不相等的
      如下 a1.fn == 2.fn //false 函数创建重复,不必要的创建
      function Person(name,age){
        this.name = name
        this.age = age
        this.fn = function(){}
      }

      var a1 = new Person('sg',12)
      var a2 = new Person('sg1',112)

      new 作用(4)
        1、创建一个新对象
        2、将原来对象的this指向新对象
        3、将原来对象的属性和值赋值给新对象
        4、返回新对象
    原型模式
      将上改造,避免上面的缺点
      function Person(name,age){
        this.name = name
        this.age = age
      }
      Person.prototype.fn = function(){}

      var a1 = new Person('sg',12)
      
      Object.getPrototypeOf(a1) == Person.prototype
      Object.getPrototypeOf()返回的就是对象的 构造函数原型
      相反的方法
      isPrototypeOf 只要原型链中出现过的原型 isPrototypeOf 都返回true
      Person.prototype.isPrototypeOf(a1) ==> true
      Object.prototype.isPrototypeOf(a1) ==> true

      

      obj.hasOwnProperty('key') hasOwnProperty作用判断key是否是obj本身(true)还是继承过来的(false)
      对象增加属性可以屏蔽原型内的值,但不会修改
      delete 只能删除自身的值
      function Person(){
      }
      Person.prototype.fn = function(){}
      Person.prototype.age = '23'

      var a1 = new Person()
      a1.age = 13
      delete a1.age 
      console.log(a1.age) //12
  3、in操作符
      1、for-in
      2、单独使用,in操作符会在通过对象能够访问给定的属性时返回true
         无论该属性存在实例还是原型中
      用法       console.log('key' in 对象)
    hasOwnProperty和in区别
      hasOwnProperty:只在实例中存在才返回true(通过prototype获取到的都是false)
      in:只要通过对象访问到属性就返回true
        hasOwnProperty返回false,in返回true可以确定其在原型中
    hasPrototypeProperty(对象,'key') 
      若key是对象原型中的就返回true 
           是自身的就返回fasle    
  4、Object.keys()和for in
      Object.keys()传入对象， 返回包含所有可枚举属性的字符串数组(只有原型的)
      for in  也是返回可枚举的属性(包括自身和原型的)
      Object.getOwnPropertyNames(Person.prototype)所有实例属性(包括不可枚举的)
        相对Object.keys()多了一个不不可枚举(constructor)
      constructor原生的是不可枚举,如果在函数里面申明以后就是可枚举的
  5、更简单的原型语法
      function Person(name,age){
      }
      let a1 = new Person()
      这个a1的 constructor 是Person
      更改为简单的:
      function Person(name,age){
      }
      Person.prototype={
        name:'123',
        sg:11
      }  
      let a1 = new Person()
      这种简单的 constructor 指向的是Object,因为原本继承的Person.prototype 被覆盖,最终只想Object
      需要指定一个 constructor:Person (自带的constructor是不可枚举,工人指定的是可以枚举,可以用Object.defineProperty()处理)
  6、原型对象的问题
      注意1:
      function Person(name,age){
      }
      Person.prototype={
        name:'123',
        sg:11
      }  
      let a1 = new Person()
      和下面不一样(上面在实例化的时候会把对象带过去,下面是没带过去的,但是他们的原型都被改写了))
      function Person(name,age){
      }
      let a1 = new Person()
      Person.prototype={
        name:'123',
        sg:11
      }  
      注意2:通过new Person 他们的方法会被共用
      function Person(name,age){
      }
      Person.prototype={
        name:'123',
        sg:11,
        friend:[1]
      }  
      let a1 = new Person()
      let a2 = new Person()
        a1.friend.push('a1')

      console.log(a1.friend,a2.friend) 一样的结果
  7、组合使用构造模式和原型模式
      function Person(name){
        this.name = name
      }
      Person.prototype={
        constructor : Person, 
        fn:()=>{}
      }
  8、动态原型模式
      function Person(name){
        this.name = name
        if(typeof this.sayName != "function"){
          Person.prototype.sayName = function(){}
        }
      }
  9、创建一个具有特殊功能的数组
      function A(){
        var values = new Array()
        values.push.apply(values,arguments)
        values.tos = ()=>{
          return values.join('?')
        }
        return values
      }
      let a = new A(1,3,4,'ss','aa')
      console.log(a.tos())    
  10、继承
        instanceof  
        用法 实例 instanceof 构造函数
        判断 实例与原型链中出现过的构造函数 就返回true ,所有 实例 instanceof Object  都返回true
        isPrototypeOf (跟instanceof 一样)
          只要原型链中出现过的原型 isPrototypeOf 都返回true
        Object.prototype.isPrototypeOf(a1) ==> true

      原型链(将超类构造函数 实例化 赋给 子类的prototype)
        缺点:子不能向父传递参数,
             子类不能向父传递参数  
        function a() {
            this.str = [1,2,4,6]
        }
        function b(){

        }
        b.prototype = new a()
        let a1 = new b()
        a1.str.push('a')
        console.log(a1.str)
        let a2 = new b()
        console.log(a2.str)
        这种情况 为何显示一样的结果,因为 a1.str.push 的时候 指向的是a构造函数里面的str的地址,他们都共享了这个

      借用构造函数(子类构造函数调用超类构造函数,用call和apply)
        缺点:方法都写在构造函数 没有复用
        function a() {
            this.str = [1,2,4,6]
        }
        function b(){
            //继承了a,当b()被实例化的时候都会具有自己的str,不再共享
            // 因为this的主体不同所有 实例出来都有自己的属性,call方法还可以传递参数
            a.call(this)
        }
        let a1 = new b()
        a1.str.push('a')
        console.log(a1.str)
        let a2 = new b()
        console.log(a2.str)     
      构造函数和原型链组合(常用)
        function a(name){
            this.name = name
        }
        a.prototype.say = function(){
          return this.name
        }
        function b(name,age){
            //继承属性
            a.call(this,name)
            this.age = age
        }
        //继承方法
        b.prototype = new a()
        b.prototype.constructor = b
        b.prototype.fn =function(){
          return this.age
        }
        let instance = new b('sg',12)
      原型式继承
        原型: 
              function a(o){
                  function b(){}
                  b.prototyp = o
                  return new b()
              }
        ES5 新增方法规范了他
              Object.create(参数一,参数二)
              参数一:新的原型对象(类似上面传进的形参)
              参数二:与Object.defineProperties()方法的第二个参数一样,每个属性都是通过自己的描述符合定义的
            var person={}
            let a = Object.create(person)
            let b = Object.create(person,{
                      name : '123'
                    })

  11、创建对象总结
    1、工厂模式
      缺点 无法解决对象识别问题(对象类型),重复造轮子，产生大量的重复性代码
      function a(){
        //下面这行叫字面量
        var o = new Object()
            o.age= 12
            o.name = 'name'
            o.fn=()=>{}
            return o
      }
      let person = a()
    2、构造函数
      缺点:函数即是对象,当Person被实例化的时候 this.fn 就会初始话一次,不同实例的同名函数是不相等的
      如下 person1.fn == person2.fn //false 函数创建重复,不必要的创建
      function A(){
        this.name = name
        this.fn =()=>{}
      }
      let person1 = new A()
      let person2 = new A()
    3、原型模式(其实也够用)
      将上改造,避免上面的缺点
      缺点:方法多的时候 Person.prototype. 要写很多
      function Person(name,age){
        this.name = name
        this.age = age
      }
      Person.prototype.fn = function(){}
      Person.prototype.fn2 = function(){}
    4、原型对象
      注意:实例化的时候 在Person.prototype之后 , 原型链被覆盖(建议)
           若是之前则Person.prototype里面的对象 不会被new过去
           给原型替换的方法一定要放在替换原型之后
      function Person(name,age){
        this.name = name
        this.age = age
      }
      //Person.prototype之前
      Person.prototype ={
        constructor:Person
        fn1:function(){}
        fn2:function(){}
      }
      //Person.prototype之后
      call(this,a1,a2)    直接执行
      apply(this,[a1,a2]) 直接执行
      bind(this,a1,a2)  只返回函数不执行  函数和call一样

      bind后函数不会执行，而只是返回一个改变了上下文的函数副本，而call和apply是直接执行函数。




 */