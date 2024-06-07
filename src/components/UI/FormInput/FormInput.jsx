import React from 'react';
import {ConfigProvider, Form, Input} from "antd";

import styles from "./FormInput.module.scss";

const HOVER_INPUT_COLOR = '#8422E6';

const FormInput = ({type, placeholder, ...props}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        activeBorderColor: HOVER_INPUT_COLOR,
                        borderRadius: 24,
                        fontSize: 20,
                        lineWidth: 2,
                        controlHeight: 74
                    },
                },
            }}
        >
            <Form.Item className={styles.input} {...props}>
                <Input type={type} placeholder={placeholder}/>
            </Form.Item>
        </ConfigProvider>
    );
};

export default FormInput;