import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal } from '../../../core/store/modalLogin/slice';
import { openRegistrationModal } from '../../../core/store/modalRegistration/slice';
import FormLogin from './FormLogin';
import s from './Login.module.scss';

export function Login() {
  const dispatch = useDispatch();

  const isOpenLogin = useSelector((state) => state.modalLogin.isLoginModalVisible);

  const handleLoginClose = () => {
    dispatch(closeLoginModal());
  };
  const handleRegistrationOpen = () => {
    dispatch(openRegistrationModal());
  };
  const handleSwitch = () => {
    handleLoginClose();
    handleRegistrationOpen();
  };
  return (
    <>
      <Dialog open={isOpenLogin} onClose={handleLoginClose} className={s.wrapper}>
        <DialogPanel className={s.modal}>
          <button onClick={handleLoginClose} className={s.button}>
            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
          </button>

          <DialogTitle className={s.title}>Вход</DialogTitle>

          <FormLogin />
          <div className={s.linkContainer}>
            Нет аккаунта{' '}
            <a onClick={handleSwitch} className={s.link}>
              Зарегистрироваться
            </a>{' '}
          </div>
          <div className={s.catContainer}>
            <img src='/assets/images/Auth/cat.png' alt='cat' />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
