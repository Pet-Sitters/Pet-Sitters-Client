import { Filter } from './Filter/Filter';
import { SitterList } from './SitterList/SitterList';
import s from './Sitters.module.scss';
export function SittersList() {
  return (
    <section className={s.sitters}>
      <Filter />
      <SitterList />
    </section>
  );
}
