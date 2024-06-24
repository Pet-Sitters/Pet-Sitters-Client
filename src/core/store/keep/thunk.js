import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const getKeep = createAsyncThunk(
    'keepList/get',
    async (_, thunkAPI) => {
        try {
            const response = await api.get('/keep/keep_crud/');
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const deleteKeep = createAsyncThunk(
    'keepList/delete',
    async (id, thunkAPI) => {
        try {
            const response = await api.delete(`/keep/keep_crud/${id}`);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const updateKeep = createAsyncThunk(
    'keepList/update',
    async ({ id, data }, thunkAPI) => {
        try {
            const response = await api.patch(`/keep/keep_crud/${id}/`, data);
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);
