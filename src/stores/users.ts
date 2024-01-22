import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {User} from "@/common/model";
import _, {isNumber, isString} from "lodash";

export const usersStore = defineStore('users', () => {
    const users = ref<User[]>([])

    function addOrUpdate(user: User){
        let tmp: UnwrapRefSimple<User>|undefined = get(user)
        if(tmp) {
            tmp = _.merge(tmp, user)
        }else{
            users.value.push(user)
        }
    }

    function has(user: User){
        return !!users.value.find(v => /*v.id !== undefined && */(v.id === user.id || v.username === user.username))
    }

    /**
     * @param id UserID | Username
     */
    function get(id?: User|string|number){
        if(id instanceof User){
            return users.value.find(v => /*v.id !== undefined && */(v.id === id.id || v.username === id.username))
        }else if(isNumber(id)){
            return users.value.find(v => v.id === id)
        }else if(isString(id)){
            return users.value.find(v => v.username === id)
        }else{
            return users.value
        }
    }

    return { users, get, add: addOrUpdate, addOrUpdate, has }
})
