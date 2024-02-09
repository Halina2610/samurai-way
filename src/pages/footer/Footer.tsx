import React from 'react';
import s from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <img src={logo} alt="ligo" className={s.logo} />
                <p className={s.p}>Social Network</p>
            </div>

            <div className={s.loginBlock}>
                <NavLink to="/" >
                    Info
                </NavLink>
            </div>
        </footer>
    );
};

