import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo srsBackgrond={"https://fatcatart.com/wp-content/uploads/2016/04/space-cat-min.jpg"}
                         alt1={"Profile Background"}
                         srsAvatar={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
                         alt2={"Avatar"}
                         name={'Mr.Cat'}
                         city={'LA'}
                         birth={'9 Feb.'}
                         hrefSite={"http://www.google.com"}
                         nameWebSite={'www.google.com'}/>
            <MyPosts/>
        </div>
    );
};