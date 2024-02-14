import {AuthMeStateType, fetchMe} from "../../redux/reducers/authReducer";
import React, {Component} from "react";
import {Login} from "./Login";
import {AppStateType} from "../../redux/store/store";
import {connect} from "react-redux";


export class LoginComponent extends Component<AuthMePropsType> {

    componentDidMount = async () => {
        this.props.fetchMe()
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
    {fetchMe}
)(LoginComponent);

//types

type MapStatePropsType = {
    loginPage: AuthMeStateType;
};

type MapDispatchPropsType = {
    fetchMe: () => void

};

type AuthMePropsType = {
    loginPage: AuthMeStateType;
    fetchMe: () => void
}

