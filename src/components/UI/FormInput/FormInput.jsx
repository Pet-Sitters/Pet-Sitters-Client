import React from 'react';
import {Form, Input} from "antd";

const FormInput = ({type, placeholder, ...props}) => {
    return (
        <Form.Item {...props}>
            <Input type={type} placeholder={placeholder}/>
        </Form.Item>
    );
};

export default FormInput;