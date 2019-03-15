import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input } from 'semantic-ui-react';


import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import './App.css'

import { handleMenuClick } from './actions/allActions'


class App extends Component {

	constructor() {
		super()

		this.state = {
			name: '',
			password: '',
		}
	}

	render() {
			const navBar =
				<Menu pointing>
					<Menu.Item
						name='home'
						onClick={(event, name) => this.props.handleMenuClick(event, name)} />
          <Menu.Item
            name='findPlantByName'
            onClick={this.props.handleMenuClick} />
          <Menu.Item
            name='findPlantByDescription'
            onClick={this.props.handleMenuClick} />
        </Menu>

		const openingPage = <OpeningPage />
		const mainContainer = <MainContainer />
		return (
			this.props.loginSuccess ?
				<div className='App'>
					{navBar}
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
	console.log(state.activeItem)
	return ({
		loginSuccess: state.loginSuccess,
		activeItem: state.activeItem
	})
}

export default connect(mapStateToProps, { handleMenuClick })(App);
