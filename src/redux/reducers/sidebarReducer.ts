import {v4 as uuidv4} from "uuid";
import {sidebarPropsType} from "../../types";


export type SidebarActionType = {

}

let initiationState: sidebarPropsType = {
        menuItems: [
            {path: '/profile', label: 'Profile'},
            {path: '/dialogs', label: 'Message'},
            {path: '/users', label: 'Find users'},
            {path: '/news', label: 'News'},
            {path: '/music', label: 'Music'},
            {path: '/settings', label: 'Settings'},
        ],
        friends: [
            {
                id: uuidv4(),
                name: 'Maks',
                avatar: "https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg"
            },
            {
                id: uuidv4(),
                name: 'Sasha',
                avatar: "https://yt3.ggpht.com/ytc/AMLnZu-4tKpIa5HR4HHwUuJPAYDMtPIRq8ctCLcJGZDD=s900-c-k-c0x00ffffff-no-rj"
            },
            {
                id: uuidv4(),
                name: 'Kolya',
                avatar: "https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg"
            },
        ],
    }
export const sidebarReducer = (state: sidebarPropsType = initiationState, action: SidebarActionType) => {

    return state;
}