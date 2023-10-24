import React from 'react';
import {
    StoreType,
} from '../../redux/store';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
};

export const DialogsContainer = (props: DialogsPropsType) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (newMessage: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage));

    };

    return (
        <div>
            <Dialogs messagesPage={props.store.getState().messagesPage}
                     addMessage={addMessage}
                     updateNewMessageText={onMessageChange}/>
        </div>
    );
};