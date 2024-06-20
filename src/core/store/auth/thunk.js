import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalStorageItems } from '../../constants/LocalStorageItems';
import { authApi } from '../../utils/mainRequest';

export const register = createAsyncThunk('auth/register', async (payload, thunkAPI) => {
  try {
    const response = await authApi.post('/auth/users/', payload);

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
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
  localStorage.removeItem('petSitterApp_accessToken');
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem(LocalStorageItems.AuthorizationToken) ?? '';

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
