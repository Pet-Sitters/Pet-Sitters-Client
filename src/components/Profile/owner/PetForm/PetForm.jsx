import React from 'react';
import {Button, Form, Upload} from 'antd';
import styles from "./PetForm.module.scss"
import FormButton from "../../../UI/FormButton/FormButton.jsx";
import FormInput from "../../../UI/FormInput/FormInput.jsx";
import FormRadio from "../../../UI/FormRadio/FormRadio.jsx";

import {animalTypes, formInputs, formRadioGroups} from "./formFields.js";
import {UploadOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea.js";


const PetForm = () => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        console.log('Form values:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form form={form}
              layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={handleFinish}
              initialValues={{'animalType': animalTypes[0].value}}
        >
            <FormRadio name="animalType" options={animalTypes}/>

            {formInputs.map(input => <FormInput
                                                key={input.name}
                                                placeholder={input.placeholder}
                                                name={input.name}
                                                rules={input.rules}
                                                type={input.type}
                                            />
            )}

            {formRadioGroups.map(group => <FormRadio
                                            key={group.name}
                                            name={group.name}
                                            label={group.label}
                                            options={group.options}
                                            rules={[{ required: true, message: 'Введите один из вариантов'}]}
                                          />)}


            <Form.Item label="Другие важные особенности вашего питомца" name="additionalInfo">
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item label="Добавить фото питомца" name="photo">
                <Upload name="photo" listType="picture" beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>


            <FormButton
                className={styles.submitButton}
                type='primary'
                htmlType='submit'
            >
                Сохранить данные
            </FormButton>

        </Form>
    );
};

export default PetForm;