import Home from '@/components/Home/index'
import Corporate from '@/components/Corporate/index'
import Cart from '@/components/Cart/index'
import User from '@/components/User/index'

const appRoutes = [
	{
		path: '/home',
		component: Home,
	},
	{
		path: '/corporate',
		component: Corporate,
	},
	{
		path: '/cart',
		component: Cart,
	},
	{
		path: '/user',
		component: User,
	}
]

export default appRoutes