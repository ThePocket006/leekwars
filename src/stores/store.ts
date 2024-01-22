import { defineStore } from 'pinia'
import {usersStore} from "@/stores/users";

export const appStore = defineStore('$store', () => {
    const $users = usersStore()

    return { $users }
})
