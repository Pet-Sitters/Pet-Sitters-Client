import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LocalStorageItems } from '../constants/LocalStorageItems';
import { AuthState } from '../store/auth/slice';

export function useCheckAuthorization() {
  const token = useSelector(AuthState);

  useEffect(() => {
    if (token) {
      // localStorage.setItem(LocalStorageItems.AuthorizationToken, token);
    }
  }, [token]);

  return { isUserAuthorized: token ? true : false };
}
