import React from 'react';
import {Form, Radio} from "antd";

const FormRadio = ({name, label, rules, ...props}) => {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            <Radio.Group {...props} />
        </Form.Item>
    );
};

export default FormRadio;