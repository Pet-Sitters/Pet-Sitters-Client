import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../../core/store/modalOrder/slice';
import s from './HeaderGrid.module.scss';

export function Header_Main() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openModal());
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
      <div className={s.logo}>
        <img src='/assets/images/logo.png' alt='logo' />
      </div>
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
