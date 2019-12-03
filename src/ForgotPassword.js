import React, { Component } from 'react'

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className='forgotPassword'>
                <h3>重置密码</h3>
                <form className='formPassword' onSubmit={this.props.onSubmit}>
                    <div className='row'>
                        <label>邮箱</label>
                        <input type='text' value={this.props.formData.email}
                            onChange={this.props.onChange.bind(null, 'email')} />
                    </div>
                    <div className='row action'>
                        <button type='submit'>发送</button>
                        <a href='/#' onClick={this.props.onSignIn}>返回登录</a>
                    </div>
                </form>
            </div>
        )
    }
}