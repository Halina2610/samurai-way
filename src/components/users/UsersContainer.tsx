import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/actions/actionsUsers";
import {UsersDomainType, UserServerType} from "../../api/usersApi";
import {UpdatedUsersDomainType} from "../../redux/reducers/usersReducer";
import React, {Component} from "react";
import axios from "axios";
import {Users} from "./Users";



type MapStatePropsType = {
    usersPage: UpdatedUsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
};

type MapDispatchPropsType = {
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserServerType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void

};


type UsersPropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserServerType[]) => void;
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
};

type UsersState = {
    displayedUsersCount: number;
    showAllUsers: boolean;
};

export class UsersApiComponent extends Component<UsersPropsType, UsersState> {
    componentDidMount = () => {
        if (this.props.usersPage.items.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response) => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
                .catch(error => console.log(error.message))
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return <Users
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    };
};



export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(UsersApiComponent);