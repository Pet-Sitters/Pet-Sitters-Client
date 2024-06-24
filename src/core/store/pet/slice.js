import {createSlice} from '@reduxjs/toolkit';
import {deletePet, getPetForm, postPetForm, getPet} from './thunk';

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    petsData: null,
    petData: null,
};

const petForm = createSlice({
    name: 'petForm',
    initialState,
    reducers: {
        resetPetFormState: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
        }
    },
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
                state.petsData = null;
            })
            .addCase(getPetForm.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.petsData = action.payload;
            })
            .addCase(getPetForm.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.petsData = null;
            })
            //GET
            .addCase(getPet.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
                state.petData = null;
            })
            .addCase(getPet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.petData = action.payload;
            })
            .addCase(getPet.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.petData = null;
            })
            // DELETE
            .addCase(deletePet.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(deletePet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.petsData = null
            })
            .addCase(deletePet.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
            });
    },
});

export const {resetPetFormState} = petForm.actions
export const selectPetFormIsLoading = (state) => state.petForm.isLoading;
export const selectPetFormIsSuccess = (state) => state.petForm.isSuccess;
export const selectPetFormIsError = (state) => state.petForm.isError;
export const selectPetsData = (state) => state.petForm.petsData;
export const selectPetData = (state) => state.petForm.petData;

export default petForm.reducer;
