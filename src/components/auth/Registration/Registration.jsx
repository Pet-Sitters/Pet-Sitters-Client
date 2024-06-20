import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import FormRegistration from './Form';
import s from './Registration.module.scss';

export function Registration({ open, onClose, visible, onCancel, onSwitch }) {
  return (
    <>
      <Dialog open={open} onClose={onClose} className={s.wrapper} onCancel={onCancel}>
        <DialogPanel className={s.modal}>
          <button onClick={onClose} className={s.button}>
            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
          </button>

          <DialogTitle className={s.title}>Регистрация</DialogTitle>

          <FormRegistration onClose={onClose} />
          <div className={s.linkContainer}>
            Уже есть аккаунт?{' '}
            <a onClick={onSwitch} className={s.link}>
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
