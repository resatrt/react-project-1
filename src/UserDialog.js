import React from 'react'
import './UserDialog.css'
import { signUp, signIn, sendPasswordResetEmail } from './leancloud'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import ForgotPassword from './ForgotPassword'

export default class UserDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'signUp',
            selectedTab: 'signInOrSignUp',
            formData: {
                email: '',
                username: '',
                password: ''
            }
        }
    }
    switch(e) {
        this.setState({
            selected: e.target.value
        })
    }
    signUp(e) {
        e.preventDefault()
        let { email, username, password } = this.state.formData
        let success = (user) => {
            this.props.onSignUp.call(null, user)//用call 就不指定this
        }
        let error = (error) => {
            switch (error.code) {
                case 202:
                    alert('用户名已被占用')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signUp(email, username, password, success, error)
    }
    signIn(e) {
        e.preventDefault()
        let { username, password } = this.state.formData
        let success = (user) => {
            this.props.onSignIn.call(null, user)
        }
        let error = (error) => {
            switch (error.code) {
                case 210:
                    alert('用户名与密码不匹配')
                    break
                default:
                    alert(error)
                    break
            }
        }
        signIn(username, password, success, error)
    }
    changeFormData(key, e) { //第一个的参数是绑定的，username之类的，后面的是事件本身
        let stateCopy = JSON.parse(JSON.stringify(this.state))//用JSON 深拷贝
        stateCopy.formData[key] = e.target.value  //改state里的值必须用setstate，不然会报错
        this.setState(stateCopy)
    }
    showForgotPassword() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'forgotPassword'
        this.setState(stateCopy)
    }
    resetPassword(e) {
        e.preventDefault()
        sendPasswordResetEmail(this.state.formData.email)
    }
    returnToSignIn() {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'signInOrSignUp'
        this.setState(stateCopy)
    }
    render() {


        let signInOrSignUp = (
            <div className='signInOrSignUp'>
                <nav >
                    <label><input type='radio' value='signUp'
                        checked={this.state.selected === 'signUp'}
                        onChange={this.switch.bind(this)}
                    />注册</label>
                    <label><input type='radio' value='signIn'
                        checked={this.state.selected === 'signIn'}
                        onChange={this.switch.bind(this)}
                    />登录</label>
                </nav>
                <div className='panes'>
                    {this.state.selected === 'signUp' ?
                        <SignUpForm formData={this.state.formData}
                            onSubmit={this.signUp.bind(this)}
                            onChange={this.changeFormData.bind(this)} />
                        : null}
                    {this.state.selected === 'signIn' ?
                        <SignInForm formData={this.state.formData}
                            onSubmit={this.signIn.bind(this)}
                            onChange={this.changeFormData.bind(this)}
                            onForgotPassword={this.showForgotPassword.bind(this)} />
                        : null}
                </div>
            </div>

        )
        return (
            <div className='UserDialog-Wrapper'>
                <div className='UserDialog'>
                    {this.state.selectedTab === 'signInOrSignUp' ? signInOrSignUp :
                        <ForgotPassword formData={this.state.formData}
                            onSubmit={this.resetPassword.bind(this)}
                            onChange={this.changeFormData.bind(this)}
                            onSignIn={this.returnToSignIn.bind(this)} />}
                </div>

            </div>
        )
    }
}