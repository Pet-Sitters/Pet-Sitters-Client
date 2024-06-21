import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../core/store/auth/slice.js';
import { logout } from '../../core/store/auth/thunk.js';
import { openLoginModal } from '../../core/store/modalLogin/slice.js';
import { openRegistrationModal } from '../../core/store/modalRegistration/slice.js';
import links from '../../router/links.js';
import s from './HeaderTop.module.scss';
export function HeaderTop() {
  const navigate = useNavigate();
  const auth = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  };
  const handleOpenRegistrationModal = () => {
    dispatch(openRegistrationModal());
  };
  const handleLogOut = () => {
    dispatch(logout());
    navigate(links.home);
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
              <button onClick={handleOpenLoginModal} className={s.link}>
                Войти
              </button>{' '}
              /{' '}
              <button onClick={handleOpenRegistrationModal} className={s.link}>
                Зарегистрироваться
              </button>
            </Fragment>
          )}

          {auth && (
            <span onClick={handleLogOut} className={s.link}>
              Выйти
            </span>
          )}
        </div>
      </div>
    </>
  );
}
