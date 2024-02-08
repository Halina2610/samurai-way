import {v4 as uuidv4} from "uuid";
import {PostsPropsType, ProfilePageType} from "../../types";
import {UserApiProfileResponse, usersAPI} from "../../api/usersAPI";
import {AppThankAction, AppThankDispatch} from "../store/store";

let initiationState: ProfilePageType = {
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {github: '', vk: '', facebook: '', instagram: '',
            twitter: '', website: '', youtube: '', mainLink: ''},
        photos: {small: null, large: null}
    },

    posts: [],
    newPostText: "",
}


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
        case "SET-USER-PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
};

//thunk
export const fetchUserProfile = (
    userId: number | undefined
): AppThankAction => {
    return async (dispatch: AppThankDispatch) => {
        try {
            if (!userId) {
                userId = 30103;
            }
            const response = await usersAPI.getProfileUsers(userId);
            const userProfile = response.data;
            dispatch(setUserProfileAC(userProfile));
        } catch (error: any) {
            console.log(error.message);
        }
    };
};



export const addPostActionCreator = () => ({type: "ADD-POST"} as const);

export const updateNewPostTextActionCreator = (newPost: string) => ({type: "UPDATE-NEW-POST-TEXT", newPost} as const);

export const setUserProfileAC = (profile: UserApiProfileResponse) => ({type: "SET-USER-PROFILE", profile } as const)

//types
export type ProfileReducerActionType =
    | ReturnType<typeof addPostActionCreator>
| ReturnType<typeof updateNewPostTextActionCreator>
| ReturnType<typeof setUserProfileAC>
