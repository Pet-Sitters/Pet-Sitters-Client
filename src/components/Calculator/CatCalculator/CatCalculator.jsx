import React, {useEffect, useState} from 'react';
import {Button, InputNumber, Slider, Switch} from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import styles from '../CalculatorContainer/CalculatorContainer.module.scss';

const DAY_PRICE = 1200;
const ONE_CAT_PRICE = 200;
const FIRST_MEETING_PRICE = 300;
const WITHOUT_OTHER_ANIMALS_PRICE = 250;

const CatCalculator = ({marks}) => {
    const [totalPrice, setTotalPrice] = useState(DAY_PRICE + ONE_CAT_PRICE);
    const [catsNumber, setCatsNumber] = useState(1);
    const [days, setDays] = useState(1);
    const [firstMeet, setFirstMeet] = useState(false);
    const [withoutOthers, setWithoutAnimals] = useState(false);

    useEffect(() => {
        let price = (DAY_PRICE + catsNumber * ONE_CAT_PRICE) * days +
            (firstMeet ? FIRST_MEETING_PRICE : 0) +
            (withoutOthers ? WITHOUT_OTHER_ANIMALS_PRICE : 0)

        setTotalPrice(price)
    }, [days, catsNumber, firstMeet, withoutOthers]);


    // Change the number of days
    const handleSliderChange = (value) => {
        setDays(+value);
    }

    const handleIncreaseWalks = () => {
        if (catsNumber < 10) {
            setCatsNumber(catsNumber + 1);
        }
    };

    const handleInputNumberChange = (value) => {
        if (value >= 0 || value <= 10)
        {
            setCatsNumber(value)
        }
    }

    const handleDecreaseWalks = () => {
        if (catsNumber > 0) {
            setCatsNumber(catsNumber - 1);
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
                        <p>Количество кошек</p>
                        <Button
                            className={styles.inputButton}
                            icon={<MinusOutlined />}
                            onClick={handleDecreaseWalks}
                        />
                        <InputNumber
                            value={catsNumber}
                            min={1}
                            max={10}
                            onChange={handleInputNumberChange}
                        />
                        <Button
                            className={styles.inputButton}
                            icon={<PlusOutlined />}
                            onClick={handleIncreaseWalks}
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

export default CatCalculator;