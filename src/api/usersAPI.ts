import {instance} from "./utils/instance";

export const usersAPI = {
    fetchUsers(page: number = 1, count: number = 10, term: string = '', friend: boolean | undefined = undefined): Promise<UsersDomainType> {
        const params = {
            page,
            count,
            term,
            friend
        };

        return instance.get<UsersDomainType>('/users', { params })
            .then(response => response.data);
    },
    getProfileUsers (userId: number) {
        return instance.get<UserApiProfileResponse>(`/profile/${userId}`)
    },
    follow(userId: number) {
        return instance.post<FollowType>(`/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowType>(`/follow/${userId}`)
    },
};


//types
export type UserServerType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    followingInProgress: boolean
}


export type UserApiProfileResponse = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    };
    photos: {
        small: string | null
        large: string | null
    };
};


export type UsersDomainType = {
    items: UserServerType[];
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};




type FollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

