import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../utils/mainRequest'

export const register = createAsyncThunk(
	'auth/register',
	async (payload, thunkAPI) => {
		try {
			const response = await api.post('/app/auth/users/', payload)
			return response.data.user // TODO: уточнить user нужно или нет
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const login = createAsyncThunk(
	'auth/login',
	async (payload, thunkAPI) => {
		try {
			const response = await api.post('/app/auth/token/login/', payload)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('accessToken')
})

export const getCurrentUser = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, thunkAPI) => {
		try {
			const token = localStorage.getItem('accessToken') ?? ''
			const response = await api.get('/app/auth/users/', {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			return response.data.user_id
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
