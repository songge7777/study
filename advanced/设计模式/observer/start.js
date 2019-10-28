
class Start{
  constructor(props){
    this.name = props.name,
    this.color = props.color
    this.observer = []
  }
  getState(){
    return this.color
  }
  setState(color){
    this.color = color
    this.notifyAllObservers()
  }
  attach(arr){
   this.observer.push(arr) 
  }
  notifyAllObservers(){
    this.observer.forEach(item=>item.update())
  }
}

class Fan{
  constructor(name,start){
    this.name = name,
    this.start = start
    this.start.attach(this)
  }
  update(){
    console.log('update',`${this.name}-${this.start.getState()}`)
  }
}

let start = new Start({name:'Angular Baby',age:18})

let fan1 = new Fan('张三',start)
let fan2 = new Fan('张李四',start)

start.setState('green')