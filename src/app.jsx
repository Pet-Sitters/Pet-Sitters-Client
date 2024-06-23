import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { LongFormModal } from './components/LongFormModal/LongFormModal.jsx';
import { ShortForm } from './components/ShortForm/ShortForm.jsx';
import { Login } from './components/auth/Login/Login.jsx';
import { Registration } from './components/auth/Registration/Registration.jsx';
import { useCheckAuthorization } from './core/hooks/useCheckAuthorization.js';
import { getCurrentUser } from './core/store/auth/thunk';
import { router } from './router/routes.jsx';
import './style.scss';

export function App() {
  const dispatch = useDispatch();
  const { isUserAuthorized } = useCheckAuthorization();

  const isLoginModalVisible = useSelector(
    (state) => state.modalLogin.isLoginModalVisible
  );
  const isRegistrationModalVisible = useSelector(
    (state) => state.modalRegistration.isRegistrationModalVisible
  );
  const isShortFormModalVisible = useSelector(
    (state) => state.modalOrder.isShortFormModalVisible
  );
  const isLongFormModalVisible = useSelector(
    (state) => state.modalLongFormSlice.isLongFormModalVisible
  );

  useEffect(() => {
    if (isUserAuthorized) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
      {isLoginModalVisible && <Login />}
      {isRegistrationModalVisible && <Registration />}
      {isShortFormModalVisible && <ShortForm />}
      {isLongFormModalVisible && <LongFormModal />}
    </div>
  );
}
