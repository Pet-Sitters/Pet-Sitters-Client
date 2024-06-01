import { createAsyncThunk } from '@reduxjs/toolkit';
import mainRequest from '../../utils/mainRequest';

export const authRequest = {
  login: createAsyncThunk(
    'authorization/login',
    async function ({username,password}, { rejectWithValue }) {
      try {
        const response = await mainRequest.post(`/user/check_password?user_id=${username}`,{password},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				});

        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  ),
};
