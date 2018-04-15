import React, { Component } from 'react';
import './App.css';
import Title from './TitleComponent/Title'
import CountDown from './CountDownComponent/countDown'
import Controller from './ControllerComponent/Controller'

class App extends Component {


	constructor(props){
		super(props)

		this.state = {
			time: {
				min: 0,
				sec: 0,
				mili: 0
			}
		}
	}

  render() {
    return (
      <div className='App'>
        <div className='container py-5'>
          <div className='row'>
          	<div className='col-sm-8 offset-sm-2'>
          		<Title />
          		<CountDown time={ this.state.time } />
          		<Controller />
          	</div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
