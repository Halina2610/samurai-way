import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'bdcfda08-91c6-49eb-9714-5d59d1951986',
    },
});

export type UsersServerType = {
    users: {
        id: number
        name: string
        status: string | null
        uniqueUrlName: string | null
        followed: boolean
        photos: {
            small: string | null
            large: string | null
        }
    }
}

export type UsersDomainType = {
    items: Array<UsersServerType>
    error: string | null
    totalCount: number
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
    fieldsErrors?: Array<string>
}


export const usersApi = {
    getUsers() {
        return instance.get<UsersDomainType>('users');
    },

}


usersApi.getUsers()
    .then(response => {
        return response.data.items;
    })
    .catch(error => {
        console.log(error.messages)
    });