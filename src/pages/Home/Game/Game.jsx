import FormButton from '../../../components/UI/Buttons/FormButton/FormButton'
import s from './Game.module.scss'

export function Game() {
	return (
		<article className={s.game}>
			<img src='/assets/images/Home/dogs.png' alt='dogs' className={s.image} />
			<div className={s.textContent}>
				<h3 className={s.title}>
					Хотите стать ситтером <span className={s.accent}>Пройдите ИГРУ</span>{' '}
					<img
						src='/assets/images/Home/petsitter.png'
						alt='petsitter'
						className={s.petsitter}
					/>
				</h3>
				<p className={s.descriptionStart}>
					Игра разработана для{' '}
					<span className={s.accentDescr}>проверки навыков ситтинга</span>{' '}
				</p>
				<p className={s.descriptionEnd}>
					{' '}
					Состоит из набора ситуаций и решений,
					<br /> которые вам нужно будет пройти Игра <br />
					определит степень вашей готовности или <br />
					подсветит что необходимо изучить
				</p>
				<div className={s.buttons}>
					<FormButton
						buttonColor='#DBEF98'
						buttonHoverColor='#C896FF'
						textColor='#47156C'
						textHoverColor='#47156C'
						type='primary'
					>
						НАЧАТЬ ИГРУ
					</FormButton>
					<FormButton
						buttonColor='#47156C'
						buttonHoverColor='#C896FF'
						textColor='#FFFFFF'
						textHoverColor='#47156C'
						type='primary'
					>
						Стать ситтером
					</FormButton>
				</div>
			</div>
		</article>
	)
}
