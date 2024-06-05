import React, { useState } from 'react';
import { Radio } from 'antd';

import styles from './CalculatorContainer.module.scss';

import CalculatorLogic from "../CalculatorLogic/CalculatorLogic.jsx";

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

// cat or dog calculator
const options = [
    { label: 'Собаки', value: 'dog' },
    { label: 'Кошки', value: 'cat' },
]

// Dogs count
const dogs = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
];

// prices for dogs and cats
const prices = {
    dog: {
        DAY_PRICE: 890,
        ONE_WALK_PRICE: 200,
        ONE_ANIMAL_PRICE: 400,
        FIRST_MEETING_PRICE: 300,
        WITHOUT_OTHER_ANIMALS_PRICE: 250
    },
    cat: {
        DAY_PRICE: 1200,
        ONE_WALK_PRICE: 0,
        ONE_ANIMAL_PRICE: 200,
        FIRST_MEETING_PRICE: 300,
        WITHOUT_OTHER_ANIMALS_PRICE: 250
    }
}

let info = {
    name: "walksPerDay",
    label: "Количество выгулов в сутки",
    min: 0,
    max: 30
};

const CalculatorContainer = () => {
    const [selectedCalc, setSelectedCalc] = useState('dog');

    const handleCalculatorChange = (event) => {
        setSelectedCalc(event.target.value)
    }

    return (
        <div className={styles.container}>
            <Radio.Group
                defaultValue={selectedCalc}
                options={options}
                onChange={handleCalculatorChange}
                optionType="button"
                className={styles.radioGroup}
            />
            <CalculatorLogic marks = {marks}
                             prices = {selectedCalc === 'dog' ? prices.dog : prices.cat}
                             dogsCount = {selectedCalc === 'dog' ? dogs : []}
                             showWalks = {selectedCalc === 'dog' ? true : undefined}
                             info = {info}
            />
        </div>
    );
};

export default CalculatorContainer;