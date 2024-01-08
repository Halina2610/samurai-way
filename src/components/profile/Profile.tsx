import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import fon from "../../assets/images/fon-profile.jpg"



export const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo srsBackgrond={fon}
                         alt1={"Profile Background"}
                         srsAvatar={"https://avatars.mds.yandex.net/i?id=b1d1f8fa520ba00305843b21c4cd3a5b_l-6557808-images-thumbs&n=13"}
                         alt2={"Avatar"}
                         name={'Halina Kls'}
                         city={'Minsk'}
                         birth={'26 Oct. 1992'}
                         hrefSite={"http://www.exemple.com"}
                         nameWebSite={'exemple.com'}/>
            <MyPostsContainer />
        </div>
    );
};