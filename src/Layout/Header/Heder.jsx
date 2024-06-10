import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCurrentUser } from '../../core/store/auth/slice'

import { logout } from '../../core/store/auth/thunk'
import s from './Header.module.scss'

export function Header() {
	const dispatch = useDispatch()
	const auth = useSelector(selectCurrentUser)
	// console.log(auth)
	return (
		<div className={s.header}>


			<div className={s.logo}>
				<img src='/assets/images/logo.png' alt='logo' />
			</div>

			<nav className={s.navigation}>
				<ul className={s.list}>
					<li className={s.listItem}>
						<Link to={'/'} className={s.link}>
							Домой
						</Link>
					</li>
					{auth === null && (
						<>
							<li className={s.listItem}>
								<Link to={'/registration'} className={s.link}>
									Зарегистрироваться
								</Link>
							</li>
							<li className={s.listItem}>
								<Link to={'/login'} className={s.link}>
									Войти
								</Link>
							</li>
						</>
					)}

					{auth && (
						<li className={s.listItem}>
							<Link
								to={'/'}
								onClick={() => dispatch(logout())}
								className={s.link}
							>
								Выйти
							</Link>
							<Link to={'/account/personal'} className={s.link}>
								Личный кабинет
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}
