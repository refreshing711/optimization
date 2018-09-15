import Login from '@/components/Login'
import Register from '@/components/Register'
import Detail from '@/components/Detail'
import App from '@/App'


const rootRoutes = [
	{
		path: '/register',
		component: 	Register
	},
	{
		path: '/login',
		component: 	Login
	},
	{
		path: '/detail/:goodsID',
		component: Detail
	},
	{
		path: '/',
		component: App
	}
]

export default rootRoutes