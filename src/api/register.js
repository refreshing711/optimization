import fetchJsonp from 'fetch-jsonp'
import {REGISTER_URL} from '@/server/index'

export default {
	regist ({status,userID,password},cb) {
		fetch(REGISTER_URL+'?status='+status+'&userID='+userID+'&password='+password)
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	}
}
