import { Link } from 'react-router-dom';
import { OrderButton } from '../OrderButton/OrderButton';
import s from './AddPetCard.module.scss';


export function AddPetCard() {
  const img = false;

  return (
    <div className={s.card}>
      <Link to={'/account/add-pets'} className={s.photoContainer}></Link>
        <div>
            <h1 className={s.par}>Добавить</h1>
            <h1 className={s.par}>питомца</h1>
        </div>
    </div>
  );
}
