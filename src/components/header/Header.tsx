import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn-icons-png.flaticon.com/128/249/249385.png" alt="ligo" className={s.logo} />
            <h3>Social Network</h3>
        </header>
    );
};