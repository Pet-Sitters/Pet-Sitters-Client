import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './AboutPetSitter.module.scss'

export function AboutPetSitter() {
	return (
		<article className={s.aboutPetSitter}>
			<div className={s.overexposure}>
				<div className={s.overexposureDog}>
					<img
						src='/assets/images/Home/expDog.png'
						alt='dog'
						className={s.imageDog}
					/>
					<h3 className={s.title}>Передержка собак</h3>
					<span className={s.accent}>Догситтер</span>
					<p className={s.text}>заберет вашего питомца к себе домой</p>
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
				<div className={s.overexposureCat}>
					<img
						src='/assets/images/Home/expCat.png'
						alt='dog'
						className={s.imageCat}
					/>
					<h3 className={s.title}>Передержка кошек</h3>
					<span className={s.accent}>Кетситтер</span>
					<p className={s.text}>обеспечит комплексный уход за вашим питомцем</p>
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
			</div>
			<div className={s.wrapperFrame}>
				<img
					src='/assets/icons/Home/Frame.png'
					alt='frame'
					className={s.frame}
				/>
			</div>
		</article>
	)
}