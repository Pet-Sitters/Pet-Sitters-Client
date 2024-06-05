import { Outlet } from 'react-router-dom'
import { Header } from './Header/Heder'
import s from './layout.module.scss'

export function Layout() {
	return (
		<div className={s.container}>
			<Header />
			<main className={s.section}>
				<Outlet />
			</main>
		</div>
	)
}
