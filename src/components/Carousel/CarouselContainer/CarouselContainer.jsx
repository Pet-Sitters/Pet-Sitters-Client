import { Carousel } from 'antd';
import { CarouselCard } from '../CarouselCard/CarouselCard';
// import cardsData from '../data/cardDataCarousel.js';
import s from './CarouselContainer.module.scss';
import { NextArrow, PrevArrow } from './CustomArrow/CustomArrow.jsx';
const CarouselContainer = ({ cardsData }) => (
  <Carousel
    style={{ minHeight: '1100px', padding: '0 116px', position: 'relative' }}
    slidesToShow={3}
    slidesToScroll={1}
    className={s.carouselContainer}
    arrows
    dotPosition='left'
    infinite={false}
    prevArrow={<PrevArrow />}
    nextArrow={<NextArrow />}>
    {cardsData.map((card) => (
      <div key={card.id} className={s.carousel}>
        <CarouselCard {...card} />
      </div>
    ))}{' '}
  </Carousel>
);
export default CarouselContainer;
