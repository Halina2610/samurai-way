import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/store/store";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect  <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>;
        }
        return <Component {...restProps  as T} />;
    }

    return  connect(mapStateToPropsForRedirect)(RedirectComponent)

}

//types


type MapStateToPropsType = {
    isAuth: boolean
}