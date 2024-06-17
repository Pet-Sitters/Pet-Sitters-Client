import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../utils/mainRequest';

export const register = createAsyncThunk('auth/register', async (payload, thunkAPI) => {
  try {
    const response = await authApi.post('/auth/users/', payload);

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors);
  }
});
export const login = createAsyncThunk('auth/Login', async (payload, thunkAPI) => {
  try {
    const response = await authApi.post('/auth/token/login/', payload);

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors || 'Login failed');
  }
});
export const logout = createAsyncThunk('auth/token/logout', async () => {
  localStorage.removeItem('accessToken');
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('petSitterApp_accessToken') ?? '';

      const response = await authApi.get('/auth/users/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);
