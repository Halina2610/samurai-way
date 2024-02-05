import {authApi, UsersAuthDataType} from "../../api/authApi";
import {AuthMeStateType, authReducer, setAuthUsersData} from "../../redux/reducers/authReducer";
import React, {Component} from "react";
import {Login} from "./Login/Login";
import {AppStateType} from "../../redux/store/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


export class LoginComponent extends Component<AuthMePropsType> {

    componentDidMount = async () => {
        try {
            const response = await authApi.getAuthMe();
            this.props.setAuthUsersData(response.data.data);

        } catch (error: any) {
            console.log(error.message);
        }
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


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setAuthUsersData: (data: UsersAuthDataType) => {
            dispatch(setAuthUsersData(data));
        },
    };
};


export const LoginContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

//types

type MapStatePropsType = {
    loginPage: AuthMeStateType;
};

type MapDispatchPropsType = {
    setAuthUsersData: (data: UsersAuthDataType) => void;
};

type AuthMePropsType = {
    setAuthUsersData: (data: UsersAuthDataType) => void;
    loginPage: AuthMeStateType;
}

