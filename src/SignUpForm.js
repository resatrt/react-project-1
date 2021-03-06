import React from 'react'

export default function signUpForm (props) {
        return (
            <form className='signUp' onSubmit={props.onSubmit.bind(this)}>
                <div className='row' >
                    <label>邮箱</label>
                    <input type='text' value={props.formData.email}
                        onChange={props.onChange.bind(null, 'email')} />
                    {/* bind 不仅可以绑定 this ，还可以绑定第一个参数*/}
                </div>
                <div className='row' >
                    <label>用户名</label>
                    <input type='text' value={props.formData.username}
                        onChange={props.onChange.bind(null, 'username')} />
                    {/* bind 不仅可以绑定 this ，还可以绑定第一个参数*/}
                </div>
                <div className='row'>
                    <label>密码</label>
                    <input type='password' value={props.formData.password}
                        onChange={props.onChange.bind(null, 'password')} />
                </div>
                <div className='row action'>
                    <button type='submit'>注册</button>
                </div>
            </form>
        )

    }

