import React, { useState } from 'react';
import {ConfigProvider, Radio} from 'antd';

import DogCalculator from "../DogCalculator/DogCalculator.jsx";
import CatCalculator from "../CatCalculator/CatCalculator.jsx";

import styles from "./CalculatorContainer.module.scss";

const MAIN_COLOR = '#C896FF';
const HOVER_COLOR = '#ceb5ec';

// Slider marks
const marks = {
    1: '1',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
};

const options = [
    { label: 'Собаки', value: 'dog' },
    { label: 'Кошки', value: 'cat' },
]

const CalculatorContainer = () => {
    const [selectedCalc, setSelectedCalc] = useState('dog');

    const handleCalculatorChange = (event) => {
        setSelectedCalc(event.target.value)
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Slider: {
                        handleColor: MAIN_COLOR,
                        handleActiveColor: MAIN_COLOR,
                        dotBorderColor: MAIN_COLOR,
                        dotActiveBorderColor: MAIN_COLOR,
                        trackBg: MAIN_COLOR,
                        trackHoverBg: MAIN_COLOR,
                    },
                    Button: {
                        colorPrimary: MAIN_COLOR,
                        colorPrimaryHover: HOVER_COLOR,
                    },
                    InputNumber: {
                        colorPrimary: MAIN_COLOR,
                        colorPrimaryHover: MAIN_COLOR,
                    },
                    Switch: {
                        colorPrimary: MAIN_COLOR,
                        colorPrimaryHover: HOVER_COLOR,
                    },
                    Radio: {
                        colorPrimary: MAIN_COLOR,
                        colorPrimaryHover: HOVER_COLOR,
                        colorPrimaryActive: MAIN_COLOR,
                    },
                },
            }}
        >
        <div className={styles.container}>
            <Radio.Group
                defaultValue={selectedCalc}
                options={options}
                onChange={handleCalculatorChange}
                optionType="button"
                className={styles.radioGroup}
            />
            {selectedCalc === 'dog' ? <DogCalculator marks = {marks}/> : <CatCalculator marks = {marks}/>}
        </div>
        </ConfigProvider>
    );
};

export default CalculatorContainer;