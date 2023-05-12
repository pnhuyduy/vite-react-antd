import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
})

axiosInstance.interceptors.request.use((config) => {
    return config
})

axiosInstance.interceptors.response.use((response) => {
    if (response.data) return response.data

    return response
})