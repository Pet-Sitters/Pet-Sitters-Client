import { useDispatch } from 'react-redux';
import { openModal } from '../../../core/store/modalOrder/slice';
import s from './OrderButton.module.scss';
export function OrderButton({ textButton, style, ...props }) {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
  };
  return (
    <button onClick={handleOpen} className={s.button} style={style} {...props}>
      Оформить заказ
    </button>
  );
}
