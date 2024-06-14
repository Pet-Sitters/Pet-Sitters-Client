import React from 'react';
import FormButton from "../../components/UI/Buttons/FormButton/FormButton.jsx";
import {Form} from "antd";

import s from './TestApi.module.scss'

const TestApi = () => {
    const [form] = Form.useForm()

    const handleFinish = (values) => {
        console.log('Form values:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className={s.test}>
            <Form
                form={form}
                layout='vertical'
                onFinishFailed={onFinishFailed}
                onFinish={handleFinish}
            >
                <FormButton
                    type='primary'
                    htmlType='submit'
                >
                    test request
                </FormButton>
            </Form>
        </div>
    );
};

export default TestApi;