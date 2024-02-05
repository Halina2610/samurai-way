import React from "react";
import {AuthMeStateType} from "../../../redux/reducers/authReducer";


type LoginPropsType = {
    loginPage: AuthMeStateType;
}
export const Login = (props: LoginPropsType) => {

    return (
        <>
            <h3>Login</h3>

        </>
    );
};
