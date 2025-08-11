import { defineStore } from "pinia";
import type { User } from "../type";

interface UserInfo {
    name:string;
    age:number;
    address:string;
    isAdmin:boolean;
}

interface State {
    userList: UserInfo[];
    user:UserInfo | null;
}

// export const useUserStore = defineStore('user', {
//     state: ():State => {
//         return{
//             // userList: [] as UserInfo[], 
//             // user: null as UserInfo|null
//             userList: [],
//             user: null
//         }
//     }
// })

export const useUserStore = defineStore('user', {
    state:() => ({
        userData: null as User[]|null
    }),
    actions: {
        async fetchUser(){
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                this.userData = await res.json() as User[];
            } catch (error) {
                console.error('error!');
            }
        }
    }

})