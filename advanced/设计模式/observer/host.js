class Agent{
  constructor(){
    this._events={}
  }
  subscribe(type,listener){
    let listeners = this._events[type]
    if(listeners){
      listeners.push(listener)
    }else{
      this._events[type] = [listener]
    }
  }
  publish(type){
    let listeners = this._events[type]
    let args = Array.prototype.slice.call(arguments,1)
    listeners.forEach(listener => {
      listener(...args)
    });
  }
}
class Tenant{
  constructor(name){
    this.name = name
  }
  rent(agent){
    agent.subscribe('house1',(money,area)=>{
      console.log(`${this.name}--要租房房子，现有--${money}钱---${area}平`)
    })
  }
}
class Landlord{
  constructor(name){
    this.name = name
  }
  lend(agent,area,money){ 
    agent.publish('house1',area,money)
  } 

}

let agent = new Agent();
let t1 = new Tenant('张三')
let t2 = new Tenant('李四')
t1.rent(agent)
t2.rent(agent)

let l1 = new Landlord('李阿姨')
l1.lend(agent,100,1500)

