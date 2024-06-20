import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './style.scss';
import { useCheckAuthorization } from './core/hooks/useCheckAuthorization.js';
import { getCurrentUser } from './core/store/auth/thunk';
import { router } from './router/routes.jsx';

export function App() {
  const dispatch = useDispatch();
  const { isUserAuthorized } = useCheckAuthorization();

  useEffect(() => {
    if (isUserAuthorized) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
