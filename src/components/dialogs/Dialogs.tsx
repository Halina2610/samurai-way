import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import { Message } from './message/Message';
import { DialogItem } from './dialogItem/DialogItem';
import {
    ActionType,
    MessagesPageType,
} from '../../redux/store';
import { Button } from '../common/Button';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";

type DialogsPropsType = {
    messagesPage: MessagesPageType;
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void;
};

export const Dialogs = (props: DialogsPropsType) => {


    const addMessage = () => {
        props.addMessage();
    };

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newMessage = e.currentTarget.value;
            props.updateNewMessageText(newMessage);
        }
    };

    debugger
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messagesPage.dialogs.map((d) => (
                    <DialogItem name={d.name} key={d.id} />
                ))}
            </div>
            <div className={classes.messages}>
                {props.messagesPage.messages.map((m) => (
                    <Message key={m.id} message={m.message} />
                ))}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={props.messagesPage.newMessageText}
                    placeholder={'Enter you message... '}
                />
                <Button onClick={addMessage} name={'Send'} />
            </div>
        </div>
    );
};