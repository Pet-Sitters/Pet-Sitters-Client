import CarouselContainer from '../../../components/Carousel/CarouselContainer/CarouselContainer'
import s from './Feedback.module.scss'

const Feedback = () => (
	<article className={s.Feedback}>
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
		<CarouselContainer />
	</article>
)
export default Feedback
