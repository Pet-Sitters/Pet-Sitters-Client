import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../core/constants/RoutePaths';
import { AuthState } from '../../core/store/auth/slice';
import { openModal } from '../../core/store/modalOrder/slice';
import { openRegistrationModal } from '../../core/store/modalRegistration/slice';
import links from '../../router/links';
import ScrollLink from '../UI/Buttons/LinkButton/ScrollLink';
import s from './HeaderGrid.module.scss';

export function HeaderMain() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { token } = useSelector(AuthState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo({
      top: 6800,
      behavior: 'smooth',
    });
  };
  const handleNavigateAbout = () => {
    navigate('/');
    window.scrollTo({
      top: 4200,
      behavior: 'smooth',
    });
  };

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
            <Link className={s.link} to={`${links.home}#howWork`} reloadDocument>
              О сервисе
            </Link>
            <Link className={s.link} to={`${links.home}#calculator`} reloadDocument>
              Передержка собак
            </Link>
            <Link className={s.link} to={`${links.home}#calculator`} reloadDocument>
              Передержка кошек
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={RoutePaths.Root} className={s.logo}>
        <img src='/assets/images/logo.png' alt='logo' onClick={handleLogoClick} />
      </Link>
      <nav className={s.menuClientSitter}>
        <ul className={s.list}>
          <li className={s.item}>
            <ScrollLink className={s.link} to={links.sitters}>
              Ситтеры
            </ScrollLink>
            <Link className={s.link} to={`${links.home}#game`} reloadDocument>
              Стать ситтером
            </Link>
            <button onClick={handleOpen} className={s.headerButton}>
              Оформить заказ
            </button>
            {token && (
              <ScrollLink to={links.account.base} className={s.buttonProfile}>
                <img src='/assets/icons/profile.png' alt='profile' /> Профиль
              </ScrollLink>
            )}
          </li>
        </ul>
      </nav>
      <button className={s.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
    </header>
  );
}
