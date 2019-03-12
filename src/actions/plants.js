export const addPlant = plant => {
	return {
		type: 'ADD_PLANT', plant: { ...plant, likes: 0 }
	}
}

export const removePlant = plantId => {
	return {
		type: 'REMOVE_PLANT', plantId
	}
}

export const likePlant = plantId => {
	return {
		type: 'LIKE_PLANT', plantId
	}
}