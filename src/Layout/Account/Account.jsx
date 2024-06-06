import { Outlet } from 'react-router-dom'
import ProfileSidebar from '../../pages/Account/ProfileSidebar/ProfileSidebar'
import s from './Account.module.scss'
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export function Account() {
	return (
		<div className={s.account_container}>
			<div className={s.sidebar}>
				<ProfileSidebar />
			</div>
			<div className={s.outLet}>
				<Breadcrumbs />
				<Outlet></Outlet>
			</div>
		</div>
	)
}
