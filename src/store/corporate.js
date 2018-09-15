const corporatedata = (state = {
	navList: []
}, {type, data}) => {
	switch (type) {
		case 'NAV_LIST' :
		state.navList = data
		return state
	default :
		return state
	}
}

export default corporatedata