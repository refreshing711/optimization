import React, {Component} from 'react'
import store from '@/store/index.js'
import homeapi from '@/api/home'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel} from 'antd-mobile';
import {Link} from 'react-router-dom'
import Loading from '@/uicom/loading.jsx'

import './style.scss'

class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
    imgHeight: 179
		}
	}

	componentDidMount () {
		homeapi.getBanner((data) => {
			store.dispatch({
				type: 'HOME_BANNER',
				data
			})
		})
		setTimeout(() => {
			this.setState({
			});
		}, 100)
		homeapi.getNav((data) => {
			store.dispatch({
				type: 'HOME_NAV',
				data
			})
		})
		homeapi.getMain((data) => {
			store.dispatch({
				type: 'HOME_MAIN',
				data
			})
		})
		homeapi.getList((data) => {
			store.dispatch({
				type: 'HOME_LIST',
				data
			})
		})
	}
	
	onChange= (value) => {
    this.setState({ value });
  };
	
	render () {
		console.log(store.getState())
		return(
		  <div className='main'>
				<header><span className='header-log'>苏打优选</span>
      <SearchBar placeholder="搜索" maxLength={8} />
    </header>
		
				<div className='content'>
							 <WingBlank>
						<Carousel
							autoplay
							infinite
							autoplayInterval={2000}
						>
							{store.getState().homedata.homeBanner.map((item,index) => (
								<a
									key={item.id}
									style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
								>
									<img
											src={item.imgUrl}
											alt=""
											style={{ width: '100%', verticalAlign: 'top' }}
											onLoad={() => {
											// fire window resize event to change height
											window.dispatchEvent(new Event('resize'));
											this.setState({ imgHeight: 'auto' });
										}}
									/>
								</a>
							))}
						</Carousel>
					</WingBlank>
					
					<div className='nav'>
						<ul className='nav-ul'>
							{
								store.getState().homedata.homeNav.map((item, index) => (
									<li key={item.id} className='nav-li'>
									<a><i><img src={item.imgUrl}/></i><span>{item.name}</span></a>
									</li>
								))
							}
						</ul>
						<Link to={'/home'}><img className='nav-img' src='https://mall.s.maizuo.com/c53f6d95cd513962332dd77e9ea6809c.jpg?x-oss-process=image/quality,Q_70' /></Link>
					</div>
					<div className='aside'>
							<ul className='aside-left'>
								<li>
									<a>
										<span>9.9元拼团</span>
										<span>好物低价包邮</span>
										<img src='https://mall.s.maizuo.com/a557f496702637267ca65ffcb7d977dd.jpg' />
									</a>
								</li>
							</ul>
							<ul className='aside-right'>
								<li>
									<a>
										<span>每周新品</span>
										<span>新果上市</span>
										<img src='https://mall.s.maizuo.com/d4841082ef27e0be5f7c84bd1ada89b8.jpg' />
									</a>
								</li>
								<li>
									<a>
										<span>RAY面膜</span>
										<span>范冰冰推荐</span>
										<img src='https://mall.s.maizuo.com/baecf2c8e397610c4e6ecb49d110bba4.jpg' />
									</a>
								</li>
							</ul>
						<ul className='aside-nav'>
							{
								store.getState().homedata.homeMain.map((item, index) => (
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
					
					<div className='list'>
						<a className='list-head'>人气优选<i className='fa fa-thumbs-up'></i></a>
						<ul className='prolist'>
							{
								store.getState().homedata.homeList.map((item, index) => (
									<Link  key={item.goodsID} to={'/detail/'+item.goodsID}>
										<li>
											<img src={item.goodsListImg}/>
											<div className='proinfo'>
											<h4>{item.goodsName}</h4>
											<p>{item.detail}</p>
											<span>￥{(item.price)}</span>
											</div>
										</li>
									</Link>
								))
							}
						</ul>
					</div>
					<Loading display={store.getState().homedata.isLoading}/>
				</div>
		  </div>
		)
	}
}

export default Home