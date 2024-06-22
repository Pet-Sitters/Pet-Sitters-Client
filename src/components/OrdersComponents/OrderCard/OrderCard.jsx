import React, {useEffect} from 'react';
import s from './OrderCard.module.scss';
import {useDispatch} from "react-redux";
import {CloseOutlined} from "@ant-design/icons";

import clockImg from '../../../../public/assets/images/account/status/clock-Light.svg'
import confirmImg from '../../../../public/assets/images/account/status/check-circle-Light.svg'

import {deleteKeep} from "../../../core/store/keep/thunk.js";


// const options = [
//     { status: 'new', image: '' },
//     { status: 'active', image: confirmImg },
//     { status: 'in_process', image: clockImg },
//     { status: 'done', image: '' },
// ];

const OrderCard = ({status, id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteKeep(id));
    }

    return (
        <div className={s.order}>
            <button className={s.delete} onClick={handleDelete}>
                <CloseOutlined/>
            </button>
            <div className={s.infoContainer}>
                <h1 className={s.title}>Передержка вид животного + Кличка</h1>
                <p className={s.info}>Даты: </p>
                <p className={s.info}>Ситтер: </p>
                <p className={s.details}>Cмотреть детали заказа</p>
            </div>
            <div className={s.rightSide}>
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