import React from 'react';
import classes from './Dialogs.module.css';
import { Message } from './message/Message';
import {DialogItem} from "./dialogItem/DiologItem";
import {messagesPageType} from "../../redux/State";

type DialogsPropsType = {
    messages: messagesPageType;
};

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messages.dialogs.map((d) => (
                    <DialogItem name={d.name} key={d.id} />
                ))}
            </div>
            <div className={classes.messages}>
                {props.messages.messages.map((m) => (
                    <Message key={m.id} message={m.message} />
                ))}
            </div>
        </div>
    );
};