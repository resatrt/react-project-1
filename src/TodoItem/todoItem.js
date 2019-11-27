import React from 'react'
import './todoItem.css'
class TodoItem extends React.Component {
    toggle(e) {
        this.props.onToggle(e, this.props.todo)
    }
    delate(e) {
        this.props.onDelate(e, this.props.todo)
    }
    render() {

        return (
            <div className='todoItem'>
                <input type='checkbox' checked={this.props.todo.status === 'completed'}
                    onChange={this.toggle.bind(this)} />
                <span className='title'> {this.props.todo.title}</span>
                <button onClick={this.delate.bind(this)}>删除</button>
            </div>
        )
    }
}
export default TodoItem