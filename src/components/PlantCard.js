import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';
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
					<span className='date'>Aglaonema</span>
				</Card.Meta>

				<Card.Description>Aglaonemas are slow growing, attractive, and make excellent foliage plants. They have large, narrow, and glossy oval leaves on short stems.</Card.Description>

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
