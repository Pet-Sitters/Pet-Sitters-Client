import axios from 'axios';
import { LocalStorageItems } from '../constants/LocalStorageItems';
const ACCESS_TOKEN = localStorage.getItem(LocalStorageItems.AuthorizationToken);
export const authApi = axios.create({
  baseURL: 'http://89.223.123.5',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: 'http://89.223.123.5',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Token ${ACCESS_TOKEN}`,
  },
});
