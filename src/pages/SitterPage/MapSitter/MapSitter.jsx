import petrovich from 'petrovich';
import { sitterInfoData } from '../data';
import s from './MapSitter.module.scss';

export function MapSitter() {
  const data = sitterInfoData;

  const person = {
    first: data.user.first_name,
    middle: data.user.patronym,
    last: data.user.last_name,
  };
  const nameSitter = petrovich(person, 'genitive');

  return (
    <article className={s.mapSitter}>
      <h4 className={s.title}>
        {' '}
        Местоположение <span className={s.accent}>{nameSitter.first}</span>{' '}
      </h4>
      <div className={s.mapContainer}>
        <img src='/assets/images/Sitter/map.png' alt='map' className={s.image} />
      </div>
    </article>
  );
}
