import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickLogin, clickSignUp } from '../actions/login';

import { Grid, Button, Form } from 'semantic-ui-react';
import '../App.css'

class OpeningPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			whichForm: 'b'	
		}
	}
	
	render() {
	const buttonPage =
		<div className='button-page-cont'>
			<h1 className='title'>
				PLANT TRACKER
			</h1>

			<h4 className='tagline'>
				Keep track of your plants' health
			</h4>
			
			<div className='open-page-btns'>
				<Button 
					className='ui inverted green button'
					onClick={() => this.setState({whichForm: 'l'})}>
					LOGIN
				</Button>

				<Button 
					className='ui green button'
					onClick={() => this.setState({whichForm: 's'})}>
					SIGN UP
				</Button>
			</div>
		</div>
	
	
	const loginForm =
			<div className='login-form-container'>
				<Form
					onSubmit={null}>
					<h1 className='title'>LOGIN</h1>
					<Form.Field>
						<input
							placeholder='NAME'
							name='name'
							onChange={null} />
					</Form.Field>
				
					<Form.Field>
						<input
							placeholder='PASSWORD'
							name='password'
							type='password'
							onChange={(event) => this.props.handleChange(event)} />
					</Form.Field>

					<Button
						color='green'
						type='submit'>
						LOGIN
					</Button>
				</Form>
			</div>			
		
		const signupForm =
		<div className='signup-form-container'>
			<Form
				onSubmit={null}>
				<h1 className='title'>SIGN UP</h1>
				<Form.Field>
					<input
						placeholder='NAME'
						name='name'
						onChange={null} />
				</Form.Field>
			
				<Form.Field>
					<input
						placeholder='PASSWORD'
						name='password'
						type='password'
						onChange={(event) => this.props.handleChange(event)} />
				</Form.Field>

				<Button
					color='green'
					type='submit'>
					SIGN UP
				</Button>
			</Form>
		</div>		
		
	const goBackBtn =
		<div className='back-btn-cont'>
			<Button
				id='back-btn'
				className='ui inverted green button'
				onClick={() => this.setState({whichForm: 'b'})}>
				BACK
			</Button>
		</div>
		
		let whichForm;
		let goBack;

		if (this.state.whichForm === 'b') {
			whichForm = buttonPage
			goBack = null
		} else if (this.state.whichForm === 'l') {
			whichForm = loginForm
			goBack = goBackBtn
		} else if(this.state.whichForm === 's') {
			whichForm = signupForm
			goBack = goBackBtn
		}
				
		return (
			<Grid className='open-page'>
				{whichForm}
				{goBack}
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