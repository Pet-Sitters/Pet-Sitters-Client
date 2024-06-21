import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../core/constants/RoutePaths';
import { AuthState } from '../../core/store/auth/slice';
import { openModal } from '../../core/store/modalOrder/slice';
import { openRegistrationModal } from '../../core/store/modalRegistration/slice';
import s from './HeaderGrid.module.scss';

export function HeaderMain() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useSelector(AuthState);
  const dispatch = useDispatch();

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
            <Link className={s.link} to='/dogs'>
              Передержка собак
            </Link>
            <Link className={s.link} to='/cats'>
              Передержка кошек
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={RoutePaths.Root} className={s.logo}>
        <img src='/assets/images/logo.png' alt='logo' />
      </Link>
      <nav className={s.menuClientSitter}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link className={s.link} to='/sitters'>
              Ситтеры
            </Link>
            <Link className={s.link} to='/become-sitter'>
              Стать ситтером
            </Link>
            <button onClick={handleOpen} className={s.headerButton}>
              Оформить заказ
            </button>
          </li>
        </ul>
      </nav>
      <button className={s.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </header>
  );
}
