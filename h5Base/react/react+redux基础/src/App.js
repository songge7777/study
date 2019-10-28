import React, { Component } from 'react'
import Counter from './components/counter'
import TodoList from './components/todoList'
export class App extends Component {


  render() {
    return (
      <div>
        <Counter number={123}/>
        <TodoList/>
      </div>
    )
  }
}

export default App
