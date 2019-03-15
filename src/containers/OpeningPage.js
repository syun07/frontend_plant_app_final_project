import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickLogin, clickSignUp, changeLogin, goBack, setUserInfo } from '../actions/allActions';

import { Grid, Button, Form } from 'semantic-ui-react';
import '../App.css'
import { addNewUser, getAuthToken, getUserInfo } from '../services/fetch';


class OpeningPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			password: '',
			newName: '',
			newPassword: ''
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})	
	}

	handleSubmit = event => {
		event.preventDefault();
		addNewUser(this.state.newName, this.state.newPassword)
		event.target.reset()
		this.props.clickLogin()
		this.setState({
			newName: '',
			newPassword: ''
		})
	}

	handleLogin = event => {
		event.preventDefault();
		getAuthToken({ name: this.state.name, password: this.state.password })
			.then(payload => {
				if (payload.user) {
					localStorage.setItem("token", payload.jwt)

					getUserInfo(payload.user.id).then((data) => this.props.setUserInfo(data))
					this.props.changeLogin()
			} else {
				alert("INVALID LOGIN!")
			}
		})
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
					onClick={this.props.clickLogin}>
					LOGIN
				</Button>

				<Button 
					className='ui green button'
					onClick={this.props.clickSignUp}>
					SIGN UP
				</Button>
			</div>
		</div>
	
	
	const loginForm =
			<div className='login-form-container'>
				<Form
					onSubmit={this.handleLogin}>
					<h1 className='title'>LOGIN</h1>
					<Form.Field>
						<input
							placeholder='NAME'
							name='name'
							onChange={this.handleChange} />
					</Form.Field>
				
					<Form.Field>
						<input
							placeholder='PASSWORD'
							name='password'
							type='password'
							onChange={this.handleChange} />
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
				onSubmit={this.handleSubmit}>
				<h1 className='title'>SIGN UP</h1>
				<Form.Field>
					<input
						placeholder='NAME'
						name='newName'
						onChange={this.handleChange} />
				</Form.Field>
			
				<Form.Field>
					<input
						placeholder='PASSWORD'
						name='newPassword'
						type='password'
						onChange={this.handleChange} />
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
				onClick={this.props.goBack}>
				BACK
			</Button>
		</div>
		
		let whichForm;
		let goBack;

		if (this.props.form === 'b') {
			whichForm = buttonPage
			goBack = null
		} else if (this.props.form === 'l') {
			whichForm = loginForm
			goBack = goBackBtn
		} else if(this.props.form === 's') {
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
		form: state.form
	})
}

export default connect(mapStateToProps, { clickLogin, clickSignUp, changeLogin, goBack, setUserInfo })(OpeningPage)