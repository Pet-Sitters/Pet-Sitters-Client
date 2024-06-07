import React from 'react';
import {Button, ConfigProvider, Form} from "antd";
import styles from "./FormButton.module.scss";

const BUTTON_COLOR = "#320064";
const BUTTON_HOVER_COLOR = "#C8A5FC"

const FormButton = ({children, ...props}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: BUTTON_COLOR,
                        colorPrimaryHover: BUTTON_HOVER_COLOR,

                    },
                },
            }}
        >
            <Form.Item>
                <Button {...props}>
                    {children}
                </Button>
            </Form.Item>
        </ConfigProvider>
    );
};

export default FormButton;