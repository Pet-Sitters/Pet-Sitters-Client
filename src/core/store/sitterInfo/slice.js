import { createSlice } from '@reduxjs/toolkit';
import { getSitterInfo } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  sitterInfoData: null,
};

const sitterInfo = createSlice({
  name: 'sitterInfo',
  initialState,
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(getSitterInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSitterInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sitterInfoData = action.payload;
      })
      .addCase(getSitterInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const selectSitterInfoIsLoading = (state) => state.sitterInfo.isLoading;
export const selectSitterInfoIsError = (state) => state.sitterInfo.isError;
export const selectSitterInfoIsSuccess = (state) => state.sitterInfo.isSuccess;
export const selectSitterInfoData = (state) => state.sitterInfo.sitterInfoData;

export default sitterInfo.reducer;
