import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "bdcfda08-91c6-49eb-9714-5d59d1951986",
    },
});

export type UserServerType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean
    followingInProgress: boolean
}

export type UsersDomainType = {
    items: UserServerType[];
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
};



export const usersApi = {
    getUsers(page: number = 1, count: number = 10, term: string = '', friend: boolean | undefined = undefined): Promise<UsersDomainType> {
        const params = {
            page,
            count,
            term,
            friend
        };

        return instance.get('/users', { params })
            .then(response => response.data);
    },
};
