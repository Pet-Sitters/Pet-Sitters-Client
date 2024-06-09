import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './AboutPetSitter.module.scss'

export function AboutPetSitter() {
	return (
		<section className={s.aboutPetSitter}>
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
					<FormButton type='primary' htmlType='submit'>
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
					<FormButton type='primary' htmlType='submit'>
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
				<img src='/assets/icons/Home/face.png' alt='face' className={s.face} />
				<img src='/assets/icons/Home/dog.png' alt='dog' className={s.dog} />
				<img src='/assets/icons/Home/cat.png' alt='cat' className={s.cat} />
				<img
					src='/assets/icons/Home/togever.png'
					alt='frame'
					className={s.together}
				/>
			</div>
		</section>
	)
}
