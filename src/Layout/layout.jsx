import { Outlet } from 'react-router-dom'
import { Header } from '../pages/promoPage/header/heder'
import s from './layout.module.scss'

export function Layout() {
	return (
		<div className={s.container}>
			<Header />
			<main className={s.section}>
				<Outlet></Outlet>
			</main>
		</div>
	)
}
