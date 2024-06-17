import { createSlice } from '@reduxjs/toolkit';
import { getShortForm, postShortForm } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  shortFormData: null,
};

const shortForm = createSlice({
  name: 'shortForm',
  initialState,
  extraReducers: (builder) => {
    builder
      //POST
      .addCase(postShortForm.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(postShortForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(postShortForm.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      //GET
      .addCase(getShortForm.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.longFormData = null;
      })
      .addCase(getShortForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.longFormData = action.payload;
      })
      .addCase(getShortForm.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.longFormData = null;
      });
  },
});
export const selectShortFormIsLoading = (state) => state.shortForm.isLoading;
export const selectShortFormIsError = (state) => state.shortForm.isError;
export const selectShortFormIsSuccess = (state) => state.shortForm.isSuccess;
export const selectLongFormData = (state) => state.shortForm.shortFormData;

export default shortForm.reducer;
