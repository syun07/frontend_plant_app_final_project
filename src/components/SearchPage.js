import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlants } from '../services/fetch'

import { Container, Grid } from 'semantic-ui-react';
import '../stylesheets/searchPage.css'

class SearchPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		getPlants()
	}
	render() {
		return (
			<h1>hi</h1>
		)
	}
}

export default connect(null, { getPlants })(SearchPage);
