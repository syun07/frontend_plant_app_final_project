import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar'
import PlantsContainer from '../components/PlantsContainer'

import { Container, Grid } from 'semantic-ui-react';
import '../App.css'

class MainContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			percentage: 68
		}
	}

	render() {
		const mainProfile =
			<Container className='main-container'>
				<h2 className='greeting'>Hello, Sarah!</h2>
				<ProgressBar percentage={this.state.percentage} />
				<h3>LEVEL 5</h3>
				<p className='points'>40 POINTS UNTIL LEVEL UP </p>
				<PlantsContainer />
			</Container>

		return (
			<Grid className='App'>
					{mainProfile}
			</Grid>
		)
	}
}

const mapStateToProps = state => {
	return ({
		
	})
}

export default connect(mapStateToProps)(MainContainer);