import React from 'react'
import './todoInput.css'
export default function TodoInput(props) {
    return (
        <input type='text' value={props.content}//去掉default
            className='todoInput'
            onChange={changeTitle.bind(null, props)}
            onKeyPress={submit.bind(null, props)}
        />
    )
}

function submit(props, e) {
    if (e.key === 'Enter') {
        if (e.target.value.trim() !== '') { //trim()是去掉字符串两端空白字符 ‘ hello  ’=>'hello'
            props.onSubmit(e)
        }
    }
}
function changeTitle(props, e) {
    props.onChange(e)
}
