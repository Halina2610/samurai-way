import {AuthMeStateType, getAuthUserData} from "../../redux/reducers/authReducer";
import React, {Component} from "react";
import {Login} from "./Login";
import {AppStateType} from "../../redux/store/store";
import {connect} from "react-redux";


export class LoginComponent extends Component<AuthMePropsType> {

    componentDidMount = async () => {
        this.props.getAuthUserData()
    };

    render() {
        return (
            <>
                <Login {...this.props} />

            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        loginPage: state.auth
    };
};

export const LoginContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    {getAuthUserData}
)(LoginComponent);

//types

type MapStatePropsType = {
    loginPage: AuthMeStateType;
};

type MapDispatchPropsType = {
    getAuthUserData: () => void

};

type AuthMePropsType = {
    loginPage: AuthMeStateType;
    getAuthUserData: () => void
}

