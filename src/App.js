import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import './App.css'

const LOCALAPI = 'http://localhost:3000'

class App extends Component {

	constructor() {
		super()

		this.state = {
			name: '',
			password: '',
			loggedIn: false
		}
	}

	handleLogin = event => {
		event.preventDefault();
		this.getAuthToken({ name: this.state.name, password: this.state.password })
			.then(payload => {
				if (payload.user) {
					localStorage.setItem('token', payload.token)
					this.setState({
						enterPage: 'p'
					})
					return fetch(`${LOCALAPI}/users/${payload.user.id.toString()}`)
				}
			})
	}
	
	getAuthToken(loginInfo) {
		return fetch(`${LOCALAPI}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginInfo)
		}).then(res => res.json())
	}

	loginSuccess = () => {
		this.setState({
			loggedIn: true
		})
	}

	render() {
		const openingPage = <OpeningPage loginSuccess={this.loginSuccess}/>
		const mainContainer = <MainContainer />
		return (
			this.state.loggedIn ?
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
		renderPage: state.page
	})
}

export default connect(mapStateToProps)(App);
