import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {UserApiProfileResponse} from "../../api/usersAPI";
import React, {Component} from "react";
import {Profile} from "./Profile";
import {fetchUserProfile} from "../../redux/reducers/profileReducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

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

export const ProfileContainer = WithAuthRedirect(connect<
    MapStatePropsType,
    MapDispatchPropsType,
    {},
    AppStateType
>(
    mapStateToProps,
    {fetchUserProfile}
)(ProfileComponentWithRouter));

