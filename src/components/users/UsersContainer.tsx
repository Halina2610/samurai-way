import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/actions/actionsUsers";
import {usersApi, UsersDomainType, UserServerType} from "../../api/usersApi";
import React, {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

type MapStatePropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
};

type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserServerType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};

type UsersPropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserServerType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

};

type UsersState = {
    displayedUsersCount: number;
    showAllUsers: boolean;
};

export class UsersApiComponent extends Component<UsersPropsType, UsersState> {
    componentDidMount = async () => {
        if (this.props.usersPage.items.length === 0) {
            this.props.toggleIsFetching(true)
               await usersApi.getUsers(this.props.currentPage, this.props.pageSize)
                .then((response) => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.items)
                    this.props.setTotalCount(response.totalCount)
                })
                .catch(error => console.log(error.message))
        }
    }

    onPageChanged = async (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        await usersApi.getUsers(pageNumber, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items);
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
    };
};


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(follow(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users: UserServerType[]) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCount(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetching(isFetching))
        }
    };
};


export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(UsersApiComponent);