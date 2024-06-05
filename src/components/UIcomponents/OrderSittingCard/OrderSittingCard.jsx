import { OrderButton } from '../Buttons/OrderButton/OrderButton'
import s from './OrderSittingCard.module.scss'
export function OrderSittingCard() {
	const img = <true></true>
	return (
		<div className={s.card}>
			{img ? (
				<img
					src='/assets/images/account/cat.png'
					alt='animal foto'
					className={s.img}
				/>
			) : (
				<button className={s.photoContainer}></button>
			)}

			<h3 className={s.title}>Кличка</h3>
			<div className={s.buttonContainer}>
				<OrderButton textButton={'Заказать ситтинг'} />
			</div>
		</div>
	)
}
