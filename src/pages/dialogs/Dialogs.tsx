import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Message} from './message/Message';
import {DialogItem} from "./dialogItem/DialogItem";
import {Button} from "../../components/common/button/Button";
import {MessagesPageType} from "../../types";


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


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.messagesPage.dialogs.map((d) => (
                    <DialogItem name={d.name} key={d.id}/>
                ))}
            </div>
            <div className={s.messages}>
                {props.messagesPage.messages.map((m) => (
                    <Message key={m.id} message={m.message}/>
                ))}
            </div>
            <div>
                <textarea
                    onChange={onMessageChange}
                    value={props.messagesPage.newMessageText}
                    placeholder={'Enter you message... '}
                />
                <Button onClick={addMessage} name={'Send'}/>
            </div>
        </div>
    );
};