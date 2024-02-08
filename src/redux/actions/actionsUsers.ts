import {UserServerType} from "../../api/usersAPI";

export const follow = (userId: number) => ({
    type: "FOLLOW",
    userId,
} as const);
export const unfollow = (userId: number) => ({
    type: "UNFOLLOW",
    userId,
}as const);
export const setUsers = (users: UserServerType[]) => ({
    type: "SET-USERS",
    users,
}as const);
export const setCurrentPage = (pageNumber: number) => ({
    type: "SET_CURRENT_PAGE",
    pageNumber
}as const);
export const setTotalCount = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount
}as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING",
    isFetching
}as const)

export const toggleFollowingProgress = (followingInProgress: boolean, id: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS' as const, followingInProgress, id
} as const)


export type UsersReducerActionType =
    | ReturnType<typeof unfollow>
    | ReturnType<typeof follow>
    | ReturnType<typeof  setUsers>
    | ReturnType<typeof  setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>