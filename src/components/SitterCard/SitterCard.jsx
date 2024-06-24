import { Link } from 'react-router-dom';
import { cityNames } from '../../core/constants/city';
import links from '../../router/links';
import s from './SitterCard.module.scss';
import img3 from './img/2feec733963b0a1db32775e7842d1137.jpeg';
import img2 from './img/8284e9c658fe88202da0c90ad81858f0.jpeg';
import img1 from './img/91667d9a42c89f1d58a47bddc9849a87.png';
import unnamed from './img/unnamed.jpg';
export function SitterCard({ data }) {
  const images = [img1, img2, img3];
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
            <img
              src={
                data.avatar
                  ? avatar.data
                  : images[Math.floor(Math.random() * images.length)]
              }
              alt='photo sitter'
              className={s.photoSitter}
            />
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
