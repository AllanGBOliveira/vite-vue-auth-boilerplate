import axios from "axios";
import router from "@/router";
import { useUserStore } from "@/stores/user";

const { token } = useUserStore();


axios.defaults.baseURL = 'sua-api';

axios.interceptors.request.use(config => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            router.push({
                name: 'login'
            });
        }
        return Promise.reject(error);
    }
);

