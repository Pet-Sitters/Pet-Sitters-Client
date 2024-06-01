import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.users.skroy.ru',

	headers: { accept: 'application/json', 'Content-Type': 'application/json' },
})
