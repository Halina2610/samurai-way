import {v4 as uuidv4} from 'uuid';


let store: StoreType = {
    _state: {
        siteBar: {
            menuItems: [
                {path: '/profile', label: 'Profile'},
                {path: '/dialogs', label: 'Message'},
                {path: '/news', label: 'News'},
                {path: '/music', label: 'Music'},
                {path: '/settings', label: 'Settings'}
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
        },
        messagesPage: {
            messages: [
                {id: uuidv4(), message: 'Hi, it\'s great to see you again!'},
                {id: uuidv4(), message: 'Hey! Yes, it\'s been a while. How have you been?'},
                {id: uuidv4(), message: 'I\'ve been doing well, thanks. How about you?'},
                {id: uuidv4(), message: 'Not too bad, thanks for asking. What have you been up to lately?'},
            ],
            newMessageText: "",

            dialogs: [
                {id: uuidv4(), name: 'Murkiss'},
                {id: uuidv4(), name: 'Miu'},
                {id: uuidv4(), name: 'Kitty'},
            ],
        },

        profilePage: {
            posts: [
                {
                    id: uuidv4(), name: 'Murkiss',
                    title: 'Exploring the Cosmos',
                    post: `<div>
            <p>Hello, fellow Earthlings! 🌎 As a proud cat astronaut, I'm here to share my incredible journey through the cosmos. 🚀✨</p>
            <p>Stay tuned for more updates from my cosmic adventures. Until then, remember to always dream big and reach for the moon! 🌙✨</p>
        </div>`,
                    likeCount: 22,
                    img: 'https://cdn-irec.r-99.com/sites/default/files/imagecache/250i/pictures/picture-575475-9b2fd.jpg'
                },
                {
                    id: uuidv4(), name: 'Kitty',
                    title: 'A Day in the Life of a Gentleman Cat',
                    post: `<div>
            <p>Greetings, dear friends! Allow me, the sophisticated Gentleman Cat, to take you on a journey through elegance and refinement. 🎩🐾</p>
            <p>Remember, my dear companions, it takes more than just a suit and a hat to be a true gentleman. It requires grace, charm, and a deep appreciation for the finer things in life. Until next time, stay classy! 🎩✨</p>
        </div>`,
                    likeCount: 21,
                    img: 'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg'
                },

                {
                    id: uuidv4(), name: 'Miu',
                    title: 'Adventures of a Feline Explorer',
                    post: `<div>
            <p>Meow there, fellow adventurers! 🌍🐾 Join me, the intrepid Cat Traveler, as I embark on thrilling escapades around the globe!</p>
            <p>Remember, my curious companions, there's a whole world out there waiting to be explored. So pack your bags, follow your whiskers, and let the adventures begin! 🌎✈️</p>
        </div>`,
                    likeCount: 7,
                    img: 'https://sneg.top/uploads/posts/2023-06/1687572964_sneg-top-p-avi-dlya-standoffa-koti-instagram-7.jpg'
                },

            ],
            newPostText: "it-kamasutra",
        }

    },
    _callSubscriber(state: StateType) {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {

            let newPost: PostsPropsType = {
                id: uuidv4(),
                name: "Halina Kls",
                post: this._state.profilePage.newPostText,
                title: "New post",
                img:
                    "https://avatars.mds.yandex.net/i?id=b1d1f8fa520ba00305843b21c4cd3a5b_l-6557808-images-thumbs&n=13",
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {

            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state);
        }
        else if (action.type === "ADD-MESSAGE"){

            let newMessage: MessagesPropsType = {
                id: uuidv4(),
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = "";
            this._callSubscriber(this._state)
        }
        else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {

            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },

}

export type MessagesPropsType = {
    id: string
    message: string
}

export type UsersPropsType = {
    name: string
    id: string
}
export type MessagesPageType = {
    messages: MessagesPropsType[]
    newMessageText: string
    dialogs: UsersPropsType[]
};
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

export type siteBarPropsType = {
    friends: FriendsPropsType[]
    menuItems: MenuItemType[]
}
export type  MenuItemType = {
    path: string;
    label: string;
}

export type ProfilePageType = {
    posts: PostsPropsType[]
    newPostText: string
}
export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    siteBar: siteBarPropsType
}

export interface StoreType {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType =
    | { type: "ADD-POST" }
    | { type: "UPDATE-NEW-POST-TEXT"; newPost: string }
    | { type: "ADD-MESSAGE" }
    | { type: "UPDATE-NEW-MESSAGE-TEXT"; newMessage: string };


export const addPostActionCreator = (): ActionType => ({type: "ADD-POST"});

export const updateNewPostTextActionCreator = (newPost: string): ActionType => ({
    type: "UPDATE-NEW-POST-TEXT",
    newPost
});

export const addMessageActionCreator = (): ActionType => ({type: "ADD-MESSAGE"});

export const updateNewMessageTextActionCreator = (newMessage: string): ActionType => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage
});
export default store;

