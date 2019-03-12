import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickLogin, clickSignUp } from '../actions/login';

import { Grid, Button } from 'semantic-ui-react';
import '../App.css'

class OpeningPage extends Component {
	render() {
		console.log(this.props)
		return (
			<Grid className='open-page'>

				<h1 className='title'>
					PLANT TRACKER
				</h1>
				<h4 className='tagline'>
					Keep track of your plants' health
				</h4>

				<div className='open-page-btns'>
					<Button 
						className='ui inverted green button'
						onClick={() => this.props.clickLogin({letter: 'l'})}>
						LOGIN
					</Button>

					<Button 
						className='ui green button'
						onClick={() => this.props.clickSignUp({letter: 's'})}>
						SIGN UP
					</Button>
				</div>
						
			</Grid>
		)
	}
}

const mapStateToProps = state => {
	return ({
		renderPage: state.page
	})
}

export default connect(mapStateToProps, { clickLogin, clickSignUp })(OpeningPage)