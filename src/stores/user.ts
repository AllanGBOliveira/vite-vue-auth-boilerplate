import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
    token: string;
    name: string;
    email: string;
}

export const useUserStore = defineStore('user', () => {
    //   const count = ref(0)
    //   const doubleCount = computed(() => count.value * 2)
    //   function increment() {
    //     count.value++
    //   }

    const user = ref<User>()

    const token = computed(() => user.value?.token ?? false)

    return { user, token }
})
