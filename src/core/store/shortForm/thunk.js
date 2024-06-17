import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const postShortForm = createAsyncThunk(
  'shortForm/post',
  async (payload, thunkAPI) => {
    try {
      const response = await api.post('/short_form/short_form_crud/', payload);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
export const getShortForm = createAsyncThunk(
  'shortForm/get',
  async (payload, thunkAPI) => {
    try {
      const response = await api.get('/short_form/short_form_crud/', payload);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
