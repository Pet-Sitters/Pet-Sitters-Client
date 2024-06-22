import { Loading3QuartersOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SittersListState } from '../../core/store/sitterList/slice';
import { getSitterList } from '../../core/store/sitterList/thunk';
import { Filter } from './Filter/Filter';
import { SitterList } from './SitterList/SitterList';
import s from './Sitters.module.scss';
export function SittersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSitterList());
  }, [dispatch]);
  const { isSuccess, isLoading, isError, sitterListData } = useSelector(SittersListState);

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
        <SitterList sitterListData={sitterListData} />
      </section>
    );
  }
}
