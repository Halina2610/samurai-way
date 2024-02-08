import React from 'react';
import s from "./Users.module.css";
import {Button} from "../../components/common/button/Button";
import {usersAPI, UsersDomainType, UserServerType} from "../../api/usersAPI";
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    usersPage: UsersDomainType;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];

    unfollow: (userId: number) => void;
    onPageChanged: (pageNumber: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
    toggleFollowingProgress: (followingInProgress: boolean, id: number) => void
    follow: (userId: number) => void

};

export const Users = (props: UsersPropsType) => {
    const {items: users} = props.usersPage;
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (p: number) => {
        props.onPageChanged(p);
    };

    return (
        <div className={s.wrapper}>
            {props.isFetching ? null :
                <div className={s.numberPage}>
                    {pages.map(p => {
                        return <span
                            className={props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => {
                                onPageChanged(p);
                            }}
                        >{p}</span>;
                    })}
                </div>
            }
            {users.map((u: UserServerType) => (
                <div key={u.id} className={s.userContainer}>
                    <div className={s.avatar}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img className={s.avatarImg}
                                 src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="User Avatar"
                            />
                        </NavLink>
                        <div className={s.btn}>
                            {u.followed ? (
                                <Button
                                    name={'Unfollow'}
                                    disabled={props.followingInProgress.includes(u.id)}  // Используйте followingInProgress для каждого пользователя
                                    onClick={() => {
                                        props.unfollow(u.id)

                                    }}
                                />
                            ) : (
                                <Button
                                    name={'Follow'}
                                    disabled={u.followingInProgress} // Используйте followingInProgress для каждого пользователя
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className={s.infoContainer}>
                        <div className={s.name}>
                            {u.name}
                            <div className={s.status}>{u.status} </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};