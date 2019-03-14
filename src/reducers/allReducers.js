let initialState = {
	form: 'b',
	loginSuccess: false,
	percentage: 50,
	userData: {},
	userPlants: [],
	activeItem: 'home'
}

export default (state = initialState, action) => {
	let plant;
	let likes;

	switch (action.type) {
		case 'CLICK_LOGIN':
			return { ...state, form: 'l' }
		case 'CLICK_SIGNUP':
			return { ...state, form: 's' }		
		case 'GO_BACK':
			return {...state, form: 'b'}
		case 'CHANGE_LOGIN':
			return { ...state, loginSuccess: true }
	

		case 'SET_USER_INFO':
			return { ...state, userData: action.data, userPlants: action.data.plants }
		
		case 'INCREASE_LEVEL':
			return { ...state, percentage: state.percentage + 5 }
		
		
		case 'HANDLE_MENU_CLICK':
			// return { ...state, activeItem: action.event.target.name }
			return { ...state }
		
		
			
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
