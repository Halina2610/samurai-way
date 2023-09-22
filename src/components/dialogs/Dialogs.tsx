import React from 'react';
import './../../App.css';
import classes from './Dialogs.module.css';
import avatar from './avatar.png'
import {NavLink} from "react-router-dom";
import {message} from "antd";

export type MessageType = {
    id: number
    user: {
        avatar: string;
        name: string
    },
    message: {
        text: string
        time: string
    },
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Some Name',
    },
    message: {
        text: 'some textsome textsome textsome text',
        time: '9:00',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Friend Name',
    },
    message: {
        text: 'зеркальное сообщение для тренировки css',
        time: '9:00',
    },
}
type DialogsItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id;

    return  <div className={classes.dialog}>
        <NavLink to={path} >{props.name}</NavLink>
    </div>
}

type MessagePropsType ={
    message: string
}
const Message =(props: MessagePropsType) => {
    return <div className={classes.dialog}>{props.message}</div>
}
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <DialogItem name={'Murkiss'} id={1} />
                    <DialogItem name={'Miu'} id={2} />
                    <DialogItem name={'Kitty'} id={3} />
                </div>
            </div>
            <div className={classes.massage}>
                <Message message={'Hi, it\'s great to see you again!'} />
                <Message message={'Hey! Yes, it\'s been a while. How have you been?'} />
                <Message message={'I\'ve been doing well, thanks. How about you?'} />
                <Message message={'Not too bad, thanks for asking. What have you been up to lately?'} />
            </div>
        </div>
    );
};

