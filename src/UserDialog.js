import React from 'react'

export default class UserDialog extends React.Component {
    render() {
        return (
            <div className='UserDialog-Wrapper'>
                <div className='UserDialog'>
                    <nav>
                        <input type='radio' />注册
                        <input type='radio' />登录
                    </nav>
                    <div className='panes'>
                    <form className='signUp'>
                        <div className='row' >
                          <label>用户名</label> 
                          <input type='text' />     
                        </div>
                        <div className='row'>
                          <label>密码</label> 
                          <input type='password' />     
                        </div>
                        <div className='row'>
                            <button type='submit'>注册</button>
                        </div>
                    </form>
                    <form className='signIn'>
                        <div className='row'>
                          <label>用户名</label> 
                          <input type='text' />     
                        </div>
                        <div className='row'>
                          <label>密码</label> 
                          <input type='password' />     
                        </div>
                        <div className='row action'>
                            <button type='submit'>登录</button>
                        </div>
                    </form>
                    </div>
                </div>

            </div>
        )
    }
}