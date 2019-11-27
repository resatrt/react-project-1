import React from 'react'

class TodoItem extends React.Component {
    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }
    delate(e){
        this.props.onDelate(e,this.props.todo)
    }
    render() {

        return (
            <div>
               <input type='checkbox' checked={this.props.todo.status==='completed'} 
               onChange={this.toggle.bind(this)}/>
               {this.props.todo.title}
               <button onClick={this.delate.bind(this)}>删除</button>
            </div>
        )
    }
}
export default TodoItem