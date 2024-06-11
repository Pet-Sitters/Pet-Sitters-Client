import { AboutPetSitter } from './AboutPetSitter/AboutPetSitter'
import CalculatorPage from './Calculator/CalculatorPage'
import s from './Home.module.scss'
import { HowWork } from './HowWork/HowWork'
import { Promo } from './Promo/Promo'
import SwiperArea from "./SwiperArea/SwiperArea.jsx";

export function Home() {
	return (
		<section className={s.home}>
			<Promo />
			<CalculatorPage />
			<AboutPetSitter />
			<HowWork />
			<SwiperArea />
		</section>
	)
}
