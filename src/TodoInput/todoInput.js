import React from 'react'

class TodoInput extends React.Component {
    render() {
        return (
            <input type='text' value={this.props.content}//去掉default
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