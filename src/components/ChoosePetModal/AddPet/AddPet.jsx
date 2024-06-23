import React from 'react';
import s from "./AddPet.module.scss";

const AddPet = () => {
    return (
        <div className={s.card}>
            <div className={s.photoContainer}></div>
            <div>
                <h1 className={s.par}>Добавить</h1>
                <h1 className={s.par}>питомца</h1>
            </div>
        </div>
    );
};

export default AddPet;