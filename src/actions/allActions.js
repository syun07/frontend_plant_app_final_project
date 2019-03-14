export const clickLogin = () => {
	return {
		type: 'CLICK_LOGIN'
	}
}

export const clickSignUp = () => {
	return {
		type: 'CLICK_SIGNUP'
	}
}

export const goBack = () => {
	return {
		type: 'GO_BACK'
	}
}

export const changeLogin = () => {
	return {
		type: 'CHANGE_LOGIN'
	}
}

//////////////////////////////////////////////////////////////////////

export const setUserInfo = (data) => {
	return {
		type: 'SET_USER_INFO', data
	}
}

export const increaseLevel = () => {
	return {
		type: 'INCREASE_LEVEL'
	}
}

//////////////////////////////////////////////////////////////////////

export const handleMenuClick = (event, name) => {
	return {
		type: 'HANDLE_MENU_CLICK', event, name: event.target.name
	}
}

//////////////////////////////////////////////////////////////////////

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

