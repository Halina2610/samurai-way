import {UserServerType} from "../../api/usersApi";


type FollowActionType = {
    type: "FOLLOW";
    userId: number;
};

type UnfollowActionType = {
    type: "UNFOLLOW";
    userId: number;
};

type SetUsersActionType = {
    type: "SET-USERS";
    users: UserServerType[];
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

type ToggleIsFetchingActionType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}


export type UsersReducerActionType =
    | UnfollowActionType
    | FollowActionType
    | SetUsersActionType
    | FetchUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | ToggleIsFetchingActionType;

export const follow = (userId: number): UsersReducerActionType => ({
    type: "FOLLOW",
    userId,
});

export const unfollow = (userId: number): UsersReducerActionType => ({
    type: "UNFOLLOW",
    userId,
});

export const setUsers = (users: UserServerType[]): UsersReducerActionType => ({
    type: "SET-USERS",
    users,
});

export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE",
    pageNumber: pageNumber
});

export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
    type: "SET-TOTAL-COUNT",
    totalCount: totalCount
})

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: "TOGGLE-IS-FETCHING",
    isFetching: isFetching
})