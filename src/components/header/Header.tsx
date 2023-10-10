import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn-icons-png.flaticon.com/128/249/249385.png" className={classes.logo} />
            <h3>Social Network</h3>
        </header>
    );
};