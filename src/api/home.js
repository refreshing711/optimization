import fetchJsonp from 'fetch-jsonp'
import {HOME_LIST_URL} from '@/server/index.js'

export default {
	getBanner (cb) {
		fetch('../json/package.json')
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	},
	getNav (cb) {
		fetch('../json/Nav.json')
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	},
	getMain (cb) {
		fetch('../json/main.json')
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
	},
	getList (cb) {
		fetchJsonp(HOME_LIST_URL)
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err => console.log(err))
	}
}
