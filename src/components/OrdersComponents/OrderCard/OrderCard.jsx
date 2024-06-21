import React from 'react';
import s from './OrderCard.module.scss';

const OrderCard = () => {
    return (
        <div className={s.order}>
            <div>
                <p>Передержка вид животного + Кличка</p>
                <p>Даты: </p>
                <p>Ситтер: </p>
                <p>Cмотреть детали заказа</p>
            </div>
            <div>
                <p className={s.status}>В ожидании
                    подтверждения</p>
            </div>

        </div>
    );
};

export default OrderCard;