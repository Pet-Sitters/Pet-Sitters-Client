import React from 'react';
import {useDispatch} from "react-redux";
import {deletePet} from "../../../core/store/pet/thunk.js";

import catImg from '/assets/images/account/animals/pets/cat.svg'
import dogImg from '/assets/images/account/animals/pets/dog.svg'

import s from "./Pet.module.scss";

const Pet = ({id, name, species}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePet(id));
    }

    return (
        <div className={s.card}>
            <div className={s.imgCont}>
                {species === 'CAT'
                    ? (
                        <img src={catImg} alt="cat"/>
                    ) : (
                        <img src={dogImg} alt="dog"/>
                    )
                }
            </div>

            <h3 className={s.title}>{name}</h3>
        </div>
    );
};

export default Pet;