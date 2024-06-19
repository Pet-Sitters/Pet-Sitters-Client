import { SitterCard } from '../../../components/SitterCard/SitterCard';
import s from './SitterList.module.scss';
export function SitterList() {
  return (
    <div className={s.sitterList}>
      <SitterCard />
    </div>
  );
}
