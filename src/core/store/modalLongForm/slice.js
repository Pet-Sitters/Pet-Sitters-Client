import { createSlice } from '@reduxjs/toolkit';

export const modalLongForm = createSlice({
    name: 'modalLongForm',
    initialState: {
        isLongFormModalVisible: false,
    },
    reducers: {
        openModal: (state) => {
            state.isLongFormModalVisible = true;
        },
        closeModal: (state) => {
            state.isLongFormModalVisible = false;
        },
    },
});

export const { openModal, closeModal } = modalLongForm.actions;

export default modalLongForm.reducer;
