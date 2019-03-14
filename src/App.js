import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input } from 'semantic-ui-react';


import MainContainer from './containers/MainContainer';
import OpeningPage from './containers/OpeningPage';
import './App.css'


class App extends Component {

	constructor() {
		super()

		this.state = {
			name: '',
			password: '',
			activeItem: 'home'
		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render() {
		const { activeItem } = this.state

			const navBar =
				<Menu pointing>
					<Menu.Item
						name='home'
						active={activeItem === 'home'}
						onClick={this.handleItemClick} />
          <Menu.Item
            name='addPlant'
            active={activeItem === 'addPlant'}
            onClick={this.handleItemClick} />
          <Menu.Item
            name='explorePlants'
            active={activeItem === 'explorePlants'}
            onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
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
	return ({
		loginSuccess: state.loginSuccess
	})
}

export default connect(mapStateToProps)(App);
