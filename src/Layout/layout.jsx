import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer/Footer.jsx';
import { HeaderMain } from '../components/HeaderMain/HeaderMain.jsx';
import { HeaderTop } from '../components/HeaderTop/HeaderTop.jsx';

import s from './layout.module.scss';

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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
