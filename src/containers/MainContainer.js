import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar'
import PlantsContainer from '../components/PlantsContainer'

import { Container, Grid } from 'semantic-ui-react';
import '../App.css'

class MainContainer extends Component {

	render() {
		const mainProfile =
			<div className='profile-info'>
				<h2 className='greeting'>Hello, {this.props.userData.name}!</h2>
				<ProgressBar percentage={this.props.percentage} />
				<h3>LEVEL 5</h3>
				<p className='points'>40 POINTS UNTIL LEVEL UP</p>	
			</div>

		return (
			<Grid className='App'>
				<Container className='main-container'>
					{mainProfile}
					<PlantsContainer userPlants={this.props.userPlants}/>
				</Container>
			</Grid>
		)
	}
}

const mapStateToProps = state => {
	console.log(state.userPlants)
	return ({
		percentage: state.percentage,
		userData: state.userData,
		userPlants: state.userPlants
	})
}

export default connect(mapStateToProps)(MainContainer);