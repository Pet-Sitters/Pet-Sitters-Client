import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/mainRequest';

export const postPetForm = createAsyncThunk('petForm/post', async (payload, thunkAPI) => {
  try {
    const response = await api.post('/pet/pet_crud/', payload);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const deletePet = createAsyncThunk('pet/delete', async (id, thunkAPI) => {
  try {
    const response = await api.delete(`/pet/pet_crud/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const getPetForm = createAsyncThunk('petForm/get',
    async (_, thunkAPI) => {
  try {
    const response = await api.get('/pet/pet_crud/');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});

export const getPet = createAsyncThunk(
    'petForm/pet',
    async ({ id }, thunkAPI) => {
      try {
        const response = await api.get(`/pet/pet_crud/${id}/`);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.errors);
      }
    }
);
