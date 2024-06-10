import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCurrentUser } from '../../core/store/auth/slice'

import { useEffect, useState } from 'react'
import s from './Header-Main.module.scss'

export function HeaderMain() {
	const dispatch = useDispatch()
	const auth = useSelector(selectCurrentUser)
	// console.log(auth)
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 260) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<div className={`${s.headerMain} ${scrolled ? s.scrolled : ''}`}>
			<nav className={s.leftMenu}>
				<ul className={s.list}>
					<li className={s.item}>
						<Link className={s.link}>О сервисе</Link>
						<Link className={s.link}>Передержка собак</Link>
						<Link className={s.link}>Передержка кошек</Link>
					</li>
				</ul>
			</nav>
			<div className={s.logo}>
				<img src='/assets/images/logo.png' alt='logo' />
			</div>
			<nav className={s.rightMenu}>
				<ul className={s.list}>
					<li className={s.item}>
						<Link className={s.link}>Ситтеры</Link>
						<Link className={s.link}>Стать ситтером</Link>
					</li>
					<button className={s.headerButton}>Оформить заказ</button>
				</ul>
			</nav>
		</div>
	)
}
