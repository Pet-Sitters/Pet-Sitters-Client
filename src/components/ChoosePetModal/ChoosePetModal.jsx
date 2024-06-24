import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import s from "./ChoosePetModal.module.scss";

import {closeChooseModal} from "../../core/store/modalChoosePet/slice";
import ChoosePet from "./ChoosePet/ChoosePet.jsx";


export function ChoosePetModal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modalChoosePet.isModalPetChooseVisible);

    const handleClose = () => {
        dispatch(closeChooseModal());
    };

    useEffect(() => {
        console.log(isOpen)
    }, []);

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose} className={s.wrapper}>
                <div className={s.scrollableContainer}>
                    <DialogPanel className={s.modal}>
                        <button onClick={handleClose} className={s.button}>
                            <img src='/assets/icons/Auth/close.png' alt='close' className={s.buttonImg}/>
                        </button>

                        <DialogTitle className={s.title}>Кого хотите отдать
                            на передержку?</DialogTitle>
                        <ChoosePet/>

                    </DialogPanel>
                </div>
            </Dialog>
        </>
);
};
