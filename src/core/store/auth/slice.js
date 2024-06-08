import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser, login, logout, register } from './thunk'

const initialState = {
	currentUser: undefined,
	isLoading: false,
	isError: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			//register
			.addCase(register.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.isError = true
			})
			//logIn
			.addCase(login.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.isError = true
			})
			//getCurrentUser
			.addCase(getCurrentUser.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.isLoading = false
				state.currentUser = null
				state.isError = true
			})
			//logOut
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.currentUser = null
				state.isError = false
			})
	},
})
export const selectCurrentUser = (state) => state.auth.currentUser
export const selectIsLoading = (state) => state.auth.isLoading
export const selectAuthError = (state) => state.auth.isError

export default authSlice.reducer
