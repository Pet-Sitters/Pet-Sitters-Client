import React from 'react';
import {Button, ConfigProvider} from "antd";
import {useDispatch} from "react-redux";

import s from './LongFormButton.module.scss';

import { openModal } from '../../../../core/store/modalLongForm/slice'

const SECONDARY_COLOR = '#C896FF';
const MAIN_COLOR = '#47156C';

const LongFormButton = ({children}) => {
    const dispatch = useDispatch();

    const handleOpen = () => {
        dispatch(openModal());
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: MAIN_COLOR,
                        colorPrimaryHover: SECONDARY_COLOR,
                        borderRadius: 18,
                        controlHeight: 57,
                    },
                },
            }}>
            <Button
                className={s.LongFormButton}
                type='primary'
                onClick={() => dispatch(openModal())}
            >
                {children}
            </Button>
        </ConfigProvider>
    );
};

export default LongFormButton;