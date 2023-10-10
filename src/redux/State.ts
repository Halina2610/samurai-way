import {v4 as uuidv4} from 'uuid';
import exp from "constants";

export type MessagesPropsType = {
    id: string
    message: string
}

export type UsersPropsType = {
    name: string
    id: string
}
export type messagesPageType = {
    messages: MessagesPropsType[];
    dialogs: UsersPropsType[];
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
export type StateType = {
    messagesPage: messagesPageType
    profilePage: {
        posts: PostsPropsType[];
    };
    siteBar: siteBarPropsType
}


export const state: StateType = {
    siteBar: {
        menuItems: [
            {path: '/profile', label: 'Profile'},
            {path: '/dialogs', label: 'Message'},
            {path: '/news', label: 'News'},
            {path: '/music', label: 'Music'},
            {path: '/settings', label: 'Settings'}
        ],
        friends: [
            {id: uuidv4(), name: 'Maks', avatar: "https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-76.jpg"},
            {id: uuidv4(), name: 'Sasha', avatar: "https://yt3.ggpht.com/ytc/AMLnZu-4tKpIa5HR4HHwUuJPAYDMtPIRq8ctCLcJGZDD=s900-c-k-c0x00ffffff-no-rj"},
            {id: uuidv4(), name: 'Kolya', avatar: "https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg"},
        ],
    },
    messagesPage: {
        messages: [
            {id: uuidv4(), message: 'Hi, it\'s great to see you again!'},
            {id: uuidv4(), message: 'Hey! Yes, it\'s been a while. How have you been?'},
            {id: uuidv4(), message: 'I\'ve been doing well, thanks. How about you?'},
            {id: uuidv4(), message: 'Not too bad, thanks for asking. What have you been up to lately?'},
        ],
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
            <p>Today, I had the privilege of floating weightlessly in space, surrounded by countless stars and galaxies. The view was absolutely breathtaking! 😻🌌</p>
            <p>I can't help but marvel at the vastness and beauty of the universe. It's a reminder of how small we are in the grand scheme of things. But hey, even us cats can reach for the stars! 🐾⭐</p>
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
            <p>Today, I started my day with a luxurious grooming session, ensuring that every strand of fur is perfectly in place. A gentleman must always look his best, you know! 😺💼</p>
            <p>After my grooming routine, I proceeded to savor a delightful cup of afternoon tea, accompanied by a plate of freshly caught salmon. Ah, the pleasures of fine dining! 🍵🐟</p>
            <p>As the sun sets, I retire to my cozy armchair, where I indulge in a captivating novel by the fireplace. The literary world is my escape, transporting me to far-off lands and captivating adventures. 📚🔥</p>
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
            <p>Today, I found myself wandering through the ancient ruins of Machu Picchu. The air was filled with mystery and the whispers of the past. What a sight to behold! 😺⛰️</p>
            <p>From there, I ventured into the dense jungles of the Amazon, where I encountered fascinating wildlife and soaked in the vibrant colors of nature. It was a true feast for the senses! 🌴🐆</p>
            <p>As the sun sets, I find solace in the bustling streets of Tokyo, immersing myself in the captivating blend of tradition and modernity. The world truly is a tapestry of wonders! 🏯🌸</p>
            <p>Remember, my curious companions, there's a whole world out there waiting to be explored. So pack your bags, follow your whiskers, and let the adventures begin! 🌎✈️</p>
        </div>`,
                likeCount: 7,
                img: 'https://sneg.top/uploads/posts/2023-06/1687572964_sneg-top-p-avi-dlya-standoffa-koti-instagram-7.jpg'
            },
        ],
    }

}

export const addPost = (postMessage: string) => {
   let newPost: PostsPropsType = {
       id: uuidv4(),
       name: "Name",
       post: postMessage,
       title: "Title",
       img: '',
       likeCount: 0

   }

   state.profilePage.posts.push(newPost)
}