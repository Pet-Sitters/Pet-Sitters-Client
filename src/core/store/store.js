import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import longFormReducer from './longForm/slice'
import petFormReducer from './pet/slice'
export const store = configureStore({
	reducer: {
		auth: authReducer,
		longForm: longFormReducer,
		petForm: petFormReducer,
	},
})
