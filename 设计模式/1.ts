// function greeting1(user: string){
//     return 'hello'+user
// }
// let user1 = '123'
// console.log(greeting1(user1))

/**
 * public
 * protected
 * private
 * 
 */

 class Person {
     public name: string;
     protected age: number;
     private money: number;
     constructor(name, age, money) {
         this.name = name
         this.age = age
         this.money = money
     }
     getMoney(){
        // 这里不能访问 私有的
        console.log(`我的钱 ${this.money}`)
    }
     
 }
 // this上挂载的数据 都要用修饰符声明下
 class Student extends Person{
     public num:number ;
     constructor(name, age, money, num){
        super(name, age, money);
        this.num = num
     }
     getName(){
         console.log(`我的名字叫 ${this.name}`)
     }
     getAge(){
         console.log(`我的年龄 ${this.age}`)
     }
    //  getMoney(){
    //      // 这里不能访问 私有的
    //      console.log(`我的钱`)
    //  }
 }
 let people = new Student('zfpx', 10, 10, 1)
 console.log(people.getMoney())
//  age只能在子类和父类中访问
//  console.log(people.age)
// console.log('Person',Person.age)
