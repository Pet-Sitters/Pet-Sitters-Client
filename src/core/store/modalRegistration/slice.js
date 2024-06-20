import { createSlice } from '@reduxjs/toolkit';

export const registrationModalSlice = createSlice({
  name: 'modalRegistration',
  initialState: {
    isRegistrationModalVisible: false,
  },
  reducers: {
    openRegistrationModal: (state) => {
      state.isRegistrationModalVisible = true;
    },
    closeRegistrationModal: (state) => {
      state.isRegistrationModalVisible = false;
    },
  },
});

export const { openRegistrationModal, closeRegistrationModal } =
  registrationModalSlice.actions;

export default registrationModalSlice.reducer;
