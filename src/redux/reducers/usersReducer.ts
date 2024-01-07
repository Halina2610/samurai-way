import { UsersReducerActionType} from "../actions/actionsUsers";
import {UsersDomainType} from "../../api/usersApi";


const initialState: UsersDomainType = {
    items: [],
    totalCount: 0,
    error: undefined
};

const updatedInitialState = {
    ...initialState,
    pageSize: 10,
    currentPage: 1
};

export type UpdatedUsersDomainType = UsersDomainType & { pageSize: number, currentPage: number };

export const usersReducer = (
    state: UpdatedUsersDomainType = updatedInitialState,
    action: UsersReducerActionType
): UpdatedUsersDomainType => {
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
                items: action.users.users,
            };

        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.pageNumber

            };

        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            }

        default:
            return state;
    }
};


