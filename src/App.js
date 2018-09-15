import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, Redirect} from 'react-router-dom'
import appRoutes from '@/router/appRoutes'

import './main.scss'
import MainFooter from '@/components/MainFooter'


class App extends Component {
	constructor(props){
		super(props)
	}
	
  render() {
    return (
      <div className="container">
				<Switch>
					{
						appRoutes.map((item, index) => {
						return (<Route key={index} path={item.path}  component={item.component}/>)
						})
					}
					<Redirect to={{pathname: '/home'}} />
				</Switch>
				<MainFooter />
      </div>
    )
  }
}

export default App
