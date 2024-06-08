import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../utils/mainRequest'

export const postLongForm = createAsyncThunk(
	'longForm/post',
	async (payload, thunkAPI) => {
		try {
			const response = await api.post('/long_form/long_form_crud/', payload)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const getLongForm = createAsyncThunk(
	'longForm/get',
	async (payload, thunkAPI) => {
		try {
			const response = await api.get('/long_form/long_form_crud/', payload)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
