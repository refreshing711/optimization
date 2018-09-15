import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import loginapi from '@/api/login'

import './style.scss'

class Login extends Component {
	constructor(props){
		super(props)
	}
	
	login () {
		var userID =this.refs.userID.value
		var password = this.refs.password.value
		var status = 'login'
		loginapi.goLogin({userID, password, status},(data) => {
			if(data == 0) {
				console.log('该用户还未注册,请先注册')
				this.refs.userID.value = ''
				this.refs.password.value = ''
			}else if (data == 2) {
				this.refs.userID.value = ''
				this.refs.password.value = ''
				console.log('密码错误')
			}else{
				 localStorage.setItem('isLogin','1')
				 localStorage.setItem('userID',userID)
				 this.props.history.goBack()
			}
		}) 
	}
	
	render () {
		
		return(
			<div className='container web-login'>
		  <div className='main'>
		  	<div className='content'>
					<div className='head'>
						<Link to={'/register'}>注册</Link>
					</div>
					<div className='logo'>
						<img src='https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png'/>
					</div>
					<div className='form-group'>
						<input type='number' placeholder='手机号' ref='userID'/>
							<span className='code'>获取验证码</span>
						<input type='text' placeholder='验证码' ref ='password' />
							<div className='button' onClick={this.login.bind(this)}>短信登录</div>
					</div>
				</div>
		  </div>
		</div>
		)
	}
}

export default Login