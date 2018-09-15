import fetchJsonp from 'fetch-jsonp'
import {DETAIL_URL,DETAIL_LIST_URL,UPDATA_CART_URL} from '@/server/index'

export default {
	getBanner(goodsID, cb) {
		fetchJsonp(DETAIL_URL + '?goodsID='+ goodsID)
		.then(res => res.json())
		.then(data => cb(data[0]))
		.catch(err => console.log(err))
	},
	updataCart({userID,goodsID,number},cb) {
		fetch(UPDATA_CART_URL+'?userID='+userID+'&goodsID='+goodsID+'&number='+number)
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	}
	
}