import { ClientProfileCard } from '../../components/UIcomponents/ClientProfileCard/ClientProfileCard'
import { OrderSittingCard } from '../../components/UIcomponents/OrderSittingCard/OrderSittingCard'
import s from './promoPage.module.scss'
export function PromoPage() {
	return (
		<div className={s.container}>
			<div>личный кабинет - оформить заказ</div>
			<OrderSittingCard />
			<ClientProfileCard />
		</div>
	)
}
