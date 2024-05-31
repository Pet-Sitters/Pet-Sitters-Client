import React, {useEffect, useState} from 'react';
import {Button, InputNumber, Radio, Slider, Switch} from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import styles from '../CalculatorContainer/CalculatorContainer.module.scss';

// Radio options
const options = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
];

const DAY_PRICE = 890;
const ONE_WALK_PRICE = 200;
const ONE_DOG_PRICE = 400;
const FIRST_MEETING_PRICE = 300;
const WITHOUT_OTHER_ANIMALS_PRICE = 250;

const DogCalculator = ({marks}) => {
    const [totalPrice, setTotalPrice] = useState(DAY_PRICE + ONE_DOG_PRICE);
    const [walksPerDay, setWalksPerDay] = useState(0);
    const [days, setDays] = useState(1);
    const [dogsNumber, setDogsNumber] = useState(1);
    const [firstMeet, setFirstMeet] = useState(false);
    const [withoutOthers, setWithoutAnimals] = useState(false);

    useEffect(() => {
        let price = (DAY_PRICE + walksPerDay * ONE_WALK_PRICE + dogsNumber * ONE_DOG_PRICE) * days +
            (firstMeet ? FIRST_MEETING_PRICE : 0) +
            (withoutOthers ? WITHOUT_OTHER_ANIMALS_PRICE : 0)
        setTotalPrice(price)
    }, [days, walksPerDay, dogsNumber, firstMeet, withoutOthers]);


    // Change the number of days
    const handleSliderChange = (value) => {
        setDays(+value);
    }

    const handleRadioChange = (event) => {
        setDogsNumber(event.target.value);
    }

    const handleIncreaseWalks = () => {
        if (walksPerDay < 30) {
            setWalksPerDay(walksPerDay + 1);
        }
    };

    const handleInputNumberChange = (value) => {
        if (value >= 0 || value <= 30)
        {
            setWalksPerDay(value)
        }
    }

    const handleDecreaseWalks = () => {
        if (walksPerDay > 0) {
            setWalksPerDay(walksPerDay - 1);
        }
    };

    const handleWithoutOthersChange = (value) => {
        setWithoutAnimals(value)
    }

    const handleFirstMeetChange = (value) => {
        setFirstMeet(value)
    }

    return (
        <>
            <div className={styles.calc}>
                <h1 className={styles.title}>Стоимость домашней передержки</h1>
                <h3>В стоимость одного дня передержки включено: кормление по расписанию, отчеты хозяину в чат, игры</h3>
                <div className={styles.sliderContainer}>
                    <p>Количество суток передержки</p>
                    <Slider
                        className={styles.slider}
                        min={1}
                        max={60}
                        defaultValue={1}
                        marks={marks}
                        step={1}
                        tooltip={{open: true, color: '#C896FF'}}
                        onChange={handleSliderChange}
                    />
                </div>

                <div className={styles.counts}>
                    <div>
                        <p>Количество выгулов в сутки</p>
                        <Button
                            className={styles.inputButton}
                            icon={<MinusOutlined />}
                            onClick={handleDecreaseWalks}
                        />
                        <InputNumber
                            value={walksPerDay}
                            min={0}
                            max={30}
                            onChange={handleInputNumberChange}
                        />
                        <Button
                            className={styles.inputButton}
                            icon={<PlusOutlined />}
                            onClick={handleIncreaseWalks}
                        />
                    </div>
                    <div>
                        <p>Количество собак</p>
                        <Radio.Group
                            options = {options}
                            optionType="button"
                            defaultValue={dogsNumber}
                            onChange={handleRadioChange}
                        />
                    </div>
                    <div className={styles.switchContainer}>
                        <Switch onChange={handleFirstMeetChange}/>
                        <p>Первое знакомство</p>
                    </div>
                    <div className={styles.switchContainer}>
                        <Switch onChange={handleWithoutOthersChange}/>
                        <p>Без других животных</p>
                    </div>
                </div>

                <div className={styles.summaryContainer}>
                    <p>
                        Цена от: <span className={styles.summaryValue}>{ totalPrice }</span>
                    </p>
                </div>

                <div>
                    <Button
                        type="primary"
                        className={styles.linkButton}
                        onClick={() => alert('Redirect to long/short form page')}
                    >
                        узнать точную цену
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DogCalculator;