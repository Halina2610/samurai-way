import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {
    follow, getUsersNewPage, fetchUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow
} from "../../redux/reducers/usersReducer";
import {UsersDomainType} from "../../api/usersAPI";
import React, {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../../components/common/preloader/Preloader";


type MapStatePropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};

type MapDispatchPropsType = {
    unfollow: (userId: number) => void;
    follow: (userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    fetchUsers: (currentPage: number, pageSize: number) => void
    getUsersNewPage: (pageNumber: number, pageSize: number) => void
};

type UsersPropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    unfollow: (userId: number) => void;
    follow: (userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: number) => void
    fetchUsers: (currentPage: number, pageSize: number) => void
    getUsersNewPage: (pageNumber: number, pageSize: number) => void
};

type UsersState = {
    displayedUsersCount: number;
    showAllUsers: boolean;
};

export class UsersApiComponent extends Component<UsersPropsType, UsersState> {
    componentDidMount = () => {
        if (this.props.usersPage.items.length === 0) {
            this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = async (pageNumber: number) => {
        this.props.getUsersNewPage(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : undefined}

            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                toggleIsFetching={this.props.toggleIsFetching}
                follow={this.props.follow}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        unfollow,
        toggleIsFetching,
        toggleFollowingProgress,
        fetchUsers,
        getUsersNewPage,
        follow
    }
)(UsersApiComponent);