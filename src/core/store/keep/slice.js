import { createSlice } from '@reduxjs/toolkit';
import {deleteKeep, getKeep, updateKeep} from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  keepsData: null,
};

const keepList = createSlice({
  name: 'keepList',
  initialState,
  reducers: {
    resetKeepListState: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    }
  },
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
      })
      // DELETE
      .addCase(deleteKeep.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        })
      .addCase(deleteKeep.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.keepsData = null
        })
      .addCase(deleteKeep.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
        // PATCH
        .addCase(updateKeep.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.isError = false;
        })
        .addCase(updateKeep.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.keepsData = state.keepsData.map(keep =>
              keep.id === action.payload.id ? action.payload : keep
          );  // Update the keepsData with the response
        })
        .addCase(updateKeep.rejected, (state) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
        });

  },
});

export const {resetKeepListState} = keepList.actions
export const selectKeepDataIsLoading = (state) => state.keepList.isLoading;
export const selectKeepDataIsError = (state) => state.keepList.isError;
export const selectKeepData = (state) => state.keepList.keepsData;
export const selectKeepDataIsSuccess = (state) => state.keepList.isSuccess;

export default keepList.reducer;
