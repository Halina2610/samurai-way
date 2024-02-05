import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {UserApiProfileResponse} from "../../api/usersAPI"
import {Preloader} from "../../components/common/preloader/Preloader";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

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