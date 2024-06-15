import React from 'react';
import FormButton from "../../components/UI/Buttons/FormButton/FormButton.jsx";
import {Form} from "antd";

import PetService from "./api/services/PetService.js"

import s from './TestApi.module.scss'


const TestApi = () => {
    const [form1] = Form.useForm()
    const [form2] = Form.useForm()

    const handleFinish1 = async (values) => {
        console.log('Form values:', values)
        console.log(localStorage.getItem('accessToken'))

        try {
            const response = await PetService.getUser()
            console.log(response)
        } catch (e){
            console.log(e)
        }

    }

    const handleFinish2 = async (values) => {
        console.log('Form values:', values)
        console.log(localStorage.getItem('accessToken'))

        try {
            const response = await PetService.fetchPets()
            console.log(response)
            console.log(response.data)
        } catch (e){
            console.log(e)
        }

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className={s.test}>
            <div>
                <Form
                    form={form1}
                    layout='vertical'
                    onFinishFailed={onFinishFailed}
                    onFinish={handleFinish1}
                >
                    <FormButton
                        type='primary'
                        htmlType='submit'
                    >
                        test user request
                    </FormButton>
                </Form>
            </div>
            <div>
                <Form
                    form={form2}
                    layout='vertical'
                    onFinishFailed={onFinishFailed}
                    onFinish={handleFinish2}
                >
                    <FormButton
                        type='primary'
                        htmlType='submit'
                    >
                        test pets request
                    </FormButton>
                </Form>
            </div>
        </div>

    );
};

export default TestApi;