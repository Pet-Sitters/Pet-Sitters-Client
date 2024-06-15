import {AddPetCard} from '../../../components/UI/AddPetCard/AddPetCard.jsx'
import s from './MyPets.module.scss'
import {useEffect, useState} from "react";
import PetService from "../../testApi/api/services/PetService.js";
import PetCard from "../../../components/UI/PetCard/PetCard.jsx";

export function MyPets() {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await PetService.fetchPets();
                setPets(response.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading pets: {error.message}</div>;
    }


    return (
        <div className={s.myPets_container}>
            {pets.map((pet) => (
                <PetCard key={pet.id} name={pet.name}/>
            ))}
            <AddPetCard/>
        </div>
    )
}
