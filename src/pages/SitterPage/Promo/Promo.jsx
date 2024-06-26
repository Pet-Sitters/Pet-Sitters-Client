import { OrderButton } from '../../../components/UI/OrderButton/OrderButton';
import { cityNames } from '../../../core/constants/city';
import s from './Promo.module.scss';
// import img3 from './img/2feec733963b0a1db32775e7842d1137.jpeg';
import img2 from './img/8284e9c658fe88202da0c90ad81858f0.jpeg';
// import img1 from './img/91667d9a42c89f1d58a47bddc9849a87.png';
import unnamed from './img/unnamed.jpg';

export function Promo({ data }) {
  const homeTypes = {
    FLAT: 'в квартире',
    HOUS: 'в частном доме',
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
  const avatar = data.avatar ? avatar.data : unnamed;

  return (
    <article className={s.promoSitter}>
      <div className={s.avatarContainer}>
        <img src={img2 || avatar} alt='avatar' className={s.avatar} />
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
          <p className={s.firstNameSitterText}>{data.first_name}</p>
        </div>
        <div className={s.lastNameSitter}>
          <p className={s.lastNameSitterText}>{data.last_name}</p>
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
        <OrderButton />
      </div>
      <div className={s.pinContainer}>
        {dataPins.pin.map((pin) => (
          <img key={pin} src={PINS[pin]} alt={pin} className={s.pinImg} />
        ))}
      </div>
    </article>
  );
}
