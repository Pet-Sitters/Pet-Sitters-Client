import { Footer } from '../../components/Footer/Footer'
import { AboutPetSitter } from './AboutPetSitter/AboutPetSitter'
import CalculatorArea from './CalculatorArea/CalculatorArea.jsx'
import FaqArea from './FAQArea/FaqArea.jsx'
import Feedback from './Feedback/Feedback'
import { Game } from './Game/Game'
import { History } from './History/History'
import s from './Home.module.scss'
import { HowWork } from './HowWork/HowWork'
import { Map } from './Map/Map'
import { Promo } from './Promo/Promo'
import { Questions } from './Questions/Questions'
import { Skills } from './Skills/Skills'
import SwiperArea from './SwiperArea/SwiperArea.jsx'

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
			<Feedback />
			<FaqArea />
			<Questions />
			<Footer />
		</section>
	)
}
