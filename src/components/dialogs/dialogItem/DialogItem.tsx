import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
    name: string;
    id?: number;
}

export const DialogItem = (props: DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id;
    debugger
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
