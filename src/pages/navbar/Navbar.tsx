import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import {sidebarPropsType} from "../../types";


type NavbarPropsType = {
    sidebar: sidebarPropsType;
};

export const Navbar: React.FC<NavbarPropsType> = (props: NavbarPropsType) => {
    return (
        <div className={s.siteBar}>
            <nav className={s.nav}>
                {props.sidebar.menuItems.map((item, index) => (
                    <div key={index} className={s.item}>
                        <NavLink to={item.path} className={s.activeLink}>
                            {item.label}
                        </NavLink>
                    </div>
                ))}
            </nav>
            <div>
                {props.sidebar.friends.map((friend) => (
                    <div key={friend.id} className={s.friends}>
                        <img src={friend.avatar} alt={friend.name} />
                        <span>{friend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};