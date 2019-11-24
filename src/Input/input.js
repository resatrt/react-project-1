import React ,{Component} from 'react'

class Input extends Component{
    render(){
        return(
            <input type='text' value={this.props.content}/>
        )
    }
}

export default Input