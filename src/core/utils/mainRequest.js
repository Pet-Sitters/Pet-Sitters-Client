import axios from 'axios'

const api = axios.create({
	baseURL: 'http://89.223.123.5/',
	headers: {
		accept: 'application/json',
		// 'Content-Type': 'application/json',
	},
	// withCredentials: true,
})

export default api
