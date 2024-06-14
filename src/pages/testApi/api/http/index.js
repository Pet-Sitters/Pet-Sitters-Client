import axios from "axios";

const BASE_URL = "http://89.223.123.5/";

const $api = axios.create({
    withCredentials: false,
    baseURL: BASE_URL
})


// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

export default $api;