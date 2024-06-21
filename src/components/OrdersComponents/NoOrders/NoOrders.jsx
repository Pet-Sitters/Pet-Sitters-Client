import React from 'react';
import animalsImg from '../../../../public/assets/images/account/animals/animals.svg'
import s from "./NoOrders.module.scss"

const NoOrders = () => {
    return (
        <div className={s.noOrder}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>У вас пока нет заказов</h1>
            </div>

            <div className={s.imgContainer}>
                <img className={s.animals} src={animalsImg} alt="animals"/>
            </div>
        </div>
    );
};

export default NoOrders;