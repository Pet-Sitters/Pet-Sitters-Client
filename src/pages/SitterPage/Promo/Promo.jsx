import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import s from './Promo.module.scss';

export function Promo({ data }) {
  const cityNames = {
    EVN: 'Ереван',
    DLN: 'Дилижан',
    GMR: 'Гюмри',
    MOW: 'Москва',
    SPB: 'Санкт-Петербург',
    OTH: 'Другое',
  };
  const homeTypes = {
    FLAT: 'Квартира',
    HOUS: 'Частный дом',
  };
  const animals = {
    CAT: 'Кошка',
    DOG: 'Собака',
    OTH: 'Другое',
    NO: 'Нет',
  };
  const cityName = cityNames[data.city] || 'Город не найден';
  const homeType = homeTypes[data.home] || 'Тип жилья не найден';
  const animal = animals[data.animals] || 'Тип животного не найден';
  //pins
  const dataPins = {
    pin: ['doctor', 'verification'],
  };
  const PINS = {
    doctor: '/assets/icons/Sitter/doctor.png',
    verification: '/assets/icons/Sitter/verification.png',
  };

  return (
    <article className={s.promoSitter}>
      <div className={s.avatarContainer}>
        <img src={data.avatar} alt='avatar' />
      </div>
      <div className={s.ratingContainer}>
        <div className={s.oldSkill}>
          <div className={s.numberRating}>
            5 <span>лет</span>{' '}
          </div>
          <div>Опыт</div>
        </div>
        <div className={s.ordersTotal}>
          <div className={s.numberRating}>110</div>
          <div>Заказы</div>
        </div>
        <div className={s.rating}>
          <div className={s.numberRating}>5</div>
          <div>Рейтинг</div>
        </div>
        <div className={s.balls}>
          <div className={s.numberRating}>86</div>
          <div>Оценок</div>
        </div>
      </div>
      <div className={s.infoContainer}>
        <div className={s.typeSitter}>
          <p className={s.typeSitterText}>Догситтер</p>
        </div>
        <div className={s.firstNameSitter}>
          <p className={s.firstNameSitterText}>{data.user.first_name}</p>
        </div>
        <div className={s.lastNameSitter}>
          <p className={s.lastNameSitterText}>{data.user.last_name}</p>
        </div>
        <div className={s.citySitter}>
          <p className={s.citySitterText}>{cityName}</p>
        </div>
        <div className={s.isAnimalSitter}>
          <p className={s.isAnimalText}>
            Животные дома: <span>{animal}</span>{' '}
          </p>
        </div>
        <div className={s.homeTypeSitter}>
          <p className={s.homeTypeSitterText}>
            Передержка: <span>{homeType}</span>
          </p>
        </div>

        <FormButton
          type='primary'
          htmlType='submit'
          className={s.button}
          onClick={() => openShortFormModal(true)}>
          Оформить заказ
        </FormButton>
      </div>
      <div className={s.pinContainer}>
        {dataPins.pin.map((pin) => (
          <img key={pin} src={PINS[pin]} alt={pin} className={s.pinImg} />
        ))}
      </div>
    </article>
  );
}
