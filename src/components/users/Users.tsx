import React, { useState, useEffect } from 'react';
import classes from "./Users.module.css";
import { Button } from "../common/Button";
import {UserServerType, UsersServerType} from "../../api/usersApi";

type UsersPropsType = {
    usersPage: UsersServerType;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;
    setUsers: (users: UserServerType[]) => void;
};

export const Users: React.FC<UsersPropsType> = ({
                                                    usersPage,
                                                    unfollow,
                                                    follow,
                                                    setUsers,
                                                }) => {
    const [displayedUsersCount, setDisplayedUsersCount] = useState(3);
    const [showAllUsers, setShowAllUsers] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка к верху страницы при изменении отображаемых пользователей
    }, [displayedUsersCount]);

    const followHandler = (userId: string) => {
        follow(userId);
    };

    const unfollowHandler = (userId: string) => {
        unfollow(userId);
    };

    const setUsersHandler = () => {
        if (showAllUsers) {
            setDisplayedUsersCount(3);
        } else {
            setDisplayedUsersCount((prevCount) => prevCount + 3);
        }
        setShowAllUsers(!showAllUsers);
    };

    return (
        <div className={classes.wrapper}>
            {usersPage.users.slice(0, displayedUsersCount).map((user) => (
                <div key={user.id} className={classes.userContainer}>
                    <div className={classes.avatar}>
                        <img className={classes.avatarImg} src={user.photos.small} alt="User avatar" />
                        <div className={classes.btn}>
                            {user.followed ? (
                                <Button name={'Unfollow'} onClick={() => unfollowHandler(user.id)} />
                            ) : (
                                <Button name={'Follow'} onClick={() => followHandler(user.id)} />
                            )}
                        </div>
                    </div>
                    <div className={classes.infoContainer}>
                        <div className={classes.name}>
                            {user.name}
                            <div className={classes.status}>{user.status}</div>
                        </div>
                        <div className={classes.location}>
                            <span>{`city: ''`}, {`country: ''`}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className={classes.button}>
                <Button onClick={setUsersHandler} name={showAllUsers ? 'Hide users' : 'Show more'} />
            </div>
        </div>
    );
};