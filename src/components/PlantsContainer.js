import React from 'react';
import { Card } from 'semantic-ui-react';
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
		<Card.Group itemsPerRow={4} className='plant-container' >
			{mappedPlants}
		</Card.Group>
	)
}

export default PlantsContainer;