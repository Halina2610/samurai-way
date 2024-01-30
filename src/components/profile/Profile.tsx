import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import fon from "../../assets/images/fon-profile.jpg"
import {UserApiProfileResponse} from "../../api/usersApi"
import {Preloader} from "../common/preloader/Preloader";

type PropsType = {
    profilePage: UserApiProfileResponse;


}

export const Profile = (props: PropsType) => {
    if (!props.profilePage) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    );
};