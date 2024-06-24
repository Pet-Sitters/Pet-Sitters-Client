import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton.jsx';
import links from '../../../router/links.js';
import s from './Game.module.scss';

export function Game() {
  return (
    <article id='game' className={s.game}>
      <img src='/assets/images/Home/gameFon.png' alt='dogs' className={s.image} />
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
          <a
            href='https://petgame.esoraine.online/'
            target='_blank'
            className={s.linkGame}
            rel='noreferrer'>
            начать игру
          </a>
          <LinkButton buttonType='game2' to={links.becameSitter}>
            Стать ситтером
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
