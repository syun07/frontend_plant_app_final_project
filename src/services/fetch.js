const LOCALAPI = 'http://localhost:3000'

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

export const 	getAuthToken = (loginInfo) => {
		return fetch(`${LOCALAPI}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(loginInfo)
		}).then(res => res.json())
	}