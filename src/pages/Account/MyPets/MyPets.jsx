import {AddPetCard} from '../../../components/UI/AddPetCard/AddPetCard.jsx'
import s from './MyPets.module.scss'
import {useEffect, useState} from "react";
import PetService from "../../testApi/api/services/PetService.js";
import PetCard from "../../../components/UI/PetCard/PetCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectPetFormIsLoading, selectPetFormIsSuccess} from "../../../core/store/pet/slice.js";
import {getPetForm} from "../../../core/store/pet/thunk.js";
import {Loading3QuartersOutlined} from "@ant-design/icons";


export function MyPets() {

    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectPetFormIsLoading);
    const isSuccess = useSelector(selectPetFormIsSuccess);


    useEffect(() => {
        console.log('loading data')
        dispatch(getPetForm)
    }, []);


    return (
        <div className={s.myPets_container}>
            {isLoading ? <Loading3QuartersOutlined/> : (
                <div>Done</div>
                // {
                //     pets.map((pet) => (
                //         <PetCard key={pet.id} name={pet.name}/>
                //     ))
                // }
            )
            }

            <AddPetCard/>
        </div>
    )
}
