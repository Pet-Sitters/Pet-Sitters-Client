import BeSitterButton from '../../../components/UI/Buttons/BeSitterButton/BeSitterButton'
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './HowWork.module.scss'

export function HowWork() {
	return (
		<div className={s.howWork}>
			<div className={s.content}>
				<div className={s.header}>
					<h3 className={s.title}></h3>
					<p className={s.text}></p>
				</div>
				<div className={s.wrapper}>
					<div className={s.cards}>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/bottle.gif'
									alt='bottle'
									className={s.bottle}
								/>
							</div>
							<p className={s.description}>
								Оставляете заявку на передержку на сайте
							</p>
						</div>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/face.gif'
									alt='face'
									className={s.face}
								/>
							</div>
							<p className={s.description}>
								Выбираете идеального ситтера из множествавариантов на сайте
							</p>
						</div>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/phone.gif'
									alt='phone'
									className={s.phone}
								/>
							</div>
							<p className={s.description}>
								Оплачиваете передержку армянской или российской картой
							</p>
						</div>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/dog.gif'
									alt='dog'
									className={s.dog}
								/>
							</div>
							<p className={s.description}>
								Догситтер гуляет с вашей собакой, моет ему лапы после прогулки,
								дает корм
							</p>
						</div>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/cat.gif'
									alt='cat'
									className={s.cat}
								/>
							</div>
							<p className={s.description}>
								Кетситер играет с вашим котом, кормит и следит за чистотой лотка
							</p>
						</div>
						<div className={s.item}>
							<div className={s.circle}>
								<img
									src='/assets/icons/Home/together.gif'
									alt='together'
									className={s.together}
								/>
							</div>
							<p className={s.description}>
								Во время передержки ситтер отправляет вам отчеты с вашим
								питомцем
							</p>
						</div>
					</div>
					<div className={s.buttons}>
						<FormButton className={s.order} type='primary' htmlType='submit'>
							Оформить заказ
						</FormButton>
						<BeSitterButton
							className={s.sitter}
							type='primary'
							htmlType='submit'
						>
							Стать ситтером
						</BeSitterButton>
					</div>
				</div>
			</div>
		</div>
	)
}
