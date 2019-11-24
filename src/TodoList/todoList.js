import React ,{Component} from 'react'

class TodoList extends Component{
    render(){
        return (
            <div>{this.props.todo.title}</div>
        )
    }
}
export default TodoList