import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";
import {AppStateType} from "../../redux/store/store";
import {MessagesPageType} from "../../types";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messagesPage: MessagesPageType
    isAuth: boolean
}

type mapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch ):mapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
