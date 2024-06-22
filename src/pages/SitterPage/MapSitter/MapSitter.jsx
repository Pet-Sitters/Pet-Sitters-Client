import petrovich from 'petrovich';
import s from './MapSitter.module.scss';

export function MapSitter({ data }) {
  const person = {
    first: data.first_name,
    middle: data.patronym,
    last: data.last_name,
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
