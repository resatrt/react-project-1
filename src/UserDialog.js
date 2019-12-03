import React from 'react'
import './UserDialog.css'
import { signUp, signIn, sendPasswordResetEmail } from './leancloud'
import SignInOrSignUp from './SignInOrSignUp'
import ForgotPassword from './ForgotPassword'

export default class UserDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'signInOrSignUp',
            formData: {
                email: '',
                username: '',
                password: ''
            }
        }
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
        return (
            <div className='UserDialog-Wrapper'>
                <div className='UserDialog'>
                    {this.state.selectedTab === 'signInOrSignUp' ?
                        <SignInOrSignUp formData={this.state.formData}
                            onChange={this.changeFormData.bind(this)}
                            onSignIn={this.signIn.bind(this)}
                            onSignUp={this.signUp.bind(this)}
                            onForgotPassword={this.showForgotPassword.bind(this)} /> :
                        <ForgotPassword formData={this.state.formData}
                            onSubmit={this.resetPassword.bind(this)}
                            onChange={this.changeFormData.bind(this)}
                            onSignIn={this.returnToSignIn.bind(this)} />}
                </div>

            </div>
        )
    }
}