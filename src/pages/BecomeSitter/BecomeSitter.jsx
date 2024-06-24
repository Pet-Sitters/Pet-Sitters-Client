import { useNavigate } from 'react-router-dom';
import SitterForm from '../../components/SitterForm/SitterForm';
import s from './BecomeSitter.module.scss';
export function BecomeSitter() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div id='beecome' className={s.becomeSitter}>
      <div className={s.avatarContainer}>
        <div className={s.buttonBack}>
          <button onClick={handleGoBack} className={s.button}>
            Назад
          </button>
        </div>
      </div>
      <div className={s.formContainer}>
        <h4 className={s.titleOrder}>Заявка на ситтера</h4>
        <SitterForm />
      </div>
    </div>
  );
}
