import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";


const SitterSlider = () => {
    const slides = [
        { id: 1,
            title: 'Ситтеры',
            content: 'Ситтеры - важнейшая часть нашей команды. Каждый из них проходит тщательный отбор, заполняет анкету, проходит собеседование, обучение и специальную игру-тестирование.'
        },
        { id: 2,
            title: 'Ситтеры',
            content: 'Ситтеры - важнейшая часть нашей команды. Каждый из них проходит тщательный отбор, заполняет анкету, проходит собеседование, обучение и специальную игру-тестирование.'
        },
        { id: 3,
            title: 'Ситтеры',
            content: 'Ситтеры - важнейшая часть нашей команды. Каждый из них проходит тщательный отбор, заполняет анкету, проходит собеседование, обучение и специальную игру-тестирование.'
        },
    ];

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            pagination={ { el:'',clickable:true } }
            navigation={{
                nextEl: 'swiper-button-next'
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper-container'
        >
            <SwiperSlide>
                <div>
                    <h3>{slides[0].title}</h3>
                    <p>{slides[0].content}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h3>{slides[1].title}</h3>
                    <p>{slides[1].content}</p>
                </div>
            </SwiperSlide>

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    );
};

export default SitterSlider;