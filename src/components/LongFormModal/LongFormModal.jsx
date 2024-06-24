import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import s from './LongFormModal.module.scss';

import {closeModal} from "../../core/store/modalLongForm/slice";
import LongForm from "./LongForm/LongForm.jsx";
import {selectOrderInfo} from "../../core/store/orderInfo/slice.js";


export function LongFormModal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modalLongForm.isLongFormModalVisible);
    const orderInfo = useSelector(selectOrderInfo);
    const [keepId, setKeepId] = useState(null);

    useEffect(() => {
        if (orderInfo){
            setKeepId(orderInfo.keep)
        }
    }, [orderInfo])

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} className={s.wrapper}>
                <div className={s.scrollableContainer}>
                    <DialogPanel className={s.modal}>
                        <button onClick={handleClose} className={s.button}>
                            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg} />
                        </button>

                        <DialogTitle className={s.title}>Расскажите нам о своём питомце подробнее</DialogTitle>

                        <LongForm keepId={keepId} />
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};
