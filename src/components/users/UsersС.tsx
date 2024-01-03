import React, { Component } from 'react';
import classes from "./Users.module.css";
import { Button } from "../common/Button";
import {UserServerType, UsersDomainType, usersApi} from "../../api/usersApi";
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = {
    usersPage: UsersDomainType;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserServerType[]) => void;
};

type UsersState = {
    displayedUsersCount: number;
    showAllUsers: boolean;
};

export class UsersC extends Component<UsersPropsType, UsersState> {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        if (this.props.usersPage.items.length === 0) {
            usersApi.getUsers().then((data) => {
                this.props.setUsers(data.items);
            })
                .catch(error => console.log(error.message))
        }
    };

    render() {
        const { items: users } = this.props.usersPage;

        return (
            <div className={classes.wrapper}>
                {users.map((u: UserServerType) => (
                    <div key={u.id} className={classes.userContainer}>
                        <div className={classes.avatar}>
                            <img
                                className={classes.avatarImg}
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt="User Avatar"
                            />
                            <div className={classes.btn}>
                                {u.followed ? (
                                    <Button name={'Unfollow'} onClick={() => this.props.unfollow(u.id)} />
                                ) : (
                                    <Button name={'Follow'} onClick={() => this.props.follow(u.id)} />
                                )}
                            </div>
                        </div>
                        <div className={classes.infoContainer}>
                            <div className={classes.name}>
                                {u.name}
                                <div className={classes.status}>{u.status} {u.uniqueUrlName}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}