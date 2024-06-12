import { AboutPetSitter } from './AboutPetSitter/AboutPetSitter'
import CalculatorArea from './CalculatorArea/CalculatorArea.jsx'

import SwiperArea from "./SwiperArea/SwiperArea.jsx";
import FaqArea from "./FAQArea/FaqArea.jsx";

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
			<CalculatorArea />
			<AboutPetSitter />
			<HowWork />
			<History />
			<SwiperArea />
			<Skills />
			<Game />
			<Map />
			<FaqArea />
		</section>
	)
}
