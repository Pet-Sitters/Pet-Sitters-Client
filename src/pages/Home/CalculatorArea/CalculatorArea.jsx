import CalculatorContainer from '../../../components/Calculator/CalculatorContainer/CalculatorContainer.jsx';
import styles from './CalculatorArea.module.scss';

const CalculatorArea = () => {
  return (
    <article id='calculator' className={styles.area}>
      <div className={styles.areaHeader}>
        <h1>Калькулятор</h1>
        <p className={styles.petsitter}>
          Petsitter экономит ваше время уже на этапе бронирования
        </p>
        <div>
          <p className={styles.title}>Стоимость</p>
          <p className={styles.title}>домашней передержки</p>
        </div>
        <p>
          Мы создали онлайн-калькулятор, чтобы вы рассчитали стоимость
          передержки
        </p>
      </div>
      <CalculatorContainer />
    </article>
  );
};

export default CalculatorArea;
