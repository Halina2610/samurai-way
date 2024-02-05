import { v4 as uuidv4 } from "uuid";
import { UsersAuthDataType } from "../../api/authApi";

const initiationState: AuthMeStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
};

export const authReducer = (
    state: AuthMeStateType = initiationState,
    action: AuthMeActionType
): AuthMeStateType => {
    switch (action.type) {
        case "SET_AUTH_USERS_DATA":
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login
            };
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};

export const setAuthUsersData = (data: UsersAuthDataType) => ({
    type: "SET_AUTH_USERS_DATA",
    data
} as const);

export const setIsAuth = (isAuth: boolean) => ({
    type: "SET_IS_AUTH",
    isAuth
} as const);

// Types
export type AuthMeStateType = UsersAuthDataType & {
    isAuth: boolean;
};

export type AuthMeActionType =
    | ReturnType<typeof setAuthUsersData>
    | ReturnType<typeof setIsAuth>;