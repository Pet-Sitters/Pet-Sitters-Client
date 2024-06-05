import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser, login, logout, register } from './thunk'

const initialState = {
	currentUser: undefined,
	isLoading: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			//register
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
			})
			//logIn
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
			})
			//getCurrentUser
			.addCase(getCurrentUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.currentUser = action.payload
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.isLoading = false
				state.currentUser = null
			})
			//logOut
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.currentUser = null
			})
	},
})
export const selectCurrentUser = (state) => state.auth.currentUser
export const selectIsLoading = (state) => state.auth.isLoading
export const selectAuthError = (state) => state.auth.error

export default authSlice.reducer
