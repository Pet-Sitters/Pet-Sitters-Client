import { ConfigProvider, Radio } from 'antd';
import { useState } from 'react';

import CalculatorForm from '../CalculatorForm/CalculatorForm.jsx';
import styles from './CalculatorContainer.module.scss';

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
];

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
    WITHOUT_OTHER_ANIMALS_PRICE: 250,
  },
  cat: {
    DAY_PRICE: 1200,
    ONE_WALK_PRICE: 0,
    ONE_ANIMAL_PRICE: 200,
    FIRST_MEETING_PRICE: 300,
    WITHOUT_OTHER_ANIMALS_PRICE: 250,
  },
};

const info = {
  name: 'walksPerDay',
  label: 'Количество выгулов в сутки',
  min: 0,
  max: 30,
};

const CalculatorContainer = () => {
  const [selectedCalc, setSelectedCalc] = useState('dog');

  const handleCalculatorChange = (event) => {
    setSelectedCalc(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcHeader}>
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                controlHeight: 50,
                buttonColor: '#000000',
                colorPrimary: '#C896FF',
              },
            },
          }}>
          <Radio.Group
            defaultValue={selectedCalc}
            // options={options}
            onChange={handleCalculatorChange}
            optionType='button'
            className={styles.radioGroup}>
            <Radio
              className={`${styles.radio} ${styles.firstRadio}`}
              value={options[0].value}>
              {options[0].label}
            </Radio>
            <Radio
              className={`${styles.radio} ${styles.secondRadio}`}
              value={options[1].value}>
              {options[1].label}
            </Radio>
          </Radio.Group>
        </ConfigProvider>
        <p>
          В стоимость  дня передержки включено: кормление, прогулка
          в соответствии с регламентом, игра с питомцем и отчеты хозяину
        </p>
      </div>

      <CalculatorForm
        marks={marks}
        prices={selectedCalc === 'dog' ? prices.dog : prices.cat}
        dogsCount={selectedCalc === 'dog' ? dogs : []}
        showWalks={selectedCalc === 'dog' ? true : undefined}
        info={info}
      />
    </div>
  );
};

export default CalculatorContainer;
