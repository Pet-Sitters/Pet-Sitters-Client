import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const getSitterInfo = createAsyncThunk(
  'sitterInfo/get',
  async (payload, thunkAPI) => {
    try {
      const response = await api.get('/sitter/sitter_crud/{id}/', payload);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
