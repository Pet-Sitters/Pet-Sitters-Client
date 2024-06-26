import petrovich from 'petrovich';
import CarouselContainer from '../../../components/Carousel/CarouselContainer/CarouselContainer';
import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton';
import links from '../../../router/links';
import s from './Feedback.module.scss';
import dataFeedbackSitter from './data/cardDataCarousel';

const FeedbackSitter = ({ data }) => {
  const person = {
    first: data.first_name,
    middle: data.patronym,
    last: data.last_name,
  };
  const nameSitter = petrovich(person, 'prepositional');
  return (
    <article className={s.feedbackContainer}>
      <div className={s.header}>
        <div className={s.titleWrapper}>
          <h3 className={s.title}>
            Отзывы любимых клиентов о <span className={s.accent}>{nameSitter.first}</span>{' '}
          </h3>{' '}
        </div>
        <p className={s.strokeOne}>Благодарим за ваши комментарии и доверие</p>
        <p className={s.strokeTwo}>
          Бережно храним каждый отзыв в сердце и на нашей странице
        </p>
      </div>
      <div className={s.counter}>
        <div className={s.quantity}>
          <span className={s.counterText}>оценок: 86</span>
          <img src='/assets/icons/Home/stars.png' alt='stars' />
        </div>
        <div className={s.balls}>
          <span className={s.counterText}>средний балл: 4.9 из 5</span>
        </div>
        <div>
          <LinkButton buttonType='green' to={links.account.myOrders}>
            Оставить отзыв
          </LinkButton>
        </div>
      </div>
      <CarouselContainer cardsData={dataFeedbackSitter} />
    </article>
  );
};
export default FeedbackSitter;
