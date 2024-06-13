import s from './CarouselCard.module.scss'
export function CarouselCard({ icon, title, content, userName }) {
	return (
		<div className={s.carouselCard}>
			<div className={s.photoContainer}>
				<img src={icon} alt='avatar' className={s.photo} />
			</div>
			<div className={s.contentContainer}>
				<h5 className={s.title}>{title}</h5>
				<p className={s.description}>{content}</p>
				<div className={s.userNameContainer}>
					<img
						src='/assets/images/Home/pethand.png'
						alt='pethend'
						className={s.petHandImg}
					/>
					<div className={s.userName}>{userName}</div>
				</div>
			</div>
		</div>
	)
}
