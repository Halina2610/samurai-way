import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import {sidebarPropsType} from "../../redux/store";


type NavbarPropsType = {
    sitebar: sidebarPropsType;
};

export const Navbar: React.FC<NavbarPropsType> = (props: NavbarPropsType) => {
    return (
        <div className={classes.siteBar}>
            <nav className={classes.nav}>
                {props.sitebar.menuItems.map((item, index) => (
                    <div key={index} className={classes.item}>
                        <NavLink to={item.path} activeClassName={classes.activeLink}>
                            {item.label}
                        </NavLink>
                    </div>
                ))}
            </nav>
            <div>
                {props.sitebar.friends.map((friend) => (
                    <div key={friend.id} className={classes.friends}>
                        <img src={friend.avatar} alt={friend.name} />
                        <span>{friend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};