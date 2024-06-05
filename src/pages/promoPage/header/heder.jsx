import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../core/store/auth/thunk'
import s from './header.module.scss'

export function Header() {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.authSlice)
	// console.log(auth)
	return (
		<div className={s.header}>
			<div className={s.logo}>logo</div>
			<Link to={'/calc'} className={s.calc}>
				Калькулятор
			</Link>
			<nav className={s.navigation}>
				<ul className={s.list}>
					<li className={s.listItem}>
						<Link to={'/'} className={s.link}>
							Домой
						</Link>
					</li>
					{auth.currentUser === null && (
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

					{auth.currentUser && (
						<li className={s.listItem}>
							<Link
								to={'/'}
								onClick={() => dispatch(logout())}
								className={s.link}
							>
								Выйти
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
}
