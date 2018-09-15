import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from '@/store'
import corapi from '@/api/corporate'

import './style.scss'

class Corporate extends Component {
	constructor(props){
		super(props)
	}
	
	componentDidMount () {
		corapi.getNavlist((data) => {
			store.dispatch({
				type: 'NAV_LIST',
				data
			})
		})
	}
	
	
	render () {
		console.log(store.getState())
		return(
		  <div className='main'>
		  	<header>
					<div className='left'><Link className='left-link'  to={'/home'}><i className='fa fa-home f-head'></i></Link></div>
					<div div className='center'>企业福利</div><div className='right'></div>
				</header>
		  	<div className='content'>
					<Link to={'/home'}><img className='nav-img' src='https://mall.s.maizuo.com/ac130be5da7017aefabd19d83cf7a8dd.jpg?x-oss-process=image/quality,Q_70' /></Link>
					
					<div className='aside'>
							<ul className='aside-left'>
								<li>
									<a>
										<span>热映大片</span>
										<span>电影院走起</span>
										<img src='https://mall.s.maizuo.com/ea0e7e93d4cc34e7ca4366418d840938.jpg' />
									</a>
								</li>
							</ul>
							<ul className='aside-right'>
								<li>
									<a>
										<span>提货券专区</span>
										<span>啥都有</span>
										<img src='https://mall.s.maizuo.com/7f1ed2c6fd9394ea8a0509d6dc54bd18.jpg' />
									</a>
								</li>
								<li>
									<a>
										<span>西饼蛋糕</span>
										<span>全球优质风味</span>
										<img src='https://mall.s.maizuo.com/dcbcc36261e2a393cf24ddb3f2d06273.jpg' />
									</a>
								</li>
							</ul>
						<ul className='aside-nav'>
							{
								store.getState().corporatedata.navList.map((item, index) => (
									<li key={item.id}>
									<a>
											<span>{item.masterTitle}</span>
											<span>{item.slaveTitle}</span>
											<img src={item.imgUrl}/>
									</a>
									</li>
								))
							}
						</ul>
					</div>
					
				</div>
		  </div>
		)
	}
}

export default Corporate