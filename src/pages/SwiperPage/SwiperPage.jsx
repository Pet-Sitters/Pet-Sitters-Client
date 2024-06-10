import React from 'react';
import SwiperArea from "./SwiperArea/SwiperArea.jsx";
import PetsitterImg from "../../assets/petsitter.svg";

const SwiperPage = () => {
    return (
        <div>
            <h1>Преимущества нашего сервиса</h1>
            <p>Выбирайте</p><img src={PetsitterImg}/>
            <SwiperArea/>
        </div>
    );
};

export default SwiperPage;