import {MinusOutlined, PlusOutlined} from '@ant-design/icons'
import {
    Button,
    ConfigProvider,
    Form,
    InputNumber,
    Radio,
    Slider,
    Switch,
} from 'antd'
import React, {useEffect, useState} from 'react'

import FormButton from '../../UI/Buttons/FormButton/FormButton.jsx'
import styles from './CalculatorForm.module.scss'

const MAIN_COLOR = '#C896FF'
const SECONDARY_COLOR = '#DBEF98';

const CalculatorForm = ({
                            marks,
                            prices,
                            dogsCount,
                            showWalks,
                            info,
                            initialValues,
                        }) => {
    const {
        DAY_PRICE,
        ONE_WALK_PRICE,
        ONE_ANIMAL_PRICE,
        FIRST_MEETING_PRICE,
        WITHOUT_OTHER_ANIMALS_PRICE,
    } = prices

    const [totalPrice, setTotalPrice] = useState(DAY_PRICE + ONE_ANIMAL_PRICE)
    const [animalsNumber, setAnimalsNumber] = useState(1)
    const [days, setDays] = useState(1)
    const [firstMeet, setFirstMeet] = useState(false)
    const [withoutOthers, setWithoutAnimals] = useState(false)
    // only for dogs
    const [walksPerDay, setWalksPerDay] = useState(0)

    const [inputInfo, setInputInfo] = useState(info)
    const [form] = Form.useForm()

    useEffect(() => {
        let price =
            (DAY_PRICE +
                animalsNumber * ONE_ANIMAL_PRICE +
                (showWalks ? walksPerDay * ONE_WALK_PRICE : 0)) *
            days +
            (firstMeet ? FIRST_MEETING_PRICE : 0) +
            (withoutOthers ? WITHOUT_OTHER_ANIMALS_PRICE : 0)
        setTotalPrice(price)
    }, [days, walksPerDay, animalsNumber, firstMeet, withoutOthers, showWalks])

    useEffect(() => {
        setAnimalsNumber(1)
    }, [showWalks])

    // Change the number of days
    const handleSliderChange = (value) => {
        setDays(+value)
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
                setWalksPerDay(walksPerDay + 1)
            }
        } else {
            if (animalsNumber < 10) {
                setAnimalsNumber(animalsNumber + 1)
            }
        }
    }

    // decrease dog walks number or cats number
    const handleDecrease = () => {
        if (showWalks) {
            if (walksPerDay > 0) {
                setWalksPerDay(walksPerDay - 1)
            }
        } else {
            if (animalsNumber > 1) {
                setAnimalsNumber(animalsNumber - 1)
            }
        }
    }

    // input for dogs walks or cats number
    const handleInputNumberChange = (value) => {
        if (showWalks) {
            if (value >= 0 || value <= 30) {
                setWalksPerDay(value)
            }
        } else {
            if (value >= 1 || value <= 10) {
                setAnimalsNumber(value)
            }
        }
    }

    // dogs number
    const handleRadioChange = (event) => {
        setAnimalsNumber(event.target.value)
    }

    const onFinish = (values) => {
        console.log('Received values of form:', values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        if (showWalks) {
            info = {
                name: 'walksPerDay',
                label: 'Количество выгулов в сутки',
                min: 0,
                max: 30,
            }
        } else {
            info = {
                name: 'animalsNumber',
                label: 'Количество кошек',
                min: 1,
                max: 10,
            }
        }
        setInputInfo(info)
    }, [showWalks])

    useEffect(() => {
        form.setFieldsValue({
            walksPerDay,
            animalsNumber,
        })
    }, [walksPerDay, animalsNumber, form])

    return (
        <Form
            className={styles.calc}
            name='calculator'
            initialValues={initialValues}
            layout='vertical'
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className={styles.sliderContainer}>
                <ConfigProvider
                    theme={{
                        components: {
                            Slider: {
                                handleColor: SECONDARY_COLOR,
                                handleActiveColor: SECONDARY_COLOR,
                                handleLineWidth: 5,
                                handleSize: 14,
                                handleSizeHover: 20,
                                handleColorDisabled: SECONDARY_COLOR,
                                dotSize: 14,
                                dotBorderColor: SECONDARY_COLOR,
                                dotActiveBorderColor: SECONDARY_COLOR,
                                trackBg: SECONDARY_COLOR,
                                trackHoverBg: SECONDARY_COLOR,
                                trackBgDisabled: MAIN_COLOR,
                                railBg: MAIN_COLOR,
                                railHoverBg: MAIN_COLOR,
                            },
                        },
                    }}
                >
                    <Form.Item
                        name='days'
                        label='Количество суток передержки'
                    >
                        <Slider
                            className={styles.slider}
                            min={1}
                            max={60}
                            marks={marks}
                            step={1}
                            tooltip={{open: true, color: SECONDARY_COLOR}}
                            onChange={handleSliderChange}
                        />
                    </Form.Item>
                </ConfigProvider>
            </div>

            <div className={styles.inputsAndSwitches}>
                <div className={styles.calc}>
                    <div className={styles.counts}>
                        <div className={styles.inputs}>
                            <Form.Item name={inputInfo.name}>
                                <div className={styles.inputGroup}>
                                    <Button
                                        className={styles.inputButton}
                                        icon={<MinusOutlined/>}
                                        onClick={handleDecrease}
                                    />
                                    <InputNumber
                                        className={styles.inputNumber}
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
                            <p className={styles.pLabel}>{inputInfo.label}</p>
                        </div>

                        {showWalks && (
                            <div className={styles.dogsCount}>
                                <Form.Item name='animalsNumber'>
                                    <Radio.Group
                                        className={styles.radioGroup}
                                        options={dogsCount}
                                        optionType='button'
                                        onChange={handleRadioChange}
                                    />
                                </Form.Item>
                                <p className={styles.pLabel}>Количество собак</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.swithces}>
                    <div className={styles.switchContainer}>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Switch: {
                                        colorPrimary: SECONDARY_COLOR,
                                        colorPrimaryHover: SECONDARY_COLOR,
                                    },
                                },
                            }}
                        >
                            <Form.Item
                                name='firstMeet'
                            >
                                <Switch onChange={handleFirstMeetChange}/>
                            </Form.Item>
                        </ConfigProvider>
                        <p className={styles.pLabel}>Первое знакомство</p>
                    </div>
                    <div className={styles.switchContainer}>
                        <Form.Item
                            name='withoutOthers'
                        >
                            <Switch onChange={handleWithoutOthersChange}/>
                        </Form.Item>
                        <p className={styles.pLabel}>Без других животных</p>
                    </div>
                    <p className={styles.switchInfo}>Ваша собака будет единственной
                        у ситтера</p>
                </div>
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryContainer}>
                    <p>
                        Цена от: <span className={styles.summaryValue}>{totalPrice}</span> руб
                    </p>
                </div>


                <div className={styles.buttons}>
                    <FormButton
                        className={styles.linkButton}
                        type='primary'
                        htmlType='submit'
                    >
                        Сохранить данные
                    </FormButton>

                    <FormButton
                        className={styles.linkButton}
                        type='primary'
                        htmlType='submit'
                    >
                        Ситтеры
                    </FormButton>
                </div>

            </div>
        </Form>
    )
}

export default CalculatorForm
