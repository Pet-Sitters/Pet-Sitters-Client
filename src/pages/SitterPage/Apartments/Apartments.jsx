import petrovich from 'petrovich';
import { useState } from 'react';
import s from './Apartments.module.scss';
import nophoto from './img/nophoto.png';
import img1 from '/public/assets/images/Sitter/1.jpg';
import img2 from '/public/assets/images/Sitter/2.jpg';
import img3 from '/public/assets/images/Sitter/3.jpg';
import img4 from '/public/assets/images/Sitter/4.jpg';

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
  const images = data?.images ? data?.images : [img1, img2, img3, img4];

  return (
    <article className={s.apartments}>
      <h4 className={s.title}>
        {' '}
        Дом <span className={s.accent}>{nameSitter.first}</span>{' '}
      </h4>
      <div className={s.imgContainer}>
        {images.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt='photo'
            className={expandedImage === img.image ? s.expandedImage : s.image}
            onClick={() => handleImageClick(img.image)}
          />
        ))}
      </div>
    </article>
  );
}
