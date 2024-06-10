import { Outlet } from 'react-router-dom'
import { HeaderMain } from '../components/Header-Main/Header-Main'
import { HeaderTop } from '../components/Header-Top/Header-Top'
import s from './layout.module.scss'

export function Layout() {
	return (
		<div className={s.container}>
			<header className={s.header_container}>
				<HeaderTop />
				<HeaderMain />
			</header>

			<main className={s.mainContainer}>
				<Outlet />
			</main>
		</div>
	)
}
