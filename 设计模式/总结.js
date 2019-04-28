/*
    面向对象
        把同一个类型的客观对象的属性数据和操作绑定在一起，封装成类，并且允许分成不同层次进行抽象，通过继承实现属性和操作的共享
        继承(子类继承父类) 封装(父类进行内部封装) 多态(子类实例化的不用,多种形态)
        1、概念
        父类是公共的
        class Animal{
            constructor(name) {
                this.name=name;
            }
            eat() {
                console.log(`${this.name} eat`)
            }
        }
        let animal=new Person('动物');
        animal.eat();
        2、继承
        继承可以把公共方法抽离出来，提高复用，减少冗余
        class Animal{
            constructor(name) {
                this.name=name;
            }
            eat() {
                console.log(`${this.name} eat`)
            }
            speak() {

            }
        }
        let animal=new Animal('动物');
        animal.eat();

        class Dog extends Animal{
            constructor(name,age) {
                super(name);
                this.age=age;
            }
            speak() {
                console.log(`${this.name} is barking!`);
            }
        }
        let dog=new Dog('🐶',5);
        dog.eat();
        dog.bark();
        3、封装(借助ts)
        把数据封装起来
        减少耦合，不该外部访问的不要让外部访问
        利于数据的接口权限管理
        ES6 目前不支持，一般认为_开头的都会私有的，不要使用
        实现
        public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符
        protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为
        private : 私有修饰符，只可以在类内使用private修饰的属性和行为
            ts 
            安装 npm install -g typescript
            执行 tsc 1.ts

            class Animal {
                public name;
                protected age;
                private weight;
                constructor(name,age,weight) {
                    this.name=name;
                    this.age=age;
                    this.weight=weight;
                }
            }
            class Person extends Animal {
                private money;
                constructor(name,age,weight,money) {
                    super(name,age,weight);
                    this.money=money;
                }
                getName() {
                    console.log(this.name);
                }
                getAge() {
                    console.log(this.age);
                }
                getWeight() {
                    console.log(this.weight);
                }
            }
            let p=new Person('zfpx',9,100,100);
            console.log(p.name);
            console.log(p.age);
            console.log(p.weight);

            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets:["@babel/preset-env"]
                            }
                        }
                    },
                    {
                        test: /\.ts$/,
                        use: {
                            loader: 'ts-loader'
                        }
                    }
                ]
            }

        4、多态
            同一个接口可以不同实现
            class Animal {
                public name;
                protected age;
                private weight;
                constructor(name,age,weight) {
                    this.name=name;
                    this.age=age;
                    this.weight=weight;
                }
            }
            class Person extends Animal {
                private money;
                constructor(name,age,weight,money) {
                    super(name,age,weight);
                    this.money=money;
                }
                speak() {
                    console.log('你好!');
                }    
            }
            class Dog extends Animal {
                private money;
                constructor(name,age,weight) {
                    super(name,age,weight);
                }
                speak() {
                    console.log('汪汪汪!');
                }    
            }

            let p=new Person('zfpx',10,10,10);
            p.speak();
            let d=new Dog('zfpx',10,10);
            d.speak();
    设计原则
      SOLID五大设计原则 
      首字母	  指代        	
      S   单一职责原则	
            一个程序只做好一件事
            如果功能特别复杂就进行拆分
      O	  开放封闭原则	
            对扩展开放，对修改关闭
            增加需求时，扩展新代码，而非修改已有代码
            这是软件设计的终极目标
                
      function parseJSON(response) {
        return response.json();
      }

      function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }


      export default function request(url, options) {
        // 想加功能就then一个函数 不要动以前的函数
        // 对扩展开放，对修改关闭,单一职责,一个函数只做一件事
        return fetch(url, options)
                .then(checkStatus)
                .then(parseJSON)
                .then(data=>{data})
                .catch(err => ({ err }));
      }
      L	里氏替换原则	
          子类能覆盖父类
          父类能出现的地方子类就能出现
          JS使用比较少
      I	接口隔离原则	
          保持接口的单一独立，避免出现胖接口
          JS中没有接口，使用较少
          类似于单一职责原则，更关注接口
      D	依赖反转原则	
          面向接口编程，依赖于抽象而不依赖于具体实现
          使用方只关注接口而不关注具体类的实现
          JS中使用较少（没有接口，弱类型）
      */

