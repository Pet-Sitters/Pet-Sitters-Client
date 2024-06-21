import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, message} from "antd";
import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import s from './LongForm.module.scss';

import FormButton from "../UI/Buttons/FormButton/FormButton.jsx";
import {Loading3QuartersOutlined} from "@ant-design/icons";


// import {selectShortFormIsLoading, selectShortFormIsSuccess} from "../../core/store/shortForm/slice.js";
import {selectCurrentUser} from "../../core/store/auth/slice";
import {closeModal} from "../../core/store/modalLongForm/slice";
import LForm from "./LForm/LForm.jsx";


export function LongForm() {
    // const [form] = Form.useForm();
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modalLongFormSlice.isLongFormModalVisible);

    // const isSuccess = useSelector(selectShortFormIsSuccess);
    // const isLoading = useSelector(selectShortFormIsLoading);
    const userData = useSelector(selectCurrentUser);
    const FIRST_USER_INDEX = 0;
    const id = userData?.length > 0 ? userData[FIRST_USER_INDEX].id : null;

    // const handleFinish = (values) => {
        // const orderData = { ...values, phone_num: parseInt(values.phone_num, 10), user: id };

        // dispatch(postShortForm(orderData));
        // isSuccess && dispatch(closeModal());
    // };
    //
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

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
                        <h1 className={s.subTitle}>
                            Расскажите нам о своём питомце подробнее
                        </h1>
                        <LForm />
                        {/*<Form form={form} layout='vertical' onFinishFailed={onFinishFailed} onFinish={handleFinish}>*/}

                        {/*    <FormButton type='primary' htmlType='submit' className={s.formButton}>*/}
                        {/*        Отправить*/}
                        {/*    </FormButton>*/}
                        {/*</Form>*/}
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};
