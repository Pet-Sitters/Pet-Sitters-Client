import { AboutPetSitter } from './AboutPetSitter/AboutPetSitter'
import CalculatorPage from './Calculator/CalculatorPage'

import SwiperArea from "./SwiperArea/SwiperArea.jsx";
import FaqArea from "./FAQ Area/FaqArea.jsx";

import { Game } from './Game/Game'
import { History } from './History/History'
import s from './Home.module.scss'
import { HowWork } from './HowWork/HowWork'
import { Map } from './Map/Map'
import { Promo } from './Promo/Promo'
import { Skills } from './Skills/Skills'

export function Home() {
	return (
		<section className={s.home}>
			<Promo />
			<CalculatorPage />
			<AboutPetSitter />
			<HowWork />

			<SwiperArea />
			<FaqArea />

			<History />
			<Skills />
			<Game />
			<Map />
		</section>
	)
}
