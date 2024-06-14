import CarouselContainer from '../../../components/Carousel/CarouselContainer/CarouselContainer'
import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton'
import links from '../../../router/links'
import s from './Feedback.module.scss'
const Feedback = () => (
	<article className={s.feedbackContainer}>
		<div className={s.header}>
			<div className={s.titleWrapper}>
				<h3 className={s.title}>Отзывы любимых клиентов о </h3>{' '}
				<img
					src='/assets/icons/Home/textGreen.png'
					alt='petsitter'
					className={s.imageText}
				/>
			</div>
			<p className={s.strokeOne}>Благодарим за ваши комментарии и доверие</p>
			<p className={s.strokeTwo}>
				Бережно храним каждый отзыв в сердце и на нашей странице
			</p>
		</div>
		<div className={s.counter}>
			<div className={s.quantity}>
				<span className={s.counterText}>оценок: 376</span>
				<img src='/assets/icons/Home/stars.png' alt='stars' />
			</div>
			<div className={s.balls}>
				<span className={s.counterText}>средний балл: 4,9 из 5</span>
			</div>
			<div>
				<LinkButton buttonType='green' to={links.account.myOrders}>
					Оставить отзыв
				</LinkButton>
			</div>
		</div>
		<CarouselContainer />
	</article>
)
export default Feedback
