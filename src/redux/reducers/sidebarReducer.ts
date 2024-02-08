let initiationState: sidebarPropsType = {
        menuItems: [
            {path: '/profile', label: 'Profile'},
            {path: '/dialogs', label: 'Message'},
            {path: '/users', label: 'Find users'},
            {path: '/news', label: 'News'},
            {path: '/music', label: 'Music'},
            {path: '/settings', label: 'Settings'},
        ],
        friends: []
    }
export const sidebarReducer = (state: sidebarPropsType = initiationState, action: SidebarActionType) => {

    return state;
}


//types
export type SidebarActionType = {}

export type sidebarPropsType = {
    friends: FriendsPropsType[]
    menuItems: MenuItemType[]
}

export type  MenuItemType = {
    path: string;
    label: string;
}

type FriendsPropsType = {
    id: string
    name: string
    avatar: string
}
