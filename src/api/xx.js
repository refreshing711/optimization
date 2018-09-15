// 		detailapi.getBanner ((data) => {
// 				store.dispatch({
// 					type: 'DETAIL_BANNER',
// 					data
// 				})
// 		})



// 		setTimeout(() => {
// 			this.setState({
// 			});
// 		}, 100)
		
		//<img ng-repeat="img in imgs track by $index" src="{{img}}"/>

	<WingBlank>
						<Carousel
							autoplay
							infinite
							autoplayInterval={1000}
						>
							{store.getState().detaildata.detailBanner.map((item,index) => (
								<a
									key={item.productId}
									style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
								>
									<img
											src={item.skuList[0].imgUrls[index]}
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
	
	
	
						
						{/*
							store.getState().detaildata.detailBanner.map((item,index) => (
									<div className='item-info' key={item.productId}>
										<h4>{item.masterName}</h4>
										<p>{item.slaveName}</p>
										<span className='price'>￥{(item.minPrice*0.01).toFixed(1)}</span>
										<span className='through'>￥{(item.minMarketPrice*0.01).toFixed(1)}</span>
									</div>
							))
						*/}
						
						
						
						
						imgHeight: 240,

						
						
						
						
						
						
						<WingBlank>
											<Carousel
												autoplay
												infinite
												autoplayInterval={1000}
											>
													<a
											
														style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
													>
														<img
																ng-repeat="img in imgs track by $index" src="{{img}}"
																alt=""
																style={{ width: '100%', verticalAlign: 'top' }}
																onLoad={() => {
																// fire window resize event to change height
																window.dispatchEvent(new Event('resize'));
																this.setState({ imgHeight: 'auto' });
															}}
														/>
													</a>
												
											</Carousel>
										</WingBlank>
										
										
	{
		this.state.map((item,index) => (
				<div className='item-info' key={item.goodsID}>
					<h4>{item.goodsName}</h4>
					<p>{item.detail}</p>
					<span className='price'>￥{(item.price).toFixed(1)}</span>
					<span className='through'>￥{(item.discount).toFixed(1)}</span>
				</div>
		))
	}