import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.realworld.io/api/users',

	headers: { accept: 'application/json', 'Content-Type': 'application/json' },
})
