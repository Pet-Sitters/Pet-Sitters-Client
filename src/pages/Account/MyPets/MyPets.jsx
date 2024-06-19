import {LoadingOutlined} from "@ant-design/icons";
import {Space} from "antd";
import {AddPetCard} from '../../../components/UI/AddPetCard/AddPetCard.jsx'
import s from './MyPets.module.scss'
import {useEffect} from "react";
import PetCard from "../../../components/UI/PetCard/PetCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    selectPetFormIsError,
    selectPetFormIsLoading,
    selectPetFormIsSuccess,
    selectPetsData
} from "../../../core/store/pet/slice.js";
import {getPetForm} from "../../../core/store/pet/thunk.js";
import {selectCurrentUser} from "../../../core/store/auth/slice.js";


export function MyPets() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectPetFormIsLoading);
    const isSuccess = useSelector(selectPetFormIsSuccess);
    const isError = useSelector(selectPetFormIsError)
    const petsData = useSelector(selectPetsData);
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        dispatch(getPetForm())
    }, [dispatch]);

    return (
        <div className={s.myPets_container}>
            {isLoading ? (
                <Space className={s.loading}><LoadingOutlined/></Space>

            ) : (
                isSuccess && petsData && petsData.length > 0 ? (
                    petsData.map((pet) => <PetCard key={pet.id} name={pet.name} species={pet.species} id={pet.id} />)
                ) : (
                    <div> Вы пока не добавили ни одного животного </div>
                )
            )}
            <AddPetCard/>
        </div>
    )
}
