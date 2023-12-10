import {v4 as uuidv4} from "uuid";

export type UserType = {
    id: string
    fullName: string
    avatar: string
    followed: boolean
    location: {
        city: string
        country: string
    }

    status: string
}

export type UsersPageType = {
    users: UserType[]
}

const initiationState: UsersPageType = {
    users: [
        {
            id: uuidv4(), fullName: 'Murkiss',
            avatar: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/picture-575475-9b2fd.jpg',
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: ''
        },
        {
            id: uuidv4(), fullName: 'Kitty',
            followed: true,
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg',
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: ''
        },

        {
            id: uuidv4(), fullName: 'Miu',
            avatar: 'https://sneg.top/uploads/posts/2023-06/1687572964_sneg-top-p-avi-dlya-standoffa-koti-instagram-7.jpg',
            followed: false,
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: ''
        },

        {
            id: uuidv4(), fullName: 'Maxim',
            avatar: "https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg",
            followed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: 'I am a boss...'
        },


    ],
}

type FollowActionType = {
    type: "FOLLOW";
    userId: string;
};

type UnfollowActionType = {
    type: "UNFOLLOW";
    userId: string;
};

type SetUsersActionType = {
    type: "SET-USERS",
    users: UserType[]
}

export type UsersReducerActionType = UnfollowActionType | FollowActionType | SetUsersActionType


export const usersReducer = (
    state: UsersPageType = initiationState,
    action: UsersReducerActionType
): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.userId
                        ? { ...user, followed: true }
                        : user
                ),
            };

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.userId
                        ? { ...user, followed: false }
                        : user
                ),
            };

        case "SET-USERS":
            return  {
              ...state,
                users: [...state.users, ...action.users ]
            }

        default:
            return state;
    }
};


export const followAC = (userId: string): UsersReducerActionType => (
    {type: "FOLLOW", userId}
)

export const unfollowAC = (userId: string): UsersReducerActionType => (
    {type: "UNFOLLOW", userId}
)

export const setUsersAC = (users: UserType[]): UsersReducerActionType => ({
    type: "SET-USERS",
    users,
});

