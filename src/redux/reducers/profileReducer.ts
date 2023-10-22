import { PostsPropsType, ProfilePageType } from "../store";
import { v4 as uuidv4 } from "uuid";

type AddPostActionType = {
     type: "ADD-POST";
};

type UpdateNewPostTextActionType = {
     type: "UPDATE-NEW-POST-TEXT";
     newPost: string;
};

export type ProfileReducerActionType =
    | AddPostActionType
    | UpdateNewPostTextActionType;

export const profileReducer = (
    state: ProfilePageType,
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