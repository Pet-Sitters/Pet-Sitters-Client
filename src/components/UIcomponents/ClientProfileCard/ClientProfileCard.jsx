import s from './ClientProfileCard.module.scss'
export function ClientProfileCard() {
	const dataUser = {
		fio: 'ФАМИЛИЯ ИМЯ',
		titles: [
			'Основные данные',
			'Мои питомцы',
			'Мои заказы',
			'Избранные ситтеры',
			'Настройки',
		],
	}

	return (
		<div className={s.cardClient}>
			<img src='' alt='' className={s.avatar} />
			<p>{dataUser.fio}</p>
			{dataUser.titles.map((title, index) => (
				<p key={index}>{title}</p>
			))}
		</div>
	)
}
