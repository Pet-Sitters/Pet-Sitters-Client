import React from 'react';
import s from './Orders.module.scss';
import LongFormButton from "../../../components/UI/Buttons/LongFormButton/LongFormButton.jsx";
import NoOrders from "../../../components/OrdersComponents/NoOrders/NoOrders.jsx";
import OrderCard from "../../../components/OrdersComponents/OrderCard/OrderCard.jsx";


const Orders = () => {
    const [orders, setOrders] = React.useState(false);

    const handleClick = () => {
        if (orders){
            setOrders(false);
        } else {
            setOrders(true);
        }
    }

    return (
      <div className={s.orders}>
          {
              orders ? (
                  <OrderCard/>
              ) : (
                  <NoOrders/>
              )
          }
        <LongFormButton>Заказать ситтинг</LongFormButton>
        <button onClick={handleClick}>Change Status</button>
      </div>
  );
};

export default Orders;
