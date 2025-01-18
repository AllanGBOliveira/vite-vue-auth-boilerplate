import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugins/axios.config';

interface User {
    token: string;
    name: string;
    email: string;
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User>()

    const token = computed(() => (user.value?.token) ?? false);

    function setUser(userData: User) {
        user.value = userData;

        localStorage.setItem(import.meta.env.VITE_TOKEN_LABEL, `${token.value}`)
    }

    function setToken() {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_LABEL) || '';

        user.value = { token, name: user.value?.name ?? '', email: user.value?.email ?? '' };
    }

    async function login(email: string, password: string) {
        try {
            const data = await api.post('/posts', {
                email,
                password,
                token: 'este-token-nao-deve-ser-enviado-esta-aqui-apenas-para-o-retorno-do-json-placeholder'
            });

            setUser(data.data);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    return { user, token, login, setToken }
})
