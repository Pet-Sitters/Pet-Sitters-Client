import { OrderButton } from '../../../components/UI/OrderButton/OrderButton'
import s from './Promo.module.scss'
export function Promo() {
	return (
		<article className={s.promo}>
			<img src='/assets/images/Home/promo_left.png' alt='imagePromo' />
			<div className={s.centralContent}>
				<h1 className={s.title}>
					Опытные ситтеры для{' '}
					<span className={s.accent}>передержки питомца</span> в Армении
				</h1>
				<div className={s.text}>
					Уехать в отпуск, путешествовать, поработать, встретиться с друзьями,
					сходить на свидание, навестить родителей, съездить в командировку или
					отдохнуть
				</div>
				<p className={s.subtitle}>Поможет Petsitter</p>
				<div className={s.buttonContainer}>
					<OrderButton textButton={'Оформить заказ'} />
				</div>
			</div>

			<img src='/assets/images/Home/promo_right.png' alt='imagePromo' />
		</article>
	)
}
