import React from 'react';
import s from './OrderCard.module.scss';

import clockImg from '../../../../public/assets/images/account/status/clock-Light.svg'
import confirmImg from '../../../../public/assets/images/account/status/check-circle-Light.svg'

const OrderCard = () => {
    return (
        <div className={s.order}>
            <div className={s.infoContainer}>
                <h1 className={s.title}>Передержка вид животного + Кличка</h1>
                <p className={s.info}>Даты: </p>
                <p className={s.info}>Ситтер: </p>
                <p className={s.details}>Cмотреть детали заказа</p>
            </div>
            <div className={s.status}>
                <div className={s.statusImg}>
                    <img src={clockImg} alt='process'/>
                </div>
                <h1 className={s.statusText}>В ожидании подтверждения</h1>
            </div>

        </div>
    );
};

export default OrderCard;