import React from 'react';
import './App.css';
import './reset.css';
import TodoInput from './TodoInput/todoInput';
import TodoItem from './TodoItem/todoItem';
import 'normalize.css';
import * as localStore from './localStore'

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
      todoList: localStore.load('todoList') || []
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
  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
    localStore.save('todoList', this.state.todoList)
  }
  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
    localStore.save('todoList', this.state.todoList)
  }
  delate(event, todo) {
    todo.delated = true
    this.setState(this.state)
    localStore.save('todoList', this.state.todoList)
  }
  render() {
    let todos = this.state.todoList
      .filter((item) => !item.delated)//filter函数是个筛选函数,此处item.delated的值为false，
      .map((item, index) => {      //取反为true，即取todoList里delate为false的对象
        return (
          <li key={index}>
            <TodoItem todo={item}
              onToggle={this.toggle.bind(this)}
              onDelate={this.delate.bind(this)} />
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
        <ol className='todoList'>
          {todos}
        </ol>
      </div>
    )
  }

}

export default App;

