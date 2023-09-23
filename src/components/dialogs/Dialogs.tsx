import React from 'react';
import './../../App.css';
import classes from './Dialogs.module.css';
import avatar from './avatar.png';
import {DialogItem} from "./dialogItem/DiologItem";
import {Message} from "./message/Message";
import {messagesData, usersData} from "../../index";



export const Dialogs = () => {


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    {usersData.map(user => (
                        <DialogItem name={user.name} key={user.id} />
                    ))}
                </div>
            </div>
            <div className={classes.message}>
                {messagesData.map((message) => (
                    <Message key={message.id} message={message.message} />
                ))}
            </div>
        </div>
    );
};