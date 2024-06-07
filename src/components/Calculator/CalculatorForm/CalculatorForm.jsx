import {Button, ConfigProvider, Form, InputNumber, Radio, Slider, Switch} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";

import styles from "./CalculatorForm.module.scss";
import FormButton from "../../UI/FormButton/FormButton.jsx";

const MAIN_COLOR = '#C896FF';

const CalculatorForm = ({marks, prices, dogsCount, showWalks, info, initialValues}) => {
    const { DAY_PRICE, ONE_WALK_PRICE, ONE_ANIMAL_PRICE, FIRST_MEETING_PRICE,
        WITHOUT_OTHER_ANIMALS_PRICE } = prices;

    const [totalPrice, setTotalPrice] = useState(DAY_PRICE + ONE_ANIMAL_PRICE);
    const [animalsNumber, setAnimalsNumber] = useState(1);
    const [days, setDays] = useState(1);
    const [firstMeet, setFirstMeet] = useState(false);
    const [withoutOthers, setWithoutAnimals] = useState(false);
    // only for dogs
    const [walksPerDay, setWalksPerDay] = useState(0);

    const [inputInfo, setInputInfo] = useState(info)
    const [form] = Form.useForm();

    useEffect(() => {
        let price = (DAY_PRICE + animalsNumber * ONE_ANIMAL_PRICE +
                (showWalks ? walksPerDay * ONE_WALK_PRICE : 0)) * days +
            (firstMeet ? FIRST_MEETING_PRICE : 0) +
            (withoutOthers ? WITHOUT_OTHER_ANIMALS_PRICE : 0)
        setTotalPrice(price)
    }, [days, walksPerDay, animalsNumber, firstMeet, withoutOthers, showWalks]);


    useEffect(() => {
        setAnimalsNumber(1);
    }, [showWalks])

    // Change the number of days
    const handleSliderChange = (value) => {
        setDays(+value);
    }

    // with or without other animals
    const handleWithoutOthersChange = (value) => {
        setWithoutAnimals(value)
    }

    // first meeting
    const handleFirstMeetChange = (value) => {
        setFirstMeet(value)
    }

    // increase dog walks number or cats number
    const handleIncrease = () => {
        if (showWalks) {
            if (walksPerDay < 30) {
                setWalksPerDay(walksPerDay + 1);
            }
        } else {
            if (animalsNumber < 10) {
                setAnimalsNumber(animalsNumber + 1);
            }
        }
    };

    // decrease dog walks number or cats number
    const handleDecrease = () => {
        if (showWalks) {
            if (walksPerDay > 0) {
                setWalksPerDay(walksPerDay - 1);
            }
        } else {
            if (animalsNumber > 1) {
                setAnimalsNumber(animalsNumber - 1);
            }
        }
    };

    // input for dogs walks or cats number
    const handleInputNumberChange = (value) => {
        if (showWalks) {
            if (value >= 0 || value <= 30)
            {
                setWalksPerDay(value)
            }
        } else {
            if (value >= 1 || value <= 10)
            {
                setAnimalsNumber(value)
            }
        }

    }

    // dogs number
    const handleRadioChange = (event) => {
        setAnimalsNumber(event.target.value);
    }


    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (showWalks) {
            info = {
                name: "walksPerDay",
                label: "Количество выгулов в сутки",
                min: 0,
                max: 30
            }
        } else {
            info = {
                name: "animalsNumber",
                label: "Количество кошек",
                min: 1,
                max: 10
            }
        }
        setInputInfo(info)
    }, [showWalks])

    useEffect(() => {
        form.setFieldsValue({
            walksPerDay,
            animalsNumber
        });
    }, [walksPerDay, animalsNumber, form]);

    return (
        <Form
            className={styles.calc}
            name="calculator"
            initialValues={initialValues}
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h1 className={styles.title}>Стоимость домашней передержки</h1>
            <h3>В стоимость одного дня передержки включено: кормление по расписанию, отчеты хозяину в чат, игры</h3>

            <Form.Item
                name="days"
                label="Количество суток передержки"
                className={styles.sliderContainer}
            >
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
                        },
                    }}
                >
                    <Slider
                        className={styles.slider}
                        min={1}
                        max={60}
                        marks={marks}
                        step={1}
                        tooltip={{ open: true, color: '#C896FF' }}
                        onChange={handleSliderChange}
                    />
                </ConfigProvider>
            </Form.Item>

            <div className={styles.calc}>
                <div className={styles.counts}>
                    <Form.Item
                        name={inputInfo.name}
                        label={inputInfo.label}
                    >
                        <div className={styles.inputGroup}>
                            <Button
                                className={styles.inputButton}
                                icon={<MinusOutlined/>}
                                onClick={handleDecrease}
                            />
                            <InputNumber
                                controls={false}
                                keyboard={false}
                                value={showWalks ? walksPerDay : animalsNumber}
                                min={inputInfo.min}
                                max={inputInfo.max}
                                onChange={handleInputNumberChange}
                            />

                            <Button
                                className={styles.inputButton}
                                icon={<PlusOutlined/>}
                                onClick={handleIncrease}
                            />
                        </div>
                    </Form.Item>
                    {showWalks && (
                        <Form.Item
                            name="animalsNumber"
                            label="Количество собак"
                        >
                            <Radio.Group
                                options={dogsCount}
                                optionType="button"
                                onChange={handleRadioChange}
                            />
                        </Form.Item>
                    )}
                </div>
            </div>

            <div className={styles.swithces}>
                <Form.Item
                    label="Первое знакомство"
                    name="firstMeet"
                    className={styles.switchContainer}
                >
                    <Switch onChange={handleFirstMeetChange} />
                </Form.Item>
                <Form.Item
                    label="Без других животных"
                    name="withoutOthers"
                    className={styles.switchContainer}
                >
                    <Switch onChange={handleWithoutOthersChange} />
                </Form.Item>
            </div>

            <div className={styles.summaryContainer}>
                <p>
                    Цена от: <span className={styles.summaryValue}>{totalPrice}</span>
                </p>
            </div>

            <FormButton
                className={styles.linkButton}
                type='primary'
                htmlType='submit'
            >
                Сохранить данные
            </FormButton>

        </Form>
    );
};

export default CalculatorForm;