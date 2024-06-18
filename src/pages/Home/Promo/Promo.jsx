import { useDispatch } from 'react-redux';
import { ShortForm } from '../../../components/ShortForm/ShortForm.jsx';
import { OrderButton } from '../../../components/UI/OrderButton/OrderButton.jsx';
import { openModal } from '../../../core/store/modalOrder/slice.js';
import s from './Promo.module.scss';

export function Promo() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };
  return (
    <article className={s.promo}>
      <img src='/assets/images/Home/promo_left.png' alt='imagePromo' />
      <div className={s.centralContent}>
        <h1 className={s.title}>
          Опытные ситтеры для <span className={s.accent}>передержки питомца</span> в
          Армении
        </h1>
        <div className={s.text}>
          Уехать в отпуск, путешествовать,
          <br /> поработать, встретиться с друзьями, сходить на свидание,
          <br /> навестить родителей, съездить в командировку или отдохнуть
        </div>
        <p className={s.subtitle}>Поможет Petsitter</p>

        <OrderButton></OrderButton>

        <ShortForm />
      </div>

      <img src='/assets/images/Home/promo_right.png' alt='imagePromo' />
    </article>
  );
}
