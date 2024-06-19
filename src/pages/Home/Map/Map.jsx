import LinkButton from '../../../components/UI/Buttons/LinkButton/LinkButton.jsx';
import { OrderButton } from '../../../components/UI/OrderButton/OrderButton.jsx';
import links from '../../../router/links.js';
import s from './Map.module.scss';

export function Map() {
  return (
    <article className={s.map}>
      <h3 className={s.title}>Карта ситтеров</h3>
      <p className={s.text}>Найти в своем районе</p>
      <div className={s.mapContainer}>
        <img src='/assets/images/Home/map.png' alt='map' />
      </div>
      <div className={s.buttons}>
        <LinkButton buttonType='green' to={links.account.myOrders}>
          Ситтеры
        </LinkButton>
        <OrderButton />
      </div>
    </article>
  );
}
