import { OrderButton } from '../../../components/UI/OrderButton/OrderButton.jsx';
import s from './AboutPetSitter.module.scss';
import { Motion } from './Motion/Motion';

export function AboutPetSitter() {
  return (
    <article id='about' className={s.aboutPetSitter}>
      <div className={s.overexposure}>
        <div className={s.overexposureDog}>
          <img
            src='/assets/images/Home/expDog.png'
            alt='dog'
            className={s.imageDog}
          />
          <h3 className={s.title}>Передержка собак</h3>
          <span className={s.accent}>Догситтер</span>
          <p className={s.text}>заберет вашего питомца к себе домой</p>
          <OrderButton />
        </div>
        <div className={s.overexposureCat}>
          <img
            src='/assets/images/Home/expCat.png'
            alt='dog'
            className={s.imageCat}
          />
          <h3 className={s.title}>Передержка кошек</h3>
          <span className={s.accent}>Кетситтер</span>
          <p className={s.text}>обеспечит комплексный уход за вашим питомцем</p>
          <OrderButton />
        </div>
      </div>
      <Motion />
    </article>
  );
}
