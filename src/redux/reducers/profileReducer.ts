import { v4 as uuidv4 } from "uuid";
import {PostsPropsType, ProfilePageType} from "../../types";

type AddPostActionType = {
     type: "ADD-POST";
};

type UpdateNewPostTextActionType = {
     type: "UPDATE-NEW-POST-TEXT";
     newPost: string;
};


let initiationState: ProfilePageType =  {
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

export type ProfileReducerActionType =
    | AddPostActionType
    | UpdateNewPostTextActionType;

export const profileReducer = (
    state: ProfilePageType = initiationState,
    action: ProfileReducerActionType
): ProfilePageType => {
     switch (action.type) {
          case "ADD-POST":
               let newPost: PostsPropsType = {
                    id: uuidv4(),
                    name: "Halina Kls",
                    post: state.newPostText,
                    title: "New post",
                    img:
                        "https://avatars.mds.yandex.net/i?id=b1d1f8fa520ba00305843b21c4cd3a5b_l-6557808-images-thumbs&n=13",
                    likeCount: 0,
               };
               return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: "",
               };
          case "UPDATE-NEW-POST-TEXT":
               return {
                    ...state,
                    newPostText: action.newPost,
               };
          default:
               return state;
     }
};

export const addPostActionCreator = (): ProfileReducerActionType => ({type: "ADD-POST"});

export const updateNewPostTextActionCreator = (newPost: string): ProfileReducerActionType => ({
     type: "UPDATE-NEW-POST-TEXT",
     newPost
});