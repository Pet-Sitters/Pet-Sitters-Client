import { createSlice } from '@reduxjs/toolkit';

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: {
    isLoginModalVisible: false,
  },
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalVisible = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalVisible = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
