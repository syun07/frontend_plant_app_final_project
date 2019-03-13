import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import './App.css'

const LOCALAPI = 'http://localhost:3000'

class App extends Component {

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

	render() {
		const openingPage = <OpeningPage />
		const mainContainer = <MainContainer />
    return (
			<div className='App'>
				{openingPage}
				{/* {mainContainer} */}
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
