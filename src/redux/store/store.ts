import { combineReducers, legacy_createStore } from 'redux';
import { profileReducer } from '../reducers/profileReducer';
import { dialogsReducer } from '../reducers/dialogsReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';
import {usersReducer} from "../reducers/usersReducer";
import {authReducer} from "../reducers/authReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});


export type AppStateType = ReturnType<typeof rootReducer>

let store: AppStateType = legacy_createStore(rootReducer);

interface CustomWindow extends Window {
    store: AppStateType;
}

declare let window: CustomWindow;

window.store = store;

export default store;