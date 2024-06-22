import { Link } from 'react-router-dom';
import { cityNames } from '../../core/constants/city';
import links from '../../router/links';
import s from './SitterCard.module.scss';
import unnamed from './img/unnamed.jpg';
export function SitterCard({ data }) {
  const avatar = data.avatar ? avatar.data : unnamed;
  // const avatar = data.images.image ? data.images.image : unnamed;

  return (
    <>
      {data.map((sitter) => (
        <Link
          to={`/${links.sitter}/${sitter.id}`}
          className={s.sitterCard}
          key={sitter.id}>
          <div className={s.photoContainer}>
            <div className={s.starBlock}>
              <img src='/assets/icons/Sitters/Star.png' alt='star' />
              <span className={s.balls}>5</span>
              <p className={s.quantityFeedback}>50 отзывов</p>
            </div>
            <img src={avatar} alt='photo sitter' className={s.photoSitter} />
          </div>
          <div className={s.infoSitter}>
            <p className={s.sitterName}>{sitter.first_name}</p>
            <p className={s.sitterCity}>{cityNames[sitter.city] || 'Город не найден'}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
