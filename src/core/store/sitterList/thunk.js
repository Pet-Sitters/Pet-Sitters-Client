import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const getSitterList = createAsyncThunk(
  'sitterList/get',
  async (payload, thunkAPI) => {
    try {
      const response = await api.get('/sitter/sitter_crud/', payload);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
