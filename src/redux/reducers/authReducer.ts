import {v4 as uuidv4} from "uuid";
import {MessagesPageType, MessagesPropsType} from "../../types";
import {UsersAuthDataType} from "../../api/authApi";


const initiationState: AuthMeStateType = {
    id: +'',
    email: '',
    login: '',
    isAuth: false
}

export const authReducer = (
    state: AuthMeStateType = initiationState,
    action: AuthMeActionType
) => {
    switch (action.type) {
        case "SET-AUTH-USERS-DATA": {
           return {
               ...state,
               id: action.data.id,
               email: action.data.email,
               login: action.data.login
           }

        }

        default:
            return state;
    }
};


export const setAuthUsersData = (data: UsersAuthDataType) => ({
    type: "SET-AUTH-USERS-DATA",
    data
} as const);

//types
export type AuthMeStateType = UsersAuthDataType & {
    isAuth: boolean
}

export type AuthMeActionType = ReturnType<typeof setAuthUsersData>