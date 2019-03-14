import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import './App.css'


class App extends Component {

	constructor() {
		super()

		this.state = {
			name: '',
			password: ''
		}
	}

	render() {
		const openingPage = <OpeningPage />
		const mainContainer = <MainContainer />
		return (
			this.props.loginSuccess ?
				<div className='App'>
					{mainContainer}
				</div>
				:
				<div>
					{openingPage}}
			</div>
    );
  }
}

const mapStateToProps = state => {
	return ({
		loginSuccess: state.loginSuccess
	})
}

export default connect(mapStateToProps)(App);
