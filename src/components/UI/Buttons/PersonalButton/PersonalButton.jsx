import React from 'react';
import styles from "../LinkButton/LinkButton.module.scss";
import {Button} from "antd";

const COLOR = '#47156C';
const HOVER_COLOR = '#C896FF';

const types = {
    main: {
        style: 'main',
        main_color: COLOR,
        hover_color: HOVER_COLOR,
    },
};

const PersonalButton = ({children}) => {
    return (
        <Button
            className={`${styles.mainButton} ${styles[types[buttonType].style]}`}>
            {children}
        </Button>
    );
};

export default PersonalButton;