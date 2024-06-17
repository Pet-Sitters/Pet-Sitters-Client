import { createSlice } from '@reduxjs/toolkit';
import { getPetForm, postPetForm } from './thunk';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  petFormData: null,
};

const petForm = createSlice({
  name: 'petForm',
  initialState,
  extraReducers: (builder) => {
    builder
      //POST
      .addCase(postPetForm.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(postPetForm.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(postPetForm.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      //GET
      .addCase(getPetForm.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.longFormData = null;
      })
      .addCase(getPetForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.longFormData = action.payload;
      })
      .addCase(getPetForm.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.longFormData = null;
      });
  },
});
export const selectPetFormIsLoading = (state) => state.petForm.isLoading;
export const selectPetFormIsSuccess = (state) => state.petForm.isSuccess;
export const selectPetFormIsError = (state) => state.petForm.isError;
export const selectPetFormData = (state) => state.petForm.longFormData;
export default petForm.reducer;
