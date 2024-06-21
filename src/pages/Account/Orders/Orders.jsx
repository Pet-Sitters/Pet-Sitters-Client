import React from 'react';
import s from './Orders.module.scss';
import LongFormButton from "../../../components/UI/Buttons/LongFormButton/LongFormButton.jsx";
import NoOrders from "../../../components/Orders/NoOrders/NoOrders.jsx";


const Orders = () => {
  return (
      <div className={s.orders}>
        <NoOrders/>
        <LongFormButton>Заказать ситтинг</LongFormButton>
      </div>
  );
};

export default Orders;
