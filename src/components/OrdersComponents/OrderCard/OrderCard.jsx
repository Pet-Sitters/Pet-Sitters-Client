import React, {useEffect} from 'react';
import s from './OrderCard.module.scss';

import clockImg from '../../../../public/assets/images/account/status/clock-Light.svg'
import confirmImg from '../../../../public/assets/images/account/status/check-circle-Light.svg'

// const options = [
//     { status: 'new', image: '' },
//     { status: 'active', image: confirmImg },
//     { status: 'in_process', image: clockImg },
// ];

const OrderCard = ({status}) => {

    useEffect(() => {
        console.log(status)
    }, [status])

    return (
        <div className={s.order}>
            <div className={s.infoContainer}>
                <h1 className={s.title}>Передержка вид животного + Кличка</h1>
                <p className={s.info}>Даты: </p>
                <p className={s.info}>Ситтер: </p>
                <p className={s.details}>Cмотреть детали заказа</p>
            </div>
            <div>
                {
                    status === 'new' ? '' : status === 'active' ? (
                        <div className={s.status}>
                            <div className={s.statusImg}>
                                <img src={confirmImg} alt='confirm'/>
                            </div>
                            <h1 className={s.statusText}>Подтверждено</h1>
                        </div>
                    ) : (
                        <div className={s.status}>
                            <div className={s.statusImg}>
                                <img src={clockImg} alt='process'/>
                            </div>
                            <h1 className={s.statusText}>В ожидании подтверждения</h1>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default OrderCard;