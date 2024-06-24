import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    keep: null,
    name: '',
    phone_num: '',
    tg_nick: '',
    user: null,
};

const orderInfo = createSlice({
    name: 'orderInfo',
    initialState,
    reducers: {
        setOrderInfo: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateOrderInfo: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetOrderInfo: (state) => {
            return initialState;
        }
    }
});

export const { setOrderInfo, updateOrderInfo, resetOrderInfo } = orderInfo.actions;

export const selectOrderInfo = (state) => state.orderInfo;

export default orderInfo.reducer;