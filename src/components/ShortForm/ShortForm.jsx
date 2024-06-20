import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../core/store/modalOrder/slice';
import s from './ShortForm.module.scss';
import ShortFormInputs from './ShortFormInput';

export function ShortForm() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalOrder.isShortFormModalVisible);
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} className={s.wrapper}>
        <DialogPanel className={s.modal}>
          <button onClick={handleClose} className={s.button}>
            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
          </button>

          <DialogTitle className={s.title}>Оставить заявку</DialogTitle>
          <p className={s.subTitle}>
            Пожалуйста, заполните короткую заявку на ситтинг. После этого мы свяжемся с
            вами и расскажем, что делать дальше.
          </p>
          <ShortFormInputs />
          <div className={s.catContainer}>
            <img src='/assets/images/Auth/cat.png' alt='cat' />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
