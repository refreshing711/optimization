import React from 'react'
import {NavLink} from 'react-router-dom'
import font from '@/font-awesome/css/font-awesome.css'

const MainFooter =() => (
	<footer>
		<ul>
			<li>
				<NavLink to='/home'>
				<i className='fa fa-university'></i>
				<span>首页</span>
				</NavLink>
			</li>
			<li>
				<NavLink to='/corporate'>
				<i className='fa fa-gift'></i>
				 <span>企业福利</span>
				</NavLink>
			</li>
			<li>
				<NavLink to='/cart'>
				<i className='fa fa-shopping-cart'></i>
				  <span>购物车</span>
				</NavLink>
			</li>
			<li>
				<NavLink to='/user'>
				<i className='fa fa-user'></i>
				  <span>我的</span>
				</NavLink>
			</li>
		</ul>
	</footer>
)

export default MainFooter