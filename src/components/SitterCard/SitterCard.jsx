import s from './SitterCard.module.scss';
export function SitterCard() {
  return (
    <div className={s.sitterCard}>
      <div className={s.photoContainer}>
        <div className={s.starBlock}>
          <img src='/assets/icons/Sitters/Star.png' alt='star' />
          <span className={s.balls}>5</span>
          <p className={s.quantityFeedback}>50 отзывов</p>
        </div>
        <img
          src='/assets/images/Sitter/photo.png'
          alt='photo sitter'
          className={s.photoSitter}
        />
      </div>
      <div className={s.infoSitter}>
        <p className={s.sitterName}>Светлана</p>
        <p className={s.sitterCity}>Москва</p>
      </div>
    </div>
  );
}
