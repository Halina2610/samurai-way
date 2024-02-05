import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/actions/actionsUsers";
import {usersAPI, UsersDomainType, UserServerType} from "../../api/usersAPI";
import React, {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../../components/common/preloader/Preloader";

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
               await usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
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
        this.props.toggleIsFetching(true);
        this.props.setUsers([]); // Очистка списка пользователей перед загрузкой новой страницы
        await usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : undefined}

            <Users
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
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


const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
};


export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
    mapStateToProps,
    mapDispatchToProps
)(UsersApiComponent);