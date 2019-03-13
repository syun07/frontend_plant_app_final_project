import React from 'react';

import { Card, Icon, Image, Button } from 'semantic-ui-react';
import '../stylesheets/maincard.css';

const PlantCard = props => {
	return (
		<Card>
			<Image
				className='plant-image'
				src='https://cdn.shopify.com/s/files/1/0174/7796/products/DSC00914.jpg?v=1545105450' />
			<Card.Content>
				<Card.Header>Plants Armstrong</Card.Header>

				<Card.Meta>
					<span>Aglaonema</span>
				</Card.Meta>
				<Button color='violet'>SPECIES INFO</Button>
				<br />
				<Button color='olive'>TRACK HEALTH</Button>
				<br />
				<Button color='teal'>WATER PLANT</Button>
				<Card.Meta>
					<span id='watered-date'>LAST WATERED 3/13/2019</span>
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

export default PlantCard;
