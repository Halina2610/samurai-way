import {usersApi, UserServerType, UsersServerType} from "../../api/usersApi";
import {AnyAction, Dispatch} from "redux";


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
};

export type UsersReducerActionType =
    | UnfollowActionType
    | FollowActionType
    | SetUsersActionType
    | FetchUsersActionType;

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

