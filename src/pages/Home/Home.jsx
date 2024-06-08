import CalculatorPage from './Calculator/CalculatorPage'
import s from './Home.module.scss'
import { Promo } from './Promo/Promo'

export function Home() {
	return (
		<section className={s.home}>
			<Promo />
			<CalculatorPage />
		</section>
	)
}
