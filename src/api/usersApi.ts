import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "bdcfda08-91c6-49eb-9714-5d59d1951986",
    },
});

export type UserServerType = {
    id: string;
    name: string;
    status: string | undefined;
    uniqueUrlName: string | undefined;
    followed: boolean;
    photos: {
        small: string | undefined;
        large: string | undefined;
    };
};


export type UsersServerType = {
    users: UserServerType[];
};

export type UsersDomainType = {
    items: UserServerType[];
    error?: string | null;
    totalCount: number;
};

type ResponseType<D = {}> = {
    resultCode: number;
    messages: string[];
    data: D;
    fieldsErrors?: string[];
};

export const usersApi = {
    getUsers() {
        return instance.get<UsersDomainType>("/users").then((response) => response.data);
    },
};
