import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../../core/store/auth/slice';
import { openModal } from '../../../core/store/modalOrder/slice';
import { openRegistrationModal } from '../../../core/store/modalRegistration/slice';
import s from './OrderButton.module.scss';
export function OrderButton({ textButton, style, ...props }) {
  const dispatch = useDispatch();
  const { token } = useSelector(AuthState);
  const handleOpen = () => {
    if (token) {
      dispatch(openModal());
    } else {
      dispatch(openRegistrationModal());
    }
  };
  return (
    <button onClick={handleOpen} className={s.button} style={style} {...props}>
      Оформить заказ
    </button>
  );
}
