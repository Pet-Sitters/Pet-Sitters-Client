import React, {useEffect} from 'react';
import LongFormButton from "../../UI/Buttons/LongFormButton/LongFormButton.jsx";
import AddPet from "../AddPet/AddPet.jsx";

import s from './ChoosePet.module.scss'

import {Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import Pet from "../Pet/Pet.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    resetPetFormState,
    selectPetFormIsLoading,
    selectPetFormIsSuccess,
    selectPetsData
} from "../../../core/store/pet/slice.js";
import {getPetForm} from "../../../core/store/pet/thunk.js";

const ChoosePet = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectPetFormIsLoading);
    const isSuccess = useSelector(selectPetFormIsSuccess);
    const petsData = useSelector(selectPetsData);

    useEffect(() => {
        dispatch(getPetForm())
    }, [dispatch]);

    useEffect(() => {
        if (petsData === null) {
            dispatch(getPetForm());
        }
    }, [dispatch, petsData]);

    useEffect(() => {
        if (isSuccess) {
            dispatch(resetPetFormState());
        }
    }, [petsData, dispatch]);

    return (
        <div className={s.pets}>
            <div className={s.choose}>
                {isLoading ? (
                    <Space className={s.loading}><LoadingOutlined/></Space>
                ) : (
                    petsData && petsData.length > 0 ? (
                        petsData.map((pet) => <Pet
                            key={pet.id}
                            name={pet.name}
                            species={pet.species}
                            id={pet.id}
                        />)
                    ) : ''
                )}
                <AddPet/>
            </div>
            <div className={s.button}>
                <LongFormButton>Отправить</LongFormButton>
            </div>
        </div>
    );
};

export default ChoosePet;