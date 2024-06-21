import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const getOwnerInfo = createAsyncThunk(
    'ownerInfo/get',
    async (_, thunkAPI) => {
        try {
            const response = await api.get('/owner/owner_crud/');
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);
