import axios from 'axios'

const api = axios.create({
	baseURL: 'http://89.223.123.5/',
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json',
		'X-CSRFTOKEN':
			'3ikJHEAoj4cTvldbNqblfY8md0Cy8ljngZCZcRNaXyq1lFvqQoLts7kR6eF0sDzb',
	},
})

export default api
