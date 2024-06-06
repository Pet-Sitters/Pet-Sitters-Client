import React from 'react';
import {Button, Form} from "antd";
import styles from "./FormButton.module.scss";

const FormButton = ({children, ...props}) => {
    return (
        <Form.Item>
            <Button {...props}>
                {children}
            </Button>
        </Form.Item>
    );
};

export default FormButton;