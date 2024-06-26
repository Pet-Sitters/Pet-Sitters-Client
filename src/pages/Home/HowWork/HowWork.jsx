import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton.jsx';
import { OrderButton } from '../../../components/UI/OrderButton/OrderButton.jsx';
import links from '../../../router/links.js';
import s from './HowWork.module.scss';

export function HowWork() {
  return (
    <article id='howWork' className={s.howWork}>
      <div className={s.content}>
        <div className={s.header}>
          <h3 className={s.title}>
            Как работает <span>Petsitters</span>
          </h3>
          <p className={s.text}>
            Даже если ваш питомец шалит, <span>Petsitter придет на помощь!</span> <br />
            Мы найдем для него ситтера. У нас профессиональные догситтеры и кетситтеры
          </p>
        </div>
        <div className={s.wrapper}>
          <div className={s.cards}>
            <div className={s.item}>
              <div className={s.circle}>
                <img
                  src='/assets/icons/Home/bottle.svg'
                  alt='bottle'
                  className={s.bottle}
                />
              </div>
              <p className={s.description}>Оставьте заявку на передержку на сайте</p>
            </div>
            <div className={s.item}>
              <div className={s.circle}>
                <img src='/assets/icons/Home/face.svg' alt='face' className={s.face} />
              </div>
              <p className={s.description}>
                Выберите наиболее понравившегося ситтера из нашей команды
              </p>
            </div>
            <div className={s.item}>
              <div className={s.circle}>
                <img src='/assets/icons/Home/phone.svg' alt='phone' className={s.phone} />
              </div>
              <p className={s.description}>
                Оплатите передержку армянской или российской картой
              </p>
            </div>
            <div className={s.item}>
              <div className={s.circle}>
                <img src='/assets/icons/Home/dog.svg' alt='dog' className={s.dog} />
              </div>
              <p className={s.description}>
                Догситтер гуляет с вашей собакой, моет ему лапы после прогулки, дает корм
              </p>
            </div>
            <div className={s.item}>
              <div className={s.circle}>
                <img src='/assets/icons/Home/cat.svg' alt='cat' className={s.cat} />
              </div>
              <p className={s.description}>
                Кетситтер играет с вашим котом, кормит и следит за чистотой лотка
              </p>
            </div>
            <div className={s.item}>
              <div className={s.circle}>
                <img
                  src='/assets/icons/Home/together.svg'
                  alt='together'
                  className={s.together}
                />
              </div>
              <p className={s.description}>
                Во время передержки ситтер отправляет вам отчеты с вашим питомцем
              </p>
            </div>
          </div>
          <div className={s.buttons}>
            <OrderButton />

            <LinkButton buttonType='light' to={links.becameSitter}>
              Стать ситтером
            </LinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
