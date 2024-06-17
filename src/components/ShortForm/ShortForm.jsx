import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import s from './ShortForm.module.scss';
import ShortFormInputs from './ShortFormInput';

export function ShortForm({ open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose} className={s.wrapper}>
        <DialogPanel className={s.modal}>
          <button onClick={onClose} className={s.button}>
            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
          </button>

          <DialogTitle className={s.title}>Оставить заявку</DialogTitle>
          <p className={s.subTitle}>
            Пожалуйста, заполните короткую заявку на ситтинг. После этого мы свяжемся с
            вами и расскажем, что делать дальше.
          </p>
          <ShortFormInputs onClose={onClose} />
          <div className={s.catContainer}>
            <img src='/assets/images/Auth/cat.png' alt='cat' />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
