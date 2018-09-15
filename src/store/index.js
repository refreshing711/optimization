import {createStore, combineReducers} from 'redux'
import homedata from './home.js'
import detaildata from './detail.js'
import corporatedata from './corporate'

const reducer = combineReducers({
	homedata,
	detaildata,
	corporatedata
})

const store = createStore(reducer)

export default store