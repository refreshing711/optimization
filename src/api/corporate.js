import fetchJsonp from 'fetch-jsonp'

export default {
	getNavlist(cb) {
		fetch('../json/wel.json')
		.then(res => res.json())
		.then(data => {
			cb(data)
		})
		.catch(err =>console.log(err))
	}
}

