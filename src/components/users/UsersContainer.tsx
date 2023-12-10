import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/reducers/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: UsersPageType
}

type mapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch ):mapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

