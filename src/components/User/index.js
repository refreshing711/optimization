import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.scss'

class User extends Component {
	constructor(props){
		super(props)
	}
	
	render () {
		var userid = '' 
		if(localStorage.getItem('isLogin') == 1){
	  userid = localStorage.getItem('userID')
		}else{
			this.props.history.push('/Login')
			alert('休想全身而退')
		}
		return(
		  <div className='main'>
		  	<div className='content'>
					<div className='avatar'>
						<Link to={'/login'}>
							<img src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494008930,3191605933&fm=27&gp=0.jpg'/>
							<span className='userID'>{userid}</span>
						</Link>
					</div>
					<div className='order'>
						<ul>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-credit-card'></i>
									<span>待付款</span>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-archive'></i>
									<span>待发货</span>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-truck'></i>
									<span>待收货</span>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-repeat'></i>
									<span>退款售后</span>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-file-text-o'></i>
									<span>我的订单</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className='set'>
						<ul>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-credit-card'></i>
									<span>苏打卡</span>
									<b className='fa fa-angle-right'></b>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-archive'></i>
									<span>现金券</span>
									<b className='fa fa-angle-right'></b>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-phone-square'></i>
									<span>客服</span>
									<b className='fa fa-angle-right'></b>
								</Link>
							</li>
							<li>
								<Link to={'/login'}>
									<i className='fa fa-cog'></i>
									<span>设置</span>
									<b className='fa fa-angle-right'></b>
								</Link>
							</li>
						</ul>
					</div>
					
				</div>
				
		  </div>
		)
	}
}

export default User