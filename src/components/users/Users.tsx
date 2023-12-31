import React from 'react';
import s from "./Users.module.css";
import {Button} from "../common/button/Button";
import {UsersDomainType, UserServerType} from "../../api/usersApi";
import userPhoto from '../../assets/images/user.png';

type UsersPropsType = {
    usersPage: UsersDomainType;
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    onPageChanged: (pageNumber: number) => void
};


export const Users = (props: UsersPropsType) => {

    const {items: users} = props.usersPage;
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (p: number) => {
        props.onPageChanged(p)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.numberPage}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            onPageChanged(p)
                        }}

                    >{p}</span>;
                })}
            </div>

            {users.map((u: UserServerType) => (
                <div key={u.id} className={s.userContainer}>
                    <div className={s.avatar}>
                        <img
                            className={s.avatarImg}
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt="User Avatar"
                        />
                        <div className={s.btn}>
                            {u.followed ? (
                                <Button name={'Unfollow'} onClick={() => props.unfollow(u.id)}/>
                            ) : (
                                <Button name={'Follow'} onClick={() => props.follow(u.id)}/>
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
    )
}
