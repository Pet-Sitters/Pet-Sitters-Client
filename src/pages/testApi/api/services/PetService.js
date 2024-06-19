import $api from "../http";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../../core/store/auth/slice.js";

// const userData = useSelector(selectCurrentUser);
// const FIRST_USER_INDEX = 0;
// const id = userData.length > 0 ? userData[FIRST_USER_INDEX].id : null;


export default class PetService {
    static async fetchPets() {
        try {
            const token = localStorage.getItem('accessToken') ?? ''
            console.log(token)
            return $api.get('pet/pet_crud/',{
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
        } catch (e) {
            console.log(e)
        }
    }

    // static async postPet() {
    //     try {
    //         const token = localStorage.getItem('accessToken') ?? ''
    //         return $api.post('pet/pet_crud/', {
    //             headers: {
    //                 Authorization: `Token ${token}`,
    //             },
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
}