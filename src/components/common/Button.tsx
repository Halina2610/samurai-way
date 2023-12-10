import React from 'react';
import classes from "./Button.module.css";

type ButtonPropsType = {
    name: string
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            {props.name}
        </button>
    );
};

