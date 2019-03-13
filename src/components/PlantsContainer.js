import React from 'react';
import { Container } from 'semantic-ui-react';
import '../stylesheets/maincard.css'

import PlantCard from './PlantCard'

const PlantsContainer = props => {
	return (
		<Container className='plant-container'>
			<PlantCard />
		</Container>
	)
}

export default PlantsContainer;