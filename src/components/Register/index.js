import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import registerapi from '@/api/register'
import tool from '@/tool/tool'

import './style.scss'

class Register extends Component {
	constructor(props){
		super(props)
	}
	
	register() {
		var userID = this.refs.userID.value
		var password = this.refs.password.value
		var status = 'register'
		var flag1 = tool.isPoneAvailable(userID)
		var flag2= tool.isPasswordAvailable(password)
		if(flag1 == true && flag2 == true) {
			registerapi.regist({status,userID,password},(data) => {
					if(data == 0){
						console.log('用户民重复')
						this.refs.userID.value = ''
						this.refs.password.value = ''
					}else if(data == 1){
						console.log('注册成功')
						localStorage.setItem('isLogin', 1)
						localStorage.setItem('userID', userID)
						this.props.history.push('/home')
					}else{
						this.refs.userID.value = ''
						this.refs.password.value = ''
						console.log('请输入正确的用户名')
					}
			})
			
		}else{
			alert('请输入正确的用户名和密码')
		}

	}
	render () {		
		
		return(
			<div className='container web-login'>
		  <div className='main'>
		  	<div className='content'>
					<div className='head'>
						<p>注册</p>
						<Link to={'/login'}>登录</Link>
					</div>
					<div className='logo'>
						<img src='https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png'/>
					</div>
					<div className='form-group'>
						<input type='number' placeholder='手机号' ref='userID'/>
							<span className='code'>获取验证码</span>
						<input type='text' placeholder='验证码' />
						<input type='password' placeholder='请输入6-20位密码' ref='password'/>
							<i className='see'>11</i>
							<div className='button' onClick={this.register.bind(this)}>注册</div>
					</div>
				</div>
		  </div>
		</div>
		)
	}
}

export default Register