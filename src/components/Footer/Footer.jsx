import { Link } from 'react-router-dom';
import links from '../../router/links';
import ScrollLink from '../UI/Buttons/LinkButton/ScrollLink';
import { TgButton } from '../UI/Buttons/TgButton/TgButton';
import s from './Footer.module.scss';
import catImg from '/assets/images/Home/FatCat.png';
import decorImg from '/assets/images/Home/decorEl.png';
export function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={s.footer}>
      <div className={s.questions}>
        <div className={s.content}>
          <h3 className={s.title}>
            Остались вопросы к <span className={s.accent}>Petsitters</span>{' '}
          </h3>
          <p className={s.subTitle}>Мы всегда на связи!</p>
          <div className={s.wrapperText}>
            <p className={s.text}>Свяжитесь с нами. Остальное сделаем мы</p>
            <img src='/assets/icons/Home/heart.png' alt='heart' />
          </div>
          <TgButton />
        </div>
        <div className={s.fatCat}>
          <img src={catImg} alt='cat' />
        </div>
        <div className={s.decorEl}>
          <img src={decorImg} alt='cat' />
        </div>
      </div>
      <div className={s.mainFooter}>
        <div className={s.linksContainer}>
          <div className={s.image}>
            <img
              src='/assets/images/Home/logoFooter.png'
              alt='logo'
              onClick={handleLogoClick}
              className={s.logo}
            />
          </div>
          <div className={s.links}>
            <div className={s.linksPetsitter}>
              <Link to={`${links.home}#howWork`} reloadDocument className={s.link}>
                О сервисе
              </Link>
              <Link to={`${links.home}#calculator`} reloadDocument className={s.link}>
                Передержка кошек
              </Link>
              <Link to={`${links.home}#calculator`} reloadDocument className={s.link}>
                Передержка собак
              </Link>
            </div>
            <div className={s.linksSitter}>
              <ScrollLink to={links.sitters} className={s.link}>
                {' '}
                Ситтеры
              </ScrollLink>
              <Link to={`${links.home}#game`} reloadDocument className={s.link}>
                Стать ситтером
              </Link>
              <Link to={`${links.home}#game`} reloadDocument className={s.link}>
                Начать ИГРУ
              </Link>
            </div>
          </div>
        </div>
        <div className={s.contacts}>
          <div className={s.phone}>
            <a href='tel:+78000909888' className={s.linkMailPhone}>
              8 800 09 09 888
            </a>
          </div>
          <div className={s.mail}>
            <a href='mailto:dogkot@petsitters.ru' className={s.linkMailPhone}>
              dogkot@petsitters.ru
            </a>
          </div>
          <TgButton />
        </div>
      </div>
      <div className={s.copyright}>
        <span className={s.linkCopyright}>© 2024</span>
        <Link to={'/'} className={s.linkCopyright}>
          Пользовательское соглашение
        </Link>
        <Link to={'/'} className={s.linkCopyright}>
          Политика конфиденциальности
        </Link>
      </div>
    </div>
  );
}
