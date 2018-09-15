const homedata = (state = {
	homeBanner: [],
	homeNav: [],
	homeMain: [],
	homeList: [],
	isLoading:'block'
},{type,data}) => {
	switch (type){
		case 'HOME_BANNER':
			state.homeBanner = data
			state.isLoading = 'none'
			return state
		case 'HOME_NAV':
			state.homeNav= data
			state.isLoading = 'none'
			return state
		case 'HOME_MAIN':
			state.homeMain= data
			state.isLoading = 'none'
			return state
		case 'HOME_LIST':
			state.homeList= data
			state.isLoading = 'none'
			return state
		default:
			return state
	}
}

export default homedata
