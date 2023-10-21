import React, {ChangeEvent, useRef} from 'react';
import classes from './Dialogs.module.css';
import { Message } from './message/Message';
import { DialogItem } from './dialogItem/DialogItem';
import {
    ActionType,
    MessagesPageType,
    updateNewMessageTextActionCreator,
    addMessageActionCreator,
} from '../../redux/store';
import { Button } from '../common/Button';

type DialogsPropsType = {
    messagesData: MessagesPageType;
    dispatch: (action: ActionType) => void;
};

export const Dialogs = (props: DialogsPropsType) => {


    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newMessage = e.currentTarget.value;
            props.dispatch(updateNewMessageTextActionCreator(newMessage));
        }
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.messagesData.dialogs.map((d) => (
                    <DialogItem name={d.name} key={d.id} />
                ))}
            </div>
            <div className={classes.messages}>
                {props.messagesData.messages.map((m) => (
                    <Message key={m.id} message={m.message} />
                ))}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                   // ref={newMessageElement}
                    value={props.messagesData.newMessageText}
                    placeholder={'Enter you message... '}
                />
                <Button onClick={addMessage} name={'Send'} />
            </div>
        </div>
    );
};