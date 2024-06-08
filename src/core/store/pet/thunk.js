import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../utils/mainRequest'

export const postPetForm = createAsyncThunk(
	'petForm/post',
	async (payload, thunkAPI) => {
		try {
			const response = await api.post('/pet/pet_crud/', payload)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
export const getPetForm = createAsyncThunk(
	'petForm/get',
	async (payload, thunkAPI) => {
		try {
			const response = await api.post('/pet/pet_crud/', payload)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.errors)
		}
	}
)
