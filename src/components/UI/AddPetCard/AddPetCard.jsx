<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { OrderButton } from '../OrderButton/OrderButton.jsx'
import s from './AddPetCard.module.scss'
=======
import { Link } from 'react-router-dom';
import { OrderButton } from '../OrderButton/OrderButton';
import s from './AddPetCard.module.scss';
>>>>>>> d87e81436f01425444745a5336816427e76e4077

export function AddPetCard() {
  const img = false;

  return (
    <div className={s.card}>
      {img ? (
        <img src='/assets/images/account/cat.png' alt='animal foto' className={s.img} />
      ) : (
        <Link to={'/account/add-pets'} className={s.photoContainer}></Link>
      )}

      <h3 className={s.title}>Кличка</h3>
      <div className={s.buttonContainer}>
        <OrderButton textButton={'Заказать ситтинг'} />
      </div>
    </div>
  );
}
