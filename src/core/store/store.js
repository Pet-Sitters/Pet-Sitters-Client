import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import keepListReducer from './keep/slice';
import longFormReducer from './longForm/slice';
import modalLoginReducer from './modalLogin/slice';
import modalLongFormSliceReducer from './modalLongForm/slice.js';
import modalOrderReducer from './modalOrder/slice';
import modalRegistrationReducer from './modalRegistration/slice';
import ownerInfoReducer from './ownerInfo/slice';
import petFormReducer from './pet/slice';
import shortFormReducer from './shortForm/slice';
import sitterInfoReducer from './sitterInfo/slice';
import sitterListReducer from './sitterList/slice';
import modalChoosePetReducer from './modalChoosePet/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    longForm: longFormReducer,
    shortForm: shortFormReducer,
    petForm: petFormReducer,
    sitterInfo: sitterInfoReducer,
    sitterList: sitterListReducer,
    modalOrder: modalOrderReducer,
    modalLogin: modalLoginReducer,
    modalRegistration: modalRegistrationReducer,
    keepList: keepListReducer,
    ownerInfo: ownerInfoReducer,
    modalLongForm: modalLongFormSliceReducer,
    modalChoosePet: modalChoosePetReducer,
  },
});
