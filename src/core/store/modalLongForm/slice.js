import { createSlice } from '@reduxjs/toolkit';

export const modalLongFormSlice = createSlice({
    name: 'modalLongForm',
    initialState: {
        isShortFormModalVisible: false,
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

export const { openModal, closeModal } = modalLongFormSlice.actions;

export default modalLongFormSlice.reducer;
