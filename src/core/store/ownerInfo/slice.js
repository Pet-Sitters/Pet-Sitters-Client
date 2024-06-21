import { createSlice } from '@reduxjs/toolkit';
import { getOwnerInfo } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  ownerInfoData: null,
};

const ownerInfo = createSlice({
  name: 'ownerInfo',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOwnerInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.ownerInfoData = null;
      })
      .addCase(getOwnerInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.ownerInfoData = action.payload;
      })
      .addCase(getOwnerInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ownerInfoData = null;
      });
  },
});
export const selectOwnerInfoIsLoading = (state) => state.ownerInfo.isLoading;
export const selectOwnerInfoIsError = (state) => state.ownerInfo.isError;
export const selectOwnerInfoData = (state) => state.ownerInfo.ownerInfoData;
export const selectOwnerInfoIsSuccess = (state) => state.ownerInfo.isSuccess;

export default ownerInfo.reducer;
