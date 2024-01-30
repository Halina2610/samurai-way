import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {UserApiProfileResponse, usersApi} from "../../api/usersApi";
import React, {Component} from "react";
import {Profile} from "./Profile";
import {setUserProfileAC} from "../../redux/reducers/profileReducer";

type MapStatePropsType = {
    profilePage: UserApiProfileResponse;
};

type MapDispatchPropsType = {
    setUserProfile: (profile: UserApiProfileResponse) => void;
};

type UsersPropsType = {
    setUserProfile: (profile: UserApiProfileResponse) => void;
    profilePage: UserApiProfileResponse;
};

export class ProfileComponent extends Component<UsersPropsType> {
    componentDidMount = async () => {
        const userId: number = 2;

        try {
            const response = await usersApi.getProfileUsers(userId);
            const userProfile = response.data;
            this.props.setUserProfile(userProfile);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    render() {
        return (
            <>
                <Profile {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage.profile,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (profile: UserApiProfileResponse) => {
            dispatch(setUserProfileAC(profile));
        },
    };
};

export const ProfileContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponent);

