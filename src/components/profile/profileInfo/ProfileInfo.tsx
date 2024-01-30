import s from "./ProfileInfo.module.css";
import React from "react";
import {UserApiProfileResponse} from "../../../api/usersApi";

type ProfileInfoPropsType = {
    profilePage: UserApiProfileResponse;

};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={'app-wrapper-content'}>
            <div>
                {props.profilePage.photos.large && (
                    <img className={s.img} src={props.profilePage.photos.large} alt={'lardge photo'} />
                )}
            </div>
            <div className={s.avatar}>
                <div>
                    {props.profilePage.photos.small && (
                        <img src={props.profilePage.photos.small} alt={'small photo'} />
                    )}
                </div>
                <div>
                    <h3>{props.profilePage.fullName}</h3>
                    <p>
                        <div>Contacts: </div>
                        <div>{props.profilePage.contacts.facebook}</div>
                        <div>{props.profilePage.contacts.vk}</div>
                        <div>{props.profilePage.contacts.mainLink}</div>
                        <div>{props.profilePage.contacts.instagram}</div>
                        <div>{props.profilePage.contacts.github}</div>
                        <div>{props.profilePage.contacts.website}</div>
                        <div>{props.profilePage.contacts.twitter}</div>
                        <div>{props.profilePage.contacts.youtube}</div>
                    </p>
                </div>
            </div>
        </div>
    );
};