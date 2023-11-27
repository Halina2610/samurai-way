import React from 'react';
import classes from './Profile.module.css';
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfilePropsType = {
   /* store: StoreType*/
};

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo srsBackgrond={'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRqa3BhreL6A1JawtUVae7hw'}
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