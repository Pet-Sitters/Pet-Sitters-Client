import { Link } from 'react-router-dom'
import s from './Header-Top.module.scss'

<<<<<<< HEAD
export function Header_Top() {
=======
export function HeaderTop() {
>>>>>>> ef49565705e1e28a50c058edea7f9a3d74c1ebba
	return (
		<div className={s.headerTop_container}>
			<div className={s.leftBlock}>
				<Link to={'/'} className={s.link}>
					Контакты
				</Link>
				<img src='/assets/icons/button-arrow.png' alt='arrow' />
			</div>
			<div className={s.rightBlock}>
				<Link to={'/login'} className={s.link}>
					Войти
				</Link>{' '}
				/{' '}
				<Link to={'/registration'} className={s.link}>
					Зарегистрироваться
				</Link>
			</div>
		</div>
	)
}
