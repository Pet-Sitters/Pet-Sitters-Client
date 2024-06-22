import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SitterState } from '../../core/store/sitterInfo/slice';
import { getSitterInfo } from '../../core/store/sitterInfo/thunk';
import { Filter } from './Filter/Filter';
import { SitterList } from './SitterList/SitterList';
import s from './Sitters.module.scss';
export function SittersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSitterInfo());
  }, [dispatch]);
  const { isSuccess, isLoading, isError, sitterInfoData } = useSelector(SitterState);
  if (isLoading) {
    return (
      <div className={s.loadingContainer}>
        <Loading3QuartersOutlined />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <section className={s.sitters}>
        <Filter />
        <SitterList sitterInfoData={sitterInfoData} />
      </section>
    );
  }
}
