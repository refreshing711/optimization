import React, {Component} from 'react'

class Loading extends Component {
	constructor(props) {
		super(props)
	}
	
	render(){
	  return(
		<div id="loading" style={{display: this.props.display}}>
    <div id="loader" className="heart"></div>
		</div>
	  )
	}
}

export default Loading