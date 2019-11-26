import React from 'react';
import './App.css';
import './reset.css';
import TodoInput from './TodoInput/todoInput';
import TodoItem from './TodoItem/todoItem';
import 'normalize.css';

let id = 0
function idMaker() {
  id += 1

  return id
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }
  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      delated: false,
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  changeTitle(event){
    this.setState({
      newTodo:event.target.value,
      todoList:this.state.todoList
    })
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item.title} />
        </li>
      )
    })
    return (
      <div className='App'>
        <h1>我的任务</h1>
        <div className='inputWrapper'>
          {<TodoInput 
          content={this.state.newTodo} 
          onChange={this.changeTitle.bind(this)}   
          onSubmit={this.addTodo.bind(this)} />/*此处必须绑定this*/}
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }

}

export default App;

