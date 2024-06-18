import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modalOrder',
  initialState: {
    isShortFormModalVisible: false,
  },
  reducers: {
    openModal: (state) => {
      state.isShortFormModalVisible = true;
    },
    closeModal: (state) => {
      state.isShortFormModalVisible = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
