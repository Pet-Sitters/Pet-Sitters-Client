import { CloseOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import confirmImg from '../../../../public/assets/images/account/status/check-circle-Light.svg';
import clockImg from '../../../../public/assets/images/account/status/clock-Light.svg';

import { deleteKeep } from '../../../core/store/keep/thunk.js';
import { getPet } from '../../../core/store/pet/thunk.js';
import s from './OrderCard.module.scss';

// const options = [
//     { status: 'new', image: '' },
//     { status: 'active', image: confirmImg },
//     { status: 'in_process', image: clockImg },
//     { status: 'done', image: '' },
// ];

const OrderCard = ({ id, status, from_date, to_date, sitter }) => {
  const [petInfo, setPetInfo] = React.useState([]);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteKeep(id));
  };

  return (
    <div className={s.order}>
      <button className={s.delete} onClick={handleDelete}>
        <CloseOutlined />
      </button>
      <div className={s.infoContainer}>
        <h1 className={s.title}>Передержка #{id}</h1>
        <p className={s.info}>
          Даты: {from_date} - {to_date}
        </p>
        <p className={s.info}>Ситтер: {sitter}</p>
        <p className={s.details}>Cмотреть детали заказа</p>
      </div>
      <div className={s.rightSide}>
        {status === 'new' ? (
          ''
        ) : status !== 'active' ? (
          <div className={s.status}>
            <div className={s.statusImg}>
              <img src={confirmImg} alt='confirm' />
            </div>
            <h1 className={s.statusText}>Подтверждено</h1>
          </div>
        ) : (
          <div className={s.status}>
            <div className={s.statusImg}>
              <img src={clockImg} alt='process' />
            </div>
            <h1 className={s.statusText}>В ожидании подтверждения</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
