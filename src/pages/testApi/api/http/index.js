import axios from "axios";

const BASE_URL = "https://gateway.scan-interfax.ru/api/v1";

const $api = axios.create({
    withCredentials: false,
    baseURL: BASE_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;