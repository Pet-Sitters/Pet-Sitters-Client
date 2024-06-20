import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../core/store/auth/slice.js';
import { logout } from '../../core/store/auth/thunk.js';
import { Login } from '../auth/Login/Login.jsx';
import { Registration } from '../auth/Registration/Registration.jsx';
import s from './HeaderTop.module.scss';

export function Header_Top() {
  const auth = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [isLoginModalVisible, setIsLoginVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegistrationVisible] = useState(false);
  const openRegistrationModal = () => {
    setIsRegistrationVisible(true);
    setIsLoginVisible(false);
  };

  const openLoginModal = () => {
    setIsLoginVisible(true);
    setIsRegistrationVisible(false);
  };

  const closeModals = () => {
    setIsRegistrationVisible(false);
    setIsLoginVisible(false);
  };

  return (
    <>
      <div className={s.headerTop_container}>
        <div className={s.leftBlock}>
          <Link to={'/'} className={s.link}>
            Контакты
          </Link>
          <img src='/assets/icons/button-arrow.png' alt='arrow' />
        </div>
        <div className={s.rightBlock}>
          {auth === null && (
            <Fragment>
              <button onClick={() => openLoginModal(true)} className={s.link}>
                Войти
              </button>{' '}
              /{' '}
              <button onClick={() => openRegistrationModal(true)} className={s.link}>
                Зарегистрироваться
              </button>
            </Fragment>
          )}

          {auth && (
            <span onClick={() => dispatch(logout())} className={s.link}>
              Выйти
            </span>
          )}
        </div>
      </div>
      <Login
        visible={isLoginModalVisible}
        onCancel={closeModals}
        onSwitch={openRegistrationModal}
        open={isLoginModalVisible}
        onClose={() => setIsLoginVisible(false)}
      />
      <Registration
        visible={isRegisterModalVisible}
        onCancel={closeModals}
        onSwitch={openLoginModal}
        open={isRegisterModalVisible}
        onClose={() => setIsRegistrationVisible(false)}
      />
    </>
  );
}
