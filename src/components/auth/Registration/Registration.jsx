import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal } from '../../../core/store/modalLogin/slice';
import { closeRegistrationModal } from '../../../core/store/modalRegistration/slice';
import FormRegistration from './Form';
import s from './Registration.module.scss';

export function Registration() {
  const dispatch = useDispatch();

  const isRegistrationOpen = useSelector(
    (state) => state.modalRegistration.isRegistrationModalVisible
  );

  const handleRegistrationClose = () => {
    dispatch(closeRegistrationModal());
  };
  const handleLoginOpen = () => {
    dispatch(openLoginModal());
  };
  const handleSwitch = () => {
    handleRegistrationClose();
    handleLoginOpen();
  };
  return (
    <>
      <Dialog
        open={isRegistrationOpen}
        className={s.wrapper}
        onClose={handleRegistrationClose}>
        <DialogPanel className={s.modal}>
          <button onClick={handleRegistrationClose} className={s.button}>
            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
          </button>

          <DialogTitle className={s.title}>Регистрация</DialogTitle>

          <FormRegistration />
          <div className={s.linkContainer}>
            Уже есть аккаунт?{' '}
            <a onClick={handleSwitch} className={s.link}>
              Войти
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
