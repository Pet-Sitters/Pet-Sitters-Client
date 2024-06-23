import {Loading3QuartersOutlined} from '@ant-design/icons';
import {Form, message} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {selectCurrentUser} from '../../core/store/auth/slice';
import {closeModal} from '../../core/store/modalOrder/slice';
import {
    selectShortFormIsLoading,
    selectShortFormIsSuccess,
} from '../../core/store/shortForm/slice';
import {postShortForm} from '../../core/store/shortForm/thunk';
import FormButton from '../UI/Buttons/FormButton/FormButton';
import FormInput from '../UI/FormInput/FormInput';
import {shortFormInputs} from './ShortFormData';
import s from './ShortFormInput.module.scss';

import {openChooseModal} from "../../core/store/modalChoosePet/slice";
import {setOrderInfo} from "../../core/store/orderInfo/slice.js";

const ShortFormInputs = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const isSuccess = useSelector(selectShortFormIsSuccess);
    const isLoading = useSelector(selectShortFormIsLoading);
    const userData = useSelector(selectCurrentUser);
    const FIRST_USER_INDEX = 0;
    const id = userData?.length > 0 ? userData[FIRST_USER_INDEX].id : null;

    message.config({
        top: 400, // отступ от верхней части экрана (в пикселях)
        duration: 3, // время показа уведомления (в секундах)
        maxCount: 3, // максимальное количество одновременно отображаемых уведомлений
    });

    useEffect(() => {
        if (isSuccess) {
            dispatch(closeModal());
            dispatch(openChooseModal());
        }
    }, [isSuccess, dispatch]);

    const handleFinish = (values) => {
        const orderData = {...values, phone_num: parseInt(values.phone_num, 10), user: id};
        dispatch(postShortForm(orderData))
            .then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    console.log('Response:', response.payload);
                    dispatch(setOrderInfo(response.payload))
                }
            })
            .catch((error) => {
                console.log('Error:', error);
            });;
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Форма не отправлена, проверьте заполнение и отправьте еще раз');
    };

    return (
        <Form
            form={form}
            layout='vertical'
            onFinishFailed={onFinishFailed}
            onFinish={handleFinish}
            className={s.form}>
            {shortFormInputs.map((input) => (
                <FormInput
                    key={input.name}
                    placeholder={input.placeholder}
                    name={input.name}
                    rules={input.rules}
                    type={input.type}
                    className={s.input}
                />
            ))}

            <FormButton type='primary' htmlType='submit' className={s.button}>
                {isLoading && <Loading3QuartersOutlined/>} Продолжить
            </FormButton>
        </Form>
    );
};

export default ShortFormInputs;
