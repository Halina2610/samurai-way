import React, { Component } from 'react';
import { UsersPageType } from "../../redux/reducers/usersReducer";
import classes from "./Users.module.css";
import { Button } from "../common/Button";
import axios from "axios";
import {UsersServerType} from "../../api/usersApi";

type UsersPropsType = {
    usersPage: UsersServerType[];
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
};

type UsersState = {
    displayedUsersCount: number;
    showAllUsers: boolean;
};

class UsersC extends Component<UsersPropsType, UsersState> {
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    };

    render() {
        const { users } = this.props.usersPage;

        return (
            <div className={classes.wrapper}>
                <button onClick={this.getUsers}>Get users</button>
                {users.map((u) => (
                    <div key={u.id} className={classes.userContainer}>
                        <div className={classes.avatar}>
                            <img className={classes.avatarImg} src={u.photos.small != null ? u.photos.small : userPhoto} alt="User Avatar" />
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
                                <div className={classes.status}>{u.status}</div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={classes.button}>
                    {/* <Button onClick={this.setUsersHandler} name={showAllUsers ? 'Hide users' : 'Show more'} /> */}
                </div>
            </div>
        );
    }
}

export default UsersC;