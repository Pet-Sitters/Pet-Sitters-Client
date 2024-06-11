import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './Map.module.scss'
export function Map() {
	return (
		<article className={s.map}>
			<h3 className={s.title}>Карта ситтеров</h3>
			<p className={s.text}>Найти в своем районе</p>
			<div className={s.mapContainer}>
				<img src='/assets/images/Home/map.png' alt='map' />
			</div>
			<div className={s.buttons}>
				<FormButton
					buttonColor='#DBEF98'
					buttonHoverColor='#C896FF'
					textColor='#47156C'
					textHoverColor='#47156C'
					type='primary'
				>
					СИТТЕРЫ
				</FormButton>
				<FormButton
					buttonColor='#47156C'
					buttonHoverColor='#C896FF'
					textColor='#FFFFFF'
					textHoverColor='#47156C'
					type='primary'
				>
					Оформить заказ
				</FormButton>
			</div>
		</article>
	)
}
