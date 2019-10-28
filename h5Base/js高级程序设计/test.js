function SuperType() {
  this.arr = []
}

function SubType() {}
SubType.prototype = new SuperType()

let r1 = new SubType()
let r2 = new SubType()

console.log(r1.constructor)
console.log(r2 instanceof Object) 