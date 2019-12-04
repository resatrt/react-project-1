import React from 'react';
import './App.css';
import './reset.css';
import TodoInput from './TodoInput/todoInput';
import TodoItem from './TodoItem/todoItem';
import 'normalize.css';
import UserDialog from './UserDialog';
import {getCurrentUser,signOut} from './leancloud';
import AV  from './leancloud'

//声明类型
var TodoFolder = AV.Object.extend('TodoFolder');
//新建对象
var todoFolder = new TodoFolder();
//设置名称
todoFolder.set('name','工作')
//设置优先级
todoFolder.set('priority',1)
todoFolder.save().then(function(todo){
  console.log('objectID is'+todo.id)
},function(error){
  console.log(error)
})


let id = 0
function idMaker() {
  id += 1

  return id
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: getCurrentUser||{},
      newTodo: '',
      todoList: []
    }
  }
  componentDidUpdate() {

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
  }
  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  delate(event, todo) {
    todo.delated = true
    this.setState(this.state)
  }
  onSignUpOrSignIn(user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy) //此处传入的值被智能提示成this.state了，因此更新的不是更改后的state值，导致注册完成后userDialog不消失
  }
  signOut(){
    signOut()
    let stateCopy=JSON.parse(JSON.stringify(this.state))
    stateCopy.user={}
    this.setState(stateCopy)
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
        <h1>{this.state.user.username || '我'}的待办
    {this.state.user.id?<button onClick={this.signOut.bind(this)}>登出</button>:null}</h1>
        <div className='inputWrapper'>
          {<TodoInput
            content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)} />/*此处必须绑定this*/}
        </div>
        <ol className='todoList'>
          {todos}
        </ol>
        {this.state.user.id ? 
        null : 
        <UserDialog 
        onSignUp={this.onSignUpOrSignIn.bind(this)} 
        onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    )
  }

}

export default App;

