import React from 'react';

import OrderCard from '../OrderCard/OrderCard.jsx';
import s from './OrderList.module.scss';

const OrderList = ({ keeps }) => {
  return (
    <div className={s.orderList}>
      {keeps.map((keep) => (
        <OrderCard
          key={keep.id}
          status={keep.status}
          id={keep.id}
          from_date={keep.from_date}
          to_date={keep.to_date}
          sitter={keep.sitter}
        />
      ))}
    </div>
  );
};

export default OrderList;
