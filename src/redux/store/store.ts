import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from "../reducers/authReducer";
import {usersReducer} from "../reducers/usersReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";
import {profileReducer} from "../reducers/profileReducer";
import {sidebarReducer} from "../reducers/sidebarReducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer >
export const store = createStore(rootReducer, applyMiddleware(thunk))


interface CustomWindow extends Window {
    store: AppStateType;
}

declare let window: CustomWindow;
// @ts-ignore
window.store = store;

// types
export type AppThankDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>
export type AppThankAction = ThunkAction<void, AppStateType, unknown, AnyAction>