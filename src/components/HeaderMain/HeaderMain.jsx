import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../core/constants/RoutePaths';
import { AuthState } from '../../core/store/auth/slice';
import { openModal } from '../../core/store/modalOrder/slice';
import { openRegistrationModal } from '../../core/store/modalRegistration/slice';
import links from '../../router/links';
import s from './HeaderGrid.module.scss';

export function HeaderMain() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useSelector(AuthState);
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = () => {
    if (token) {
      dispatch(openModal());
    } else {
      dispatch(openRegistrationModal());
      //тут нам нужно открыть окно авторизации, если пользователь не авторизован, чтобы он авторизовался прежде чем заполнять короткую форму, но отсюда мы этого не можем сделать, нужно булевую переменную окно авторизации вынести в хранилище редакса
    }
  };

  return (
    <header className={`${s.headerMain} ${scrolled ? s.scrolled : ''}`}>
      <nav className={s.menuClientPet}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link className={s.link} to='/about'>
              О сервисе
            </Link>
            <a href='#calculator' className={s.link}>
              Передержка собак
            </a>
            <a href='#calculator' className={s.link}>
              Передержка кошек
            </a>
          </li>
        </ul>
      </nav>
      <Link to={RoutePaths.Root} className={s.logo}>
        <img src='/assets/images/logo.png' alt='logo' onClick={handleLogoClick} />
      </Link>
      <nav className={s.menuClientSitter}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link className={s.link} to={links.sitter}>
              Ситтеры
            </Link>
            <a href='#game' className={s.link} to={links.becameSitter}>
              Стать ситтером
            </a>
            <button onClick={handleOpen} className={s.headerButton}>
              Оформить заказ
            </button>
            <Link to={links.account.base} className={s.buttonProfile}>
              <img src='/assets/icons/profile.png' alt='profile' />
              Профиль
            </Link>
          </li>
        </ul>
      </nav>
      <button className={s.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </header>
  );
}
