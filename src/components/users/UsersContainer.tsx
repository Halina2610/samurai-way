import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import {followAC, setUsersAC, unfollowAC } from "../../redux/actions/actionsUsers";
import { UsersC } from "./UsersС";
import {UsersDomainType, UserServerType, UsersServerType} from "../../api/usersApi";



type MapStatePropsType = {
    usersPage: UsersDomainType;
};

type MapDispatchPropsType = {
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserServerType[]) => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserServerType[]) => {
            dispatch(setUsersAC({ users }));
        },
    };
};



export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(UsersC);