import { ImageCheckbox } from '../../../components/CheckBoxFilter/CheckBoxFilter';
import { OrderButton } from '../../../components/UI/OrderButton/OrderButton';
import s from './Filter.module.scss';

export function Filter() {
  return (
    <article className={s.filter}>
      <div className={s.animalType}>
        <ImageCheckbox imageSrc='/assets/icons/Sitters/dog.svg' label='dog' />
        <ImageCheckbox imageSrc='/assets/icons/Sitters/cat.svg' label='cat' />
      </div>
      <div className={s.inputContainer}>
        <div className={s.wrapperInputCity}>
          <label htmlFor='city' className={s.labelCity}>
            город
          </label>
          <input type='text' name='city' className={s.inputCity} />
        </div>
        <div className={s.wrapperCheckbox}>
          <input type='checkbox' id='rating' name='rating' className={s.checkboxRating} />
          <label htmlFor='rating' className={s.labelRating}></label>
          <span className={s.labelText}>с высоким рейтингом</span>
        </div>
        <div className={s.wrapperCheckbox}>
          <input
            type='checkbox'
            id='feedback'
            name='feedback'
            className={s.checkboxFeedback}
          />
          <label htmlFor='feedback' className={s.labelFeedback}></label>
          <span className={s.labelText}>с отзывами</span>
        </div>
      </div>
      <div className={s.buttonContainer}>
        <OrderButton />
      </div>
    </article>
  );
}
