import React, { Component } from 'react'

export default class signUpForm extends Component {
    render() {
        return (
            <form className='signUp' onSubmit={this.props.onSubmit.bind(this)}>
                <div className='row' >
                    <label>邮箱</label>
                    <input type='text' value={this.props.formData.email}
                        onChange={this.props.onChange.bind(null, 'email')} />
                    {/* bind 不仅可以绑定 this ，还可以绑定第一个参数*/}
                </div>
                <div className='row' >
                    <label>用户名</label>
                    <input type='text' value={this.props.formData.username}
                        onChange={this.props.onChange.bind(null, 'username')} />
                    {/* bind 不仅可以绑定 this ，还可以绑定第一个参数*/}
                </div>
                <div className='row'>
                    <label>密码</label>
                    <input type='password' value={this.props.formData.password}
                        onChange={this.props.onChange.bind(null, 'password')} />
                </div>
                <div className='row action'>
                    <button type='submit'>注册</button>
                </div>
            </form>
        )

    }
}  
