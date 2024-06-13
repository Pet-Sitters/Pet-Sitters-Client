import { Carousel } from 'antd'
import { CarouselCard } from '../CarouselCard/CarouselCard'
import cardsData from '../data/cardDataCarousel.js'
import s from './CarouselContainer.module.scss'

const CarouselContainer = () => (
	<Carousel arrows dotPosition='left' infinite={false}>
		{cardsData.map((card) => (
			<div key={card.id} className={s.carousel}>
				<CarouselCard {...card} />
			</div>
		))}
	</Carousel>
)
export default CarouselContainer
