import React, { Component } from 'react'
import actions from '../store/actions/todo'
import Store from '../store'
export class TodoList extends Component {
  inp = React.createRef()
  state={
    list:Store.getState().todoList
  }
  btn(){
    Store.dispatch(actions.todo(this.inp.current.value))
  }
  componentWillMount(){
    Store.subscribe(()=>{
    console.log('componentWillMount',Store.getState().todoList)
      this.setState({
        list:Store.getState().todoList
      })
    })
  }
  render() {
    console.log('获取state',this.state)
    return (
      <div>
        <input type="text" ref={this.inp}/>
        <button onClick={()=>this.btn()}>增加</button>
        <div >
          {this.state.list.map((item,index)=>{
            return <div key={index}>{item}-{index}</div>
          })}
        </div>
      </div>
    )
  }
}

export default TodoList
