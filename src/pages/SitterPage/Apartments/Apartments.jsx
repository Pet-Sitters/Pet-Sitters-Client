import petrovich from 'petrovich';
import { useState } from 'react';
import s from './Apartments.module.scss';

export function Apartments({ data }) {
  const person = {
    first: data.first_name,
    middle: data.patronym,
    last: data.last_name,
  };
  const nameSitter = petrovich(person, 'genitive');

  const [expandedImage, setExpandedImage] = useState(null);
  const handleImageClick = (image) => {
    setExpandedImage(expandedImage === image ? null : image);
  };

  return (
    <article className={s.apartments}>
      <h4 className={s.title}>
        {' '}
        Дом <span className={s.accent}>{nameSitter.first}</span>{' '}
      </h4>

      <div className={s.imgContainer}>
        {data.images.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt='photo'
            className={expandedImage === img.image ? s.expandedImage : s.image}
            onClick={() => handleImageClick(img.image)}
          />
        ))}
      </div>
    </article>
  );
}
