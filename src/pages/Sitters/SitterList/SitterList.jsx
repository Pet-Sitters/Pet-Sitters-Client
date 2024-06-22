import { SitterCard } from '../../../components/SitterCard/SitterCard';
import s from './SitterList.module.scss';
export function SitterList({ sitterInfoData }) {
  return (
    <div className={s.sitterList}>
      <SitterCard data={sitterInfoData} />
    </div>
  );
}
