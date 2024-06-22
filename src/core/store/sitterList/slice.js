import { createSlice } from '@reduxjs/toolkit';
import { getSitterList } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  sitterListData: [],
};

const sitterList = createSlice({
  name: 'sitterList',
  initialState,
  extraReducers: (builder) => {
    builder
      //GET
      .addCase(getSitterList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSitterList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sitterListData = action.payload;
      })
      .addCase(getSitterList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const SittersListState = (state) => state.sitterList;
export const selectSitterListIsLoading = (state) => state.sitterList.isLoading;
export const selectSitterListIsError = (state) => state.sitterList.isError;
export const selectSitterListIsSuccess = (state) => state.sitterList.isSuccess;
export const selectSitterListData = (state) => state.sitterList.sitterListData;

export default sitterList.reducer;
