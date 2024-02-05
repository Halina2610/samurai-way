import classes from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string;
}

export const Message = (props: MessagePropsType) => {
    debugger
    return <div className={classes.dialog}>{props.message}</div>;
}
