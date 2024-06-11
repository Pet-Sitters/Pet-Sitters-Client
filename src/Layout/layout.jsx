import { Outlet } from 'react-router-dom'

import { Header_Main } from '../components/Header-Main/Header-Main.jsx'
import { Header_Top } from '../components/Header-Top/Header-Top'

import s from './layout.module.scss'

export function Layout() {
	return (
		<div className={s.container}>
			<header className={s.header_container}>
				<Header_Top />
				<Header_Main />
			</header>

			<main className={s.mainContainer}>
				<Outlet />
			</main>
		</div>
	)
}
