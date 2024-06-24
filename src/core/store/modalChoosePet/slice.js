import { createSlice } from '@reduxjs/toolkit';

export const modalChoosePet = createSlice({
    name: 'modalChoosePet',
    initialState: {
        isModalPetChooseVisible: false,
    },
    reducers: {
        openChooseModal: (state) => {
            state.isModalPetChooseVisible = true;
        },
        closeChooseModal: (state) => {
            state.isModalPetChooseVisible = false;
        },
    },
});

export const { openChooseModal, closeChooseModal } = modalChoosePet.actions;

export default modalChoosePet.reducer;
