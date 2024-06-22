import petrovich from 'petrovich';
import { useState } from 'react';
import s from './Apartments.module.scss';
import nophoto from './img/nophoto.png';
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
  const photo = data.image ? data.image : nophoto;
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
            src={photo}
            alt='photo'
            className={expandedImage === img.image ? s.expandedImage : s.image}
            onClick={() => handleImageClick(img.image)}
          />
        ))}
      </div>
    </article>
  );
}
