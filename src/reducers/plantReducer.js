export default (state = [], action) => {
	let plant;
	let likes;

	switch (action.type) {
		case 'ADD_PLANT':
			return [...state, action.plant]
		
		case 'REMOVE_PLANT':
			return state.filter(p => p.id !== action.plantId)
		
		case 'LIKE_PLANT':
			plant = state.filter(plant => plant.id === action.plantId)
			likes = plant[0].likes
			return [{ ...plant[0], likes: likes + 1 }]
		
		default:
			return state;
	}
}