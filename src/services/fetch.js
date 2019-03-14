const LOCALAPI = 'http://localhost:3000'

// const PLANTAPI = 'https://trefle.io/api/species'
// const TOKEN = 'token=a1I5V2VCUlh0UHJ0N3MvTG90dU9YQT09'

export const 	getAuthToken = (loginInfo) => {
	return fetch(`${LOCALAPI}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(loginInfo)
	}).then(res => res.json())
}

export const addNewUser = (name, password) => {
	return fetch(`${LOCALAPI}/users`, {
		method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				password: password
			})
		}).then(res => res.json())
		
}

export const getUserInfo = (id) => {
	return fetch(`${LOCALAPI}/users/${id}`).then(res => res.json())
	// console.log(fetch(`${LOCALAPI}/users/${id}`))
}

export function fetchUser() {
	return (dispatch) => {
		dispatch({ type: 'START_GETTING_USER_INFO' });
		return fetch(`${LOCALAPI}/users/`)
	}
}
	

// export const fetchUsers = () => {
// 	return fetch(`${LOCALAPI}/users`)
// 	.then(res => res.json())
// }