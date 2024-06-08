import { createSlice } from '@reduxjs/toolkit'
import { getLongForm, postLongForm } from './thunk'

const initialState = {
	isLoading: false,
	isError: false,
	longFormData: null,
}

const longForm = createSlice({
	name: 'longForm',
	initialState,
	extraReducers: (builder) => {
		builder
			//POST
			.addCase(postLongForm.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(postLongForm.fulfilled, (state) => {
				state.isLoading = false
				state.isError = false
			})
			.addCase(postLongForm.rejected, (state) => {
				state.isLoading = false
				state.isError = true
			})
			//GET
			.addCase(getLongForm.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.longFormData = null
			})
			.addCase(getLongForm.fulfilled, (state) => {
				state.isLoading = false
				state.isError = false
				state.longFormData = action.payload
			})
			.addCase(getLongForm.rejected, (state) => {
				state.isLoading = false
				state.isError = true
				state.longFormData = null
			})
	},
})
export const selectLongFormIsLoading = (state) => state.longForm.isLoading
export const selectLongFormIsError = (state) => state.longForm.isError
export const selectLongFormData = (state) => state.longForm.longFormData

export default longForm.reducer
