let initialState = {
	page: 'o',
	form: 'b'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'CLICK_LOGIN':
			return { ...state, form: 'l' }
		case 'CLICK_SIGNUP':
			return { ...state, form: 's' }
		default:
			return state
	}
}