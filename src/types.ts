import {UserApiProfileResponse} from "./api/usersAPI";

export type MessagesPageType = {
    messages: MessagesPropsType[]
    newMessageText: string
    dialogs: UsersPropsType[]
};

export type MessagesPropsType = {
    id: string
    message: string
}


export type UsersPropsType = {
    name: string
    id: string
}

export type PostsPropsType = {
    id: string
    name: string
    title: string
    post: string
    likeCount: number
    img: string
}
type FriendsPropsType = {
    id: string
    name: string
    avatar: string
}

export type sidebarPropsType = {
    friends: FriendsPropsType[]
    menuItems: MenuItemType[]
}
export type  MenuItemType = {
    path: string;
    label: string;
}

export type ProfilePageType = {
    posts: PostsPropsType[]
    newPostText: string,
    profile: UserApiProfileResponse
}