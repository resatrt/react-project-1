import React from 'react'

class TodoItem extends React.Component {
    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }

    render() {

        return (
            <div>
               <input type='checkbox' checked={this.props.todo.status==='completed'} 
               onChange={this.toggle.bind(this)}/>
               {this.props.todo.title}
            </div>
        )
    }
}
export default TodoItem