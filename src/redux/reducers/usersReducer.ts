import { UsersReducerActionType } from "../actions/actionsUsers";
import {UsersDomainType} from "../../api/usersApi";


const initialState: UsersDomainType = {
    items: [],
    totalCount: undefined,
    error: undefined
};


export const usersReducer = (
    state: UsersDomainType = initialState,
    action: UsersReducerActionType
): UsersDomainType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map((user) =>
                    user.id === action.userId ? { ...user, followed: true } : user
                ),
            };

        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map((user) =>
                    user.id === action.userId ? { ...user, followed: false } : user
                ),
            };

        case "SET-USERS":
            return {
                ...state,
                items: [...state.items, ...action.users.users],
            };

        default:
            return state;
    }
};