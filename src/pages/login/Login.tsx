import React from "react";
import { AuthMeStateType } from "../../redux/reducers/authReducer";

type LoginPropsType = {
    loginPage: AuthMeStateType;
};

export const Login = (props: LoginPropsType) => {
    return (
        <div >
            <h3>Login</h3>
            <div>{`Login: ${props.loginPage.login}`}</div>
            <div>{`Id: ${props.loginPage.id}`}</div>
            <div>{`Email: ${props.loginPage.email}`}</div>

            <div>
                {props.loginPage.isAuth && `is auth: ${props.loginPage.isAuth}`}
            </div>
        </div>
    );
};