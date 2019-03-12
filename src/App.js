import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import { Segment } from 'semantic-ui-react'
import './App.css'

const LOCALAPI = 'http://localhost:3000'

class App extends Component {
	render() {
		const openingPage = <OpeningPage />
		const mainContainer = <MainContainer />
    return (
      <div className='App'>
				{mainContainer}
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
