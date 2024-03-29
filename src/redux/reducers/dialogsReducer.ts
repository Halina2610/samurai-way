import { v4 as uuidv4 } from "uuid";
import {MessagesPageType, MessagesPropsType} from "../../types";

let initiationState: MessagesPageType =   {
        messages: [
            {id: uuidv4(), message: 'Hi, it\'s great to see you again!'},
            {id: uuidv4(), message: 'Hey! Yes, it\'s been a while. How have you been?'},
            {id: uuidv4(), message: 'I\'ve been doing well, thanks. How about you?'},
            {id: uuidv4(), message: 'Not too bad, thanks for asking. What have you been up to lately?'},
        ],
        newMessageText: "",

        dialogs: [
            {id: uuidv4(), name: 'Murkiss'},
            {id: uuidv4(), name: 'Miu'},
            {id: uuidv4(), name: 'Kitty'},
        ],
    }



export const dialogsReducer = (
    state: MessagesPageType = initiationState,
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

export const addMessage= () => ({type: "ADD-MESSAGE"} as const);

export const updateNewMessageText = (newMessage: string)=> ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage
}as const);

//types
export type DialogsReducerActionType =
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>