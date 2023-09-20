import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

interface MenuItem {
    path: string;
    label: string;
}

export const Navbar = () => {
    const menuItems: MenuItem[] = [
        {path: '/profile', label: 'Profile'},
        {path: '/dialogs', label: 'Message'},
        {path: '/news', label: 'News'},
        {path: '/music', label: 'Music'},
        {path: '/settings', label: 'Settings'}
    ];

    return (
        <nav className={classes.nav}>
            {menuItems.map((item) => (
                <div className={classes.item}>
                    <NavLink to={item.path} activeClassName={classes.activeLinc}>
                        {item.label}
                    </NavLink>
                </div>
            ))}
        </nav>
    );
};