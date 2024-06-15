import { TgButton } from '../../../components/UI/Buttons/TgButton/TgButton';
import s from './Questions.module.scss';

export function Questions() {
  return (
    <article className={s.questions}>
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
        <img src='assets/images/Home/FatCat.png' alt='cat' />
      </div>
      <div className={s.decorEl}>
        <img src='assets/images/Home/decorEl.png' alt='cat' />
      </div>
    </article>
  );
}
