import {LOGIN_URL} from '@/server'

export default {
	goLogin({userID, password, status},cb){
		fetch(LOGIN_URL+'?status='+status+'&userID='+userID+'&password='+password)
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	}
}