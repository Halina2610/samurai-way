import {instance} from "./utils/instance";

export const authApi = {

    getAuthMe() {
        return instance.get<AuthMeType>(`/auth/me/`)
    }

};


//types
type AuthMeType ={
    resultCode: number
    messages: string[],
    data: UsersAuthDataType
}

export type UsersAuthDataType = {
    id: number
    email: string
    login: string
}