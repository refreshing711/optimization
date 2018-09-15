const detaildata = ( state = {
		detailBanner: []
},{type, data}) => {
	switch (type) {
		case 'DETAIL_BANNER':
			state.detailBanner= data
			return state
		default:
			return state
	}
}

export default detaildata