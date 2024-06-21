import { createSlice } from '@reduxjs/toolkit';
import { getKeep } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  keepsData: null,
};

const keepList = createSlice({
  name: 'keepList',
  initialState,
  extraReducers: (builder) => {
    builder
      //POST
      // .addCase(postLongForm.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      // })
      // .addCase(postLongForm.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.isError = false;
      // })
      // .addCase(postLongForm.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      // })
      //GET
      .addCase(getKeep.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.keepsData = null;
        state.isSuccess = false;
      })
      .addCase(getKeep.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.keepsData = action.payload;
      })
      .addCase(getKeep.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.keepsData = null;
        state.isSuccess = false;
      });
  },
});
export const selectKeepIsLoading = (state) => state.keepList.isLoading;
export const selectKeepIsError = (state) => state.keepList.isError;
export const selectKeepData = (state) => state.keepList.keepsData;
export const selectKeepDataIsSuccess = (state) => state.keepList.isSuccess;

export default keepList.reducer;
