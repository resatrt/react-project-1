import React from 'react'
import './todoInput.css'
class TodoInput extends React.Component {
    render() {
        return (
            <input type='text' value={this.props.content}//去掉default
            className='todoInput'
            onChange={this.changeTitle.bind(this)}   
            onKeyPress={this.submit.bind(this)}
            />
        )
    }
    submit(e){
        if(e.key==='Enter'){
            this.props.onSubmit(e)
        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}
export default TodoInput