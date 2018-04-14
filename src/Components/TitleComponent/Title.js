import React, { Component } from 'react'
import css from './Title.css'

class Title extends Component {

	constructor(props){
		super(props)

		this.state = {
			title: 'This is dummy Title',
			isInputBox: false
		}

	}


	render(){

		let titleOutput = null;

		if(this.state.isInputBox){

		}
		else{
			titleOutput = (
				<div className='d-flex Title'>
					<h1 className='display-4'>{ this.state.title }</h1>
					<span className='ml-auto editIcon'>
						<i className="fas fa-pencil-alt"></i>
					</span>
				</div>
			)
		}


		return (
			<div>
				{ titleOutput }
			</div>
		)
	}
}

export default Title;