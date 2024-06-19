import { useSelector } from 'react-redux';
import { selectSitterInfoData } from '../../core/store/sitterInfo/slice';
import { AboutSitter } from './AboutSitter/AboutSitter';
import { Apartments } from './Apartments/Apartments';
import FeedbackSitter from './Feedback/Feedback';
import { MapSitter } from './MapSitter/MapSitter';
import { Promo } from './Promo/Promo';
import s from './SitterPage.module.scss';
export function SitterPage() {
  const sitterInfoData = useSelector(selectSitterInfoData);

  return (
    <section className={s.sitterPage}>
      <Promo />
      <AboutSitter />
      <Apartments />
      <MapSitter />
      <FeedbackSitter />
    </section>
  );
}
