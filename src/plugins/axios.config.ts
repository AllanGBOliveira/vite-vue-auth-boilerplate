import axios from 'axios';
import router from '@/router';
import { useUserStore } from '@/stores/user';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(config => {
    const { token } = useUserStore();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            router.push({ name: 'login' });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;