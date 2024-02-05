import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {Dispatch} from "redux";
import {UserApiProfileResponse, usersApi} from "../../api/usersApi";
import React, {Component} from "react";
import {Profile} from "./Profile";
import {setUserProfileAC} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profilePage: UserApiProfileResponse;
};

type MapDispatchPropsType = {
    setUserProfile: (profile: UserApiProfileResponse) => void;
};

type UsersPropsType = {
    setUserProfile: (profile: UserApiProfileResponse) => void;
    profilePage: UserApiProfileResponse;
} & RouteComponentProps<{ userId: string }>;

export class ProfileComponent extends Component<UsersPropsType> {

    componentDidMount = async () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '30103'
        }
        try {
            const response = await usersApi.getProfileUsers(+userId);

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

export const ProfileComponentWithRouter = withRouter(ProfileComponent);

export const ProfileContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponentWithRouter);

