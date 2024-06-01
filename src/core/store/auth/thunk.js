import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router'
const navigate = useNavigate

export const register = createAsyncThunk(
	'auth/register',
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post('https://api.realworld.io/api/users', {
				user: userData,
			})
			return response.data.user
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const login = createAsyncThunk(
	'auth/login',
	async (userData, thunkAPI) => {
		try {
			const response = await axios.post(
				'https://api.realworld.io/api/users/login',
				{
					user: userData,
				}
			)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('accessToken')
	navigate('/')
})

export const getCurrentUser = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, thunkAPI) => {
		try {
			const token = localStorage.getItem('accessToken') ?? ''
			const response = await axios.get(
				'https://api.realworld.io/api/user',

				{
					headers: {
						Authorization: `Token ${token}`,
					},
				}
			)
			return response.data.user_id
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
