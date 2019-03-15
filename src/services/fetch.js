const LOCALAPI = 'http://localhost:3000'

const PLANTAPI = 'https://trefle.io/api/plants'
const TOKEN = 'token=a1I5V2VCUlh0UHJ0N3MvTG90dU9YQT09'

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
}

export function getPlants() {
	return fetch(`${PLANTAPI}?${TOKEN}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
	.then(console.log)
}