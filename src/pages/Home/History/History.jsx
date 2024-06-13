import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './History.module.scss'
export function History() {
	return (
		<article className={s.history}>
			<div className={s.photo}>
				<img
					src='/assets/images/Home/photo.png'
					alt='photo'
					className={s.image}
				/>
				<div className={s.circle}></div>
			</div>
			<div className={s.textContent}>
				<h3 className={s.title}>Как все начиналось</h3>
				<h4 className={s.subTitle}>История создания</h4>
				<p className={s.textHistory}>
					С чего все началось: переезд в Армению в 2023 году С нами переехала и
					кошка, оставить ее было не с кем, сервиса ситтеров в Армении не было{' '}
					<br />
					<span className={s.accent}>Решили сделать сами</span> <br /> Такой
					сервис, которому могли доверить нашу любимую кошку
				</p>
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