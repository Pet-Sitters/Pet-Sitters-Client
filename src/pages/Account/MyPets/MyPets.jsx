import {AddPetCard} from '../../../components/UI/AddPetCard/AddPetCard.jsx'
import s from './MyPets.module.scss'
import {useEffect, useState} from "react";
import PetCard from "../../../components/UI/PetCard/PetCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    selectPetFormIsError,
    selectPetFormIsLoading,
    selectPetFormIsSuccess,
    selectPetsData
} from "../../../core/store/pet/slice.js";
import {getPetForm} from "../../../core/store/pet/thunk.js";
import {Loading3QuartersOutlined} from "@ant-design/icons";
import {selectAuthIsSuccess, selectCurrentUser} from "../../../core/store/auth/slice.js";


export function MyPets() {
    const[pets, setPets] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectPetFormIsLoading);
    const isSuccess = useSelector(selectPetFormIsSuccess);
    const isError = useSelector(selectPetFormIsError)
    const petsData = useSelector(selectPetsData);
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        if(currentUser){
            dispatch(getPetForm())
        }
    }, [currentUser]);

    return (
        <div className={s.myPets_container}>
            {isLoading ? (
                <Loading3QuartersOutlined/>
            ) : (
                isSuccess ? (
                    petsData.map((pet) => <PetCard key={pet.id} name={pet.name}/>)
                ) : (
                    <div> Вы пока не добавили ни одного животного </div>
                )
            )}
            <AddPetCard/>
        </div>
    )
}
