import React from 'react';
import { Dialogs } from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/reducers/dialogsReducer";
import { StoreContext } from "../../redux/reducers/StoreContext";

type DialogsPropsType = {
  //  store: StoreType;
};

export const DialogsContainer = (props: DialogsPropsType) => {
    return (
        <div>
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    };

                    const onMessageChange = (newMessage: string) => {
                        store.dispatch(updateNewMessageTextActionCreator(newMessage));
                    };

                    return (
                        <Dialogs
                            messagesPage={state.messagesPage}
                            addMessage={addMessage}
                            updateNewMessageText={onMessageChange}
                        />
                    );
                }}
            </StoreContext.Consumer>
        </div>
    );
};