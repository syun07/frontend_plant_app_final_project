import React from 'react';

import { Card, Icon, Image, Button } from 'semantic-ui-react';
import '../stylesheets/maincard.css';

import { connect } from 'react-redux';
import { increaseLevel } from '../actions/allActions';

const PlantCard = props => {
	return (
		<Card>
			<Image
				className='plant-image'
				src={props.plant.image} />
			<Card.Content>
				<Card.Header>{props.plant.name}</Card.Header>

				<Card.Meta>
					<span>{props.plant.breed}</span>
				</Card.Meta>
				<Button color='violet'>SPECIES INFO</Button>
				<br />
				<Button color='olive'>TRACK HEALTH</Button>
				<br />
				<Button onClick={() => props.increaseLevel}color='teal'>WATER PLANT</Button>
				<Card.Meta>
					<span id='watered-date'>LAST WATERED ON {props.plant.water_history.toUpperCase()}</span>
				</Card.Meta>

				<p className='likes'>
					<Icon name='heart outline' />
					22 Likes
				</p>
				<p className='comments'>
					<Icon name='comment outline' />
					5 Comments
				</p>
			</Card.Content>
		</Card>
	)
}

export default connect(null, { increaseLevel })(PlantCard);
