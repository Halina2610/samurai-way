import {usersAPI, UsersDomainType} from "../../api/usersAPI";
import {UserServerType} from "../../api/usersAPI";
import {AppThankAction, AppThankDispatch} from "../store/store";

const initialState: UsersDomainType = {
    items: [],
    totalCount: 0,
    isFetching: false,
    currentPage: 1,
    pageSize: 100,
    followingInProgress: []
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
                    user.id === action.userId ? {...user, followed: true} : user
                ),
            };

        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map((user) =>
                    user.id === action.userId ? {...user, followed: false} : user
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
                currentPage: action.pageNumber,
            };

        case "SET-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.totalCount,
            };

        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching,
            };

        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ? [...state.followingInProgress, action.id]
                        : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
};


//thunk

export const fetchUsers = (currentPage: number, pageSize: number): AppThankAction => {
    return async (dispatch: AppThankDispatch) => {
        try {
            dispatch(toggleIsFetching(true));
            const response = await usersAPI.fetchUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
        } catch (error: any) {
            console.log(error.message);
        }

    };
};


export const getUsersNewPage = (pageNumber: number, pageSize: number): AppThankAction => {
    return async (dispatch: AppThankDispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setUsers([]));
        await dispatch(fetchUsers(pageNumber, pageSize));
    };
};


export const follow = (userId: number): AppThankAction => {
    return async (dispatch: AppThankDispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        try {
            const res = await usersAPI.follow(userId);
            if (res.data.resultCode === 0) {
                dispatch(followUser(userId));
            }
        } catch (error) {
            console.log(error);
        }

        dispatch(toggleFollowingProgress(false, userId));
    };
};

export const unfollow = (userId: number): AppThankAction => {
    return async (dispatch: AppThankDispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        try {
            const res = await usersAPI.unfollow(userId);
            if (res.data.resultCode === 0) {
                dispatch(unfollowUser(userId));
            }
        } catch (error) {
            console.log(error);
        }

        dispatch(toggleFollowingProgress(false, userId));
    };
};

//actions
export const followUser = (userId: number) => ({
    type: "FOLLOW",
    userId,
} as const);
export const unfollowUser = (userId: number) => ({
    type: "UNFOLLOW",
    userId,
} as const);
export const setUsers = (users: UserServerType[]) => ({
    type: "SET-USERS",
    users,
} as const);
export const setCurrentPage = (pageNumber: number) => ({
    type: "SET_CURRENT_PAGE",
    pageNumber
} as const);
export const setTotalCount = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE-IS-FETCHING",
    isFetching
} as const)

export const toggleFollowingProgress = (followingInProgress: boolean, id: number) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS' as const, followingInProgress, id
} as const)


export type UsersReducerActionType =
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof followUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>