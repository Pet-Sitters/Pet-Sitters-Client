import { Link } from 'react-router-dom';
import styles from './ProfileSidebar.module.scss';

const ProfileSidebar = () => {
  return (
    <>
      <div className={styles.profileSidebar}>
        <div className={styles.profilePicture}>
          <img src='/assets/images/avatar.jpg' alt='Profile' />
        </div>
        <div className={styles.profileName}>Фамилия Имя</div>

        <nav className={styles.profileMenu}>
          <Link to={'/account/personal'} className={styles.link}>
            Основные данные
          </Link>
          <Link to={'/account/my-pets'} className={styles.link}>
            Мои питомцы{' '}
          </Link>
          <Link to={'/account/my-order'} className={styles.link}>
            Мои заказы{' '}
          </Link>
          <Link to={'/account/my-sitter'} className={styles.link}>
            Избранные ситтеры{' '}
          </Link>
          <Link to={'/account/settings'} className={styles.link}>
            Настройки{' '}
          </Link>
          <Link to={'/account/calc'} className={styles.link}>
            Калькулятор
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ProfileSidebar;
