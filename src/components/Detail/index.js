import React, {Component} from 'react'
import detailapi from '@/api/detail'
import store from '@/store/index'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel} from 'antd-mobile'

import './style.scss'

class Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
			imgHeight: 240,
			goodsName: '',
			goodsListImg: '',
			price: '',
			number: '',
			goodsID: '',
			imgsUrl:'',
			goodsBenUrl: '',
			discount: '',
			detail: ''
		}
	}
	
	goHome () {
		this.props.history.goBack()
	}
	
	componentDidMount() {
				const goodsID = this.props.match.params.goodsID
		detailapi.getBanner(goodsID, ({goodsName,goodsListImg,price,number,imgsUrl,goodsBenUrl,detail,discount}) => {
			this.setState({
				goodsName,goodsListImg,price,number,imgsUrl,goodsBenUrl,detail,discount
			})
		})
		setTimeout(() => {
			this.setState({
			})
		}, 100)
	}
	
	addCart () {
		if(localStorage.getItem('isLogin') == 1) {
			const userID = localStorage.getItem('userID')
			const goodsID = this.props.match.params.goodsID
			const number = 1
			detailapi.updataCart({userID,goodsID,number},(data) => {
				if(data == 0) {
					console.log('数据更新失败')
				}else{
					console.log('数据更新成功')
				}
			})
		}else{
			this.props.history.push('/login')
		}
	}
	
	
	
	render () {
 		var str = (this.state.goodsBenUrl)
		var  img = str.replace(/\[|]/g, '')
		var yin = img.replace(/\"/g, "")
		var imgs = yin.split(',')
		
		
		return(
		<div className='container'>
		  <div className='main'>
		  	<div className='content'>
					
						<WingBlank>
								<Carousel
									autoplay
									infinite
									autoplayInterval={1000}
								>
									{imgs.map((item,index) => (
										<a
											key={index}
											style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
										>
											<img
													src={item}
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
							<div>
								<h4>{this.state.goodsName}</h4>
								<p>{this.state.detail}</p>
								<span className='price'>￥{this.state.price}</span>
								<span className='through'>{this.state.discount}折</span>
							</div>
						
					
					<i className='fa fa-home fa-icon' onClick={this.goHome.bind(this)}></i>
				</div>
				
		  </div>
			<footer>
				<i className='fa fa-shopping-cart i-cart'></i>
				<span className='cart-buy'>立即购买</span>
				<span className='cart-add' onClick={this.addCart.bind(this)}>加入购物车</span>
			</footer>
		</div>
		
		)
	}
}

export default Detail