import React from 'react';
import './../../App.css';
import classes from './Dialogs.module.css';
import Message from './massages/message/Message';
import FriendMessage from './massages/friend-message/FriendMessage';
import MessageSender from './massages/message-sender/MessageSender';
import avatar from './avatar.png'

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
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome text', // можно менять
        time: '9:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '9:00', // можно менять
    },
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Murkiss
                </div>
                <div className={classes.dialog}>
                    Miu
                </div>
                <div className={classes.dialog}>
                    Kitty
                </div>
            </div>

            <div className={classes.massage}>
                    <div>
                        <Message message={message0} />
                        <FriendMessage message={friendMessage0} />
                    </div>
                    <MessageSender M={Message} />
            </div>
        </div>
    );
};

