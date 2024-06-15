import PetsitterImg from '../../../assets/petsitter.svg';
import SwiperContainer from '../../../components/Swiper/SwiperContainer/SwiperContainer.jsx';
import styles from './SwiperArea.module.scss';

const SwiperArea = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Преимущества нашего сервиса</h1>
      <div className={styles.content}>
        <span className={styles.accent}>Выбирайте </span>
        <img src={PetsitterImg} />
      </div>
      <SwiperContainer />
    </div>
  );
};

export default SwiperArea;
