import { connect } from "react-redux";
import { compose } from "redux";
import { Dialogs } from "./Dialogs";
import { addMessage, updateNewMessageText } from "../../redux/reducers/dialogsReducer";
import { AppStateType } from "../../redux/store/store";
import { MessagesPageType } from "../../types";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    messagesPage: MessagesPageType;
};

type MapDispatchPropsType = {
    addMessage: () => void;
    updateNewMessageText: (newMessage: string) => void;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
    };
};

const mapDispatchToProps: MapDispatchPropsType = {
    addMessage,
    updateNewMessageText,
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);