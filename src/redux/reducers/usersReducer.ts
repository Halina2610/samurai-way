import { UsersReducerActionType} from "../actions/actionsUsers";
import {UsersDomainType} from "../../api/usersApi";


const initialState: UsersDomainType = {
    items: [],
    totalCount: 0,
    isFetching: false,
    currentPage: 1,
    pageSize: 100
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
                items: action.users,
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
            };

        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
};


