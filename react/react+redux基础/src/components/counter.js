import React, { Component } from 'react'
import actions from '../store/actions/counter'
import Store from '../store'
export class Counter extends Component {
    constructor(props){
        super(props)
    }
    state = {
        number:Store.getState().counter.number
    }
    add(){
        Store.dispatch(actions.add(1))
    }
    del(){
      Store.dispatch(actions.del(1))
    }
    pro(){
        console.log(this.props)
    }
    componentWillMount(){
      let a = Store.subscribe(()=>{
        this.setState({
          number:Store.getState().counter.number
        })
      })
    }
  render() {
    return (
      <div>
          <span>{this.state.number}</span>
        <button onClick={()=>this.add()}>++</button>
        <button onClick={()=>this.del()}>-</button>
        <button onClick={()=>this.pro()}>==</button>

      </div>
    )
  }
}

export default Counter
