import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import store from '@/store/index.js'
import rootRoutes from '@/router/rootRoutes'
import ErrorBoundary from './ErrorBoundary'
import registerServiceWorker from './registerServiceWorker';

var routelist = []
rootRoutes.map((item, index) => {
	routelist.push(<Route key={index} path={item.path} component={item.component} />)
})

function render () {
	ReactDOM.render(
					<ErrorBoundary>
					<Router>
					  <Switch>
							{
								routelist
							}
					  </Switch>
					</Router>
					</ErrorBoundary>, 
			document.getElementById('root'));
}

render()

store.subscribe(render)
		
registerServiceWorker();
