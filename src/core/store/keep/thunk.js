import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

// export const postLongForm = createAsyncThunk(
//   'longForm/post',
//   async (payload, thunkAPI) => {
//     try {
//       const response = await api.post('/long_form/long_form_crud/', payload);
//
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
//   }
// );

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
