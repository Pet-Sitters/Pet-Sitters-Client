import petrovich from 'petrovich';
import { sitterInfoData } from '../data';
import s from './Apartments.module.scss';
export function Apartments() {
  const data = sitterInfoData;

  const person = {
    first: data.user.first_name,
    middle: data.user.patronym,
    last: data.user.last_name,
  };
  const nameSitter = petrovich(person, 'genitive');

  return (
    <article className={s.apartments}>
      <h4 className={s.title}> Дом {nameSitter.first}</h4>

      <div className={s.imgContainer}>
        {data.images.map((img, index) => (
          <img key={index} src={img.image} alt='photo' className={s.image} />
        ))}
      </div>
    </article>
  );
}
