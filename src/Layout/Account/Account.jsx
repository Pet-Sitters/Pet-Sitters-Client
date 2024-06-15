import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import ProfileSidebar from '../../pages/Account/ProfileSidebar/ProfileSidebar';
import s from './Account.module.scss';

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
  );
}
