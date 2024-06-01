import { createSlice } from '@reduxjs/toolkit';
import { authRequest } from './thunk';
import { Status } from '../../constants/status';

const initialState = {
  status: null,
  errorMessage: null,
  accessToken: localStorage.AuthorizationAccessToken,

	user:''
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setUser: (state,action) => {
			state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authRequest.login.pending, (state) => {
        state.status = Status.Loading;
        state.errorMessage = null;
      })
      .addCase(authRequest.login.fulfilled, (state, action) => {
        state.status = Status.Resolved;
        state.accessToken = action.payload;
      })
      .addCase(authRequest.login.rejected, (state, action) => {
        state.status = Status.Rejected;
        state.errorMessage = action.payload.message;
      })
  },
});

export const { setUser } = authorizationSlice.actions;

/**
 *
 * @param {*} state
 * @returns {initialState}
 */
export const authState = (state) => state.authorization;

export default authorizationSlice.reducer;
