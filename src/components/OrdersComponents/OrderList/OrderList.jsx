import React from 'react';

import s from './OrderList.module.scss';
import OrderCard from "../OrderCard/OrderCard.jsx";

const OrderList = ({keeps}) => {
    return (
        <div className={s.orderList}>
            {
                keeps.map((keep) => <OrderCard
                    key={keep.id}
                    status={keep.status}
                />)
            }
        </div>
    );
};

export default OrderList;