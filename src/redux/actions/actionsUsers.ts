import {usersApi, UserServerType, UsersServerType} from "../../api/usersApi";
import {AnyAction, Dispatch} from "redux";
import store from "../redux-store";


type FollowActionType = {
    type: "FOLLOW";
    userId: string;
};

type UnfollowActionType = {
    type: "UNFOLLOW";
    userId: string;
};

type SetUsersActionType = {
    type: "SET-USERS";
    users: UsersServerType;
};

type FetchUsersActionType = {
    type: "FETCH-USERS";
}

type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE";
    pageNumber: number
}

type SetTotalCountActionType = {
    type: "SET-TOTAL-COUNT"
    totalCount: number
}

export type UsersReducerActionType =
    | UnfollowActionType
    | FollowActionType
    | SetUsersActionType
    | FetchUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType;

export const followAC = (userId: string): UsersReducerActionType => ({
    type: "FOLLOW",
    userId,
});

export const unfollowAC = (userId: string): UsersReducerActionType => ({
    type: "UNFOLLOW",
    userId,
});

export const setUsersAC = (users: UsersServerType): UsersReducerActionType => ({
    type: "SET-USERS",
    users,
});

export const setCurrentPageAC = (pageNumber: number): SetCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE",
    pageNumber: pageNumber
});

export const setTotalCountAC = (totalCount: number): SetTotalCountActionType => ({
    type: "SET-TOTAL-COUNT",
    totalCount: totalCount
})

