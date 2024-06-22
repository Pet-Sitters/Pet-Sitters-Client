import { SitterCard } from '../../../components/SitterCard/SitterCard';
import s from './SitterList.module.scss';
export function SitterList({ sitterListData }) {
  return (
    <div className={s.sitterList}>
      <SitterCard data={sitterListData} />
    </div>
  );
}
