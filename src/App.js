import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput/todoInput'
import TodoItem from './TodoItem/todoItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '第一个任务' },
        { id: 2, title: '第二个任务' }
      ]
    }
  }
  render() {

    let todos = this.state.todoList.map((item,index)=> {
    return (
      <li>
        <TodoItem todo={item}/>
      </li>
    )
    })
    return (
      <div className='App'>
        <h1>我的任务</h1>
        <div className='inputWrapper'>
         <TodoInput content={this.state.newTodo}  />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
