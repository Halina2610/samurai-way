import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";
import {AppStateType} from "../../redux/store/store";
import {MessagesPageType} from "../../types";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messagesPage: MessagesPageType
}

type mapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
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

/*type DialogsPropsType = {
  //  store: StoreType;
};*/

/*export const DialogsContainer = (props: DialogsPropsType) => {
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
};*/