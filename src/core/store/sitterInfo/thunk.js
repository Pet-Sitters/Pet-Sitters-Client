import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalStorageItems } from '../../constants/LocalStorageItems';
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

export const createSitter = createAsyncThunk(
  'sitterInfo/get',
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem(LocalStorageItems.AuthorizationToken) ?? '';
      const response = await api.post('/sitter/sitter_crud/', payload, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const patchSitter = createAsyncThunk(
  'sitterInfo/get',
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem(LocalStorageItems.AuthorizationToken) ?? '';

      const response = await api.patch('/sitter/sitter_crud/3', payload, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
