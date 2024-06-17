import {useEffect, useState} from "react";
import {DatePicker, Form} from 'antd';
import {useNavigate} from "react-router-dom";
// import TextArea from 'antd/es/input/TextArea.js';
import FormButton from '../../../components/UI/Buttons/FormButton/FormButton';
import FormInput from '../../../components/UI/FormInput/FormInput.jsx';
import FormRadio from '../../../components/UI/FormRadio/FormRadio.jsx';
import styles from './PetForm.module.scss';

import {
    animalTypes,
    formInputs,
    formRadioGroups,
    formCatInputs,
    formCatRadioGroups,
    formDogRadioGroups
} from './formFields.js';

import links from "../../../router/links.js";
import initialState from "./initialState.js";

const PetForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const handleFinish = (values) => {
        console.log('Form values:', values);
        values.birth_year = dayjs(values.birth_year).format('YYYY-MM-DD');

        console.log(links.account.myPets)
        // navigate('/account/my-pets');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            form={form}
            layout='vertical'
            onFinishFailed={onFinishFailed}
            onFinish={handleFinish}
            initialValues={initialState}>
            <FormRadio name='species' options={animalTypes}/>

            {formInputs.map((input) =>
                input.type === 'year' ? (
                    <Form.Item
                        key={input.name}
                        name={input.name}
                        rules={input.rules}
                        label={input.placeholder}>
                        <DatePicker />
                    </Form.Item>
                ) : (
                    <FormInput
                        key={input.name}
                        placeholder={input.placeholder}
                        name={input.name}
                        rules={input.rules}
                        type={input.type}
                    />
                )
            )}

            {formRadioGroups.map((group) => (
                <FormRadio
                    key={group.name}
                    name={group.name}
                    label={group.label}
                    options={group.options}
                    rules={[{required: true, message: 'Введите один из вариантов'}]}
                />
            ))}

            {/*<Form.Item*/}
            {/*  shouldUpdate={(prevValues, curValues) =>*/}
            {/*    prevValues.isObserved !== curValues.isObserved*/}
            {/*  }>*/}
            {/*  {({ getFieldValue }) =>*/}
            {/*    getFieldValue('isObserved') === 'yes' ? (*/}
            {/*      <FormInput*/}
            {/*        name='clinicInfo'*/}
            {/*        placeholder='Введите информацию о клинике'*/}
            {/*        rules={[{ required: true, message: 'Введите информацию о клинике' }]}*/}
            {/*      />*/}
            {/*    ) : null*/}
            {/*  }*/}
            {/*</Form.Item>*/}

            {/*<Form.Item label='Другие важные особенности вашего питомца' name='additionalInfo'>*/}
            {/*  <TextArea rows={4} />*/}
            {/*</Form.Item>*/}

            {/*<Form.Item label='Добавить фото питомца' name='photo'>*/}
            {/*  <Upload name='photo' listType='picture' beforeUpload={() => false}>*/}
            {/*    <Button icon={<UploadOutlined />}>Upload</Button>*/}
            {/*  </Upload>*/}
            {/*</Form.Item>*/}

            <FormButton type='primary' htmlType='submit'>
                Сохранить данные
            </FormButton>
        </Form>
    );
};

export default PetForm;
