import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {UserApiProfileResponse} from "../../api/usersAPI";
import React, {Component} from "react";
import {Profile} from "./Profile";
import {fetchUserProfile} from "../../redux/reducers/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profilePage: UserApiProfileResponse;
};

type MapDispatchPropsType = {
    fetchUserProfile: (userId: number) => void
};

type UsersPropsType = {
    fetchUserProfile: (userId: number) => void
    profilePage: UserApiProfileResponse;
    isAuth: boolean
} & RouteComponentProps<{ userId: string }>;

export class ProfileComponent extends Component<UsersPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '30103';
        }
        this.props.fetchUserProfile(+userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
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

export const ProfileComponentWithRouter = withRouter(ProfileComponent);

export const ProfileContainer = connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    {fetchUserProfile}
)(ProfileComponentWithRouter);

