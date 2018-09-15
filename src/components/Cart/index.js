import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.scss'

class Cart extends Component {
	constructor(props){
		super(props)
	}
	
	render () {
		return(
		  <div className='main'>
		  	<header>
		  		<div className='left'><Link className='left-link'  to={'/home'}><i className='fa fa-home f-head'></i></Link></div>
		  		<div div className='center'>购物车</div><div className='right'></div>
		  	</header>
		  	<div className='content'><div className='cart-img'>
						<i className='fa fa-cart-plus'></i>
						<p>去挑一些喜欢的东西吧</p>
					</div>
				</div>
					
		  </div>
		)
	}
}

export default Cart