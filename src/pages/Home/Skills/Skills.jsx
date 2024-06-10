import s from './Skills.module.scss'
export function Skills() {
	return (
		<article className={s.skills}>
			<div className={s.wrapper}>
				<div className={s.skillsDog}>
					<img
						src='/assets/images/Home/skillsDog.png'
						alt='skills'
						className={s.photo}
					/>
					<h3 className={s.title}>
						Навыки <span className={s.accent_dog}>ДОГСИТТЕРА</span>
					</h3>
					<p className={s.itemText}>
						{' '}
						<span className={s.accentSkill}>Умеют вытаскивать</span> подобранный
						кусок из пасти собаки
					</p>
					<p className={s.itemText}>
						{' '}
						<span className={s.accentSkill}>Поладят с собакой</span> , даже если
						у нее непростой характер
					</p>
					<p className={s.itemText}>
						{' '}
						<span className={s.accentSkill}>Не допустят </span>драку с другой
						собакой
					</p>
					<p className={s.itemText}>
						Понимают <span className={s.accentSkill}>язык тела</span>собаки
					</p>
					<p className={s.itemText}>
						<span className={s.accentSkill}>Знают что делать</span>, если собаке
						стало плохо
					</p>
				</div>
				<div className={s.skillsCat}>
					<img
						src='/assets/images/Home/skillsCat.png'
						alt='skills'
						className={s.photo}
					/>
					<h3 className={s.title}>
						Навыки <span className={s.accent_cat}>КЕТСИТТЕРА</span>
					</h3>
					<p className={s.itemText}>
						Обеспечит <span className={s.accentSkill}>комплексный уход</span>,
						кормление, купание, игры, уход, поездку к ветеринару
					</p>
					<p className={s.itemText}>
						Знают как <span className={s.accentSkill}>развлечь кота</span>
					</p>
					<p className={s.itemText}>
						<span className={s.accentSkill}>Умеют ладить</span> с любым
						своенравным котом/кошкой
					</p>
					<p className={s.itemText}>
						Знают <span className={s.accentSkill}>язык тела</span> кошки
					</p>
					<p className={s.itemText}>
						<span className={s.accentSkill}>Знают что делать</span>, если кошке
						нездоровится
					</p>
				</div>
			</div>
		</article>
	)
}
