import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {sidebarPropsType} from "../../types";
import {AppStateType} from "../../redux/store/store";


type MapStatePropsType = {
    sidebar: sidebarPropsType;
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
export const NavbarContainer = connect (mapStateToProps)(Navbar)
