import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logocontainer}>
                <img src={logo} alt="ligo" className={s.logo} />
                <h3 className={s.h}>Social Network</h3>
            </div>

            <div className={s.loginBlock}>
                <NavLink to="/login" className={s.activeLink}>
                    Login
                </NavLink>
            </div>
        </header>
    );
};