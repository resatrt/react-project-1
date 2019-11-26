import React from 'react'

class TodoItem extends React.Component {
    render() {
        return (
            <div>{this.props.todo}</div>

        )
    }
}
export default TodoItem