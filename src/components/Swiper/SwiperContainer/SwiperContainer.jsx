import React, {useEffect, useState} from 'react';

import SwiperCard from "../SwiperCard/SwiperCard.jsx";

import cardsData from "../data/cardsData.js";

import styles from "./SwiperContainer.module.scss";
import LeftArrow from "./img/left.svg"
import RightArrow from "./img/right.svg"

const SwiperContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSlidingLeft, setIsSlidingLeft] = useState(false);

    const getCardStyle = (index) => {
        const totalCards = cardsData.length;
        const offsetIndex = (index - currentIndex + totalCards) % totalCards;
        const zIndex = totalCards - offsetIndex;
        const offset = offsetIndex * 60;
        return {
            zIndex,
            transform: `translateX(${offset}px)`,
            animation: isSlidingLeft && offsetIndex === 0 ? `${styles.slideLeft} 0.5s forwards` : 'none',
        };
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
    };


    return (
        <div className={styles.container}>
            <div className={styles.stackContainer}>
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className={styles.cardWrapper}
                        style={getCardStyle(index)}
                    >
                        <SwiperCard {...card} />
                    </div>
                ))}
            </div>
            <div className={styles.navigation}>
                <button onClick={prevCard} className={styles.navButton}><img src={LeftArrow}/></button>
                <button onClick={nextCard} className={styles.navButton}><img src={RightArrow}/></button>
            </div>
        </div>
    );
};

export default SwiperContainer;