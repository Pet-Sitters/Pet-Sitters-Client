import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SitterState } from '../../core/store/sitterInfo/slice';
import { getSitterInfo } from '../../core/store/sitterInfo/thunk';
import { AboutSitter } from './AboutSitter/AboutSitter';
import { Apartments } from './Apartments/Apartments';
import FeedbackSitter from './Feedback/Feedback';
import { MapSitter } from './MapSitter/MapSitter';
import { Promo } from './Promo/Promo';
import s from './SitterPage.module.scss';

export function SitterPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSitterInfo({ id }));
  }, [dispatch, id]);
  const { isSuccess, isLoading, isError, sitterInfoData } = useSelector(SitterState);

  if (isLoading) {
    return (
      <div className={s.loadingContainer}>
        <Loading3QuartersOutlined spin />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <section className={s.sitterPage}>
        <Promo data={sitterInfoData} />

        <AboutSitter data={sitterInfoData} />
        <Apartments data={sitterInfoData} />
        <MapSitter data={sitterInfoData} />
        <FeedbackSitter data={sitterInfoData} />
      </section>
    );
  }
}
