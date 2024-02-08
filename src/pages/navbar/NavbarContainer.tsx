import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redux/store/store";
import {sidebarPropsType} from "../../redux/reducers/sidebarReducer";


type MapStatePropsType = {
    sidebar: sidebarPropsType;
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
export const NavbarContainer = connect (mapStateToProps)(Navbar)
