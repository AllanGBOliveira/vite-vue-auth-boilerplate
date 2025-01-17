<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
const { login } = useUserStore();

const form = ref({
    email: '',
    password: ''
})

async function submitForm() {
    if(!form.value.email || !form.value.password) {
        return
    }
    

    try {
        await login(form.value.email, form.value.password);
        router.push({
            name: 'home'
        })
    } catch (error: any) {
        throw new Error(error.message);

    }
}
</script>

<template>
    <main>
        <form novalidate @submit.prevent="submitForm">
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="form.email" autocomplete="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" v-model="form.password"
                    autocomplete="current-password">
            </div>

            <div>
                <button type="submit">
                    Login
                </button>
            </div>
        </form>
    </main>
</template>