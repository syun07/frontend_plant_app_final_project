import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlants } from '../services/fetch'

import { Input } from 'semantic-ui-react';
import '../stylesheets/searchPage.css'

class SearchPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		getPlants().then(data => {
			console.log(data)
			// debugger
		})
	}
	render() {
		return (
			<div className='profile-info'>
				<h2 className='greeting'>Find Your Plant!</h2>
				<Input icon='search' placeholder='Search by Name...' />
			</div>
		)
	}
}

export default connect(null, { getPlants })(SearchPage);
