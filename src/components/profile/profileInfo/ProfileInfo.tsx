import classes from "./ProfileInfo.module.css";
import React from "react";

type ProfileInfoPropsType = {
    srsBackgrond: string
    alt1: string
    srsAvatar: string
    alt2: string
    name: string
    city: string
    birth: string
    hrefSite: string
    nameWebSite: string
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={'app-wrapper-content'}>
            <div>
                <img
                    className={classes.img}
                    src={props.srsBackgrond}
                    alt={props.alt1}
                />
            </div>
            <div className={classes.avatar}>
                <div>
                    <img
                        src={props.srsAvatar}
                        alt={props.alt2}
                    />
                </div>
                <div>
                    <h3>{props.name}</h3>
                    <p>
                        <span>City: </span>
                        <span>{props.city}</span>
                    </p>
                    <p>
                        <span>Date of Birth: </span>
                        <span>{props.birth}</span>
                    </p>
                    <p>
                        <span>Web-site: </span>
                        <span>
              <a href={props.hrefSite}>{props.nameWebSite}</a>
            </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
