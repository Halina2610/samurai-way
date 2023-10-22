import { MessagesPageType, MessagesPropsType } from "../store";
import { v4 as uuidv4 } from "uuid";

type AddMessageActionType = {
    type: "ADD-MESSAGE";
};

type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT";
    newMessage: string;
};

export type DialogsReducerActionType =
    | AddMessageActionType
    | UpdateNewMessageTextActionType;

export const dialogsReducer = (
    state: MessagesPageType,
    action: DialogsReducerActionType
) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesPropsType = {
                id: uuidv4(),
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: "",
            };
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (): DialogsReducerActionType => ({type: "ADD-MESSAGE"});

export const updateNewMessageTextActionCreator = (newMessage: string): DialogsReducerActionType => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage
});