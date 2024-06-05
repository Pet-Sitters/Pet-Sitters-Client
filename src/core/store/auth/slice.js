import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser, login, logout, register } from './thunk'

const initialState = {
	currentUser: undefined,
	isLoading: false,
	isError: false,
	errorMessage: '',
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
				state.errorMessage = ''
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.isError = true
				state.errorMessage = action.error.message || 'Registration failed'
			})
			//logIn
			.addCase(login.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.isError = true
				state.errorMessage = action.error.message || 'Login failed'
			})
			//getCurrentUser
			.addCase(getCurrentUser.pending, (state) => {
				state.isLoading = true
				state.isError = false
				state.errorMessage = ''
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.isLoading = false
				state.currentUser = null
				state.isError = true
				state.errorMessage =
					action.error.message || 'Failed to fetch current user'
			})
			//logOut
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.currentUser = null
				state.isError = false
				state.errorMessage = ''
			})
	},
})
export const selectCurrentUser = (state) => state.auth.currentUser
export const selectIsLoading = (state) => state.auth.isLoading
export const selectAuthError = (state) => state.auth.isError
export const selectAuthErrorMessage = (state) => state.auth.errorMessage

export default authSlice.reducer
