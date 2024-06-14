import $api from "../http";


export default class PetService {
    static async fetchPets() {
        try {
            const token = localStorage.getItem('accessToken') ?? ''
            return $api.get('pet/pet_crud/',{
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
        } catch (e) {
            console.log(e)
        }
    }

    static async getUser() {
        try {
            const token = localStorage.getItem('accessToken') ?? ''
            return $api.get('auth/users/', {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
        } catch (e) {
            console.log(e)
        }
    }
}