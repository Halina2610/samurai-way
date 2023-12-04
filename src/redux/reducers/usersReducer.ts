import {v4 as uuidv4} from "uuid";


type UserType = {
    id: string
    fullName: string
    avatar: string
    fallowed: boolean
    location: {
        country: string
        city: string
    }

    status: string
}

type UsersPageType = {
    users: UserType[]
}

const initiationState: UsersPageType = {
    users: [
        {
            id: uuidv4(), fullName: 'Murkiss',
            avatar: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/picture-575475-9b2fd.jpg',
            fallowed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: ''
        },
        {
            id: uuidv4(), fullName: 'Kitty',
            fallowed: true,
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
            fallowed: true,
            location: {
                city: 'Minsk',
                country: 'Belarus',
            },
            status: ''
        },

    ],
}

export type UsersReducerActionType = {}


export const usersReducer = (
    state: UsersPageType = initiationState,
    action: UsersReducerActionType
) => {

};

