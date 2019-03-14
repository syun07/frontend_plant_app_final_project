import React from 'react';
import { Container } from 'semantic-ui-react';
import '../stylesheets/maincard.css'

import PlantCard from './PlantCard'

const PlantsContainer = props => {
	// console.log(props.userPlants)
	// debugger

	const mappedPlants = props.userPlants.map(plant =>
		<PlantCard
			key={plant.id}
			id={plant.id}
			plant={plant} />
	)

	return (
		<Container className='plant-container' >
			{mappedPlants}
		</Container>
	)
}

export default PlantsContainer;