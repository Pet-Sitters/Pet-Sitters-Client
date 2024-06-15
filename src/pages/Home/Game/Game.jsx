import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton.jsx';
import links from '../../../router/links.js';
import s from './Game.module.scss';

export function Game() {
  return (
    <article className={s.game}>
      <img src='/assets/images/Home/dogs.png' alt='dogs' className={s.image} />
      <div className={s.textContent}>
        <h3 className={s.title}>
          Хотите стать ситтером <span className={s.accent}>Пройдите ИГРУ</span>{' '}
          <img
            src='/assets/images/Home/petsitter.png'
            alt='petsitter'
            className={s.petsitter}
          />
        </h3>
        <p className={s.descriptionStart}>
          Игра разработана для{' '}
          <span className={s.accentDescr}>проверки навыков ситтинга</span>{' '}
        </p>
        <p className={s.descriptionEnd}>
          {' '}
          Состоит из набора ситуаций и решений,
          <br /> которые вам нужно будет пройти Игра <br />
          определит степень вашей готовности или <br />
          подсветит что необходимо изучить
        </p>
        <div className={s.buttons}>
          <LinkButton buttonType='green' to={links.account.myOrders}>
            НАЧАТЬ ИГРУ
          </LinkButton>
          <LinkButton buttonType='main' to={links.account.myOrders}>
            Стать ситтером
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
