import React from 'react';
import './App.css';
import Input from './Input/input'
import TodoList from './TodoList/todoList'
import 'normalize.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodo: '新的待办',
      todoList: [
        { id: 1, title: '第一个待办' },
        { id: 2, title: '第二个待办' }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li>
          <TodoList todo={item}/>
        </li>
      )
    })
    return (
      <div className='App'>
        <h1>我的待办</h1>
        <div>
          <Input content={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>

    )
  }
}

export default App;
